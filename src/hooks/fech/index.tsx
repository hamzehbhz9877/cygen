'use server'

import {redirectStatus} from "@/utils/notFound-server";
import Cookie from "universal-cookie";
import {isTokenExpired} from "@/services/httpservice";


const fetchAPi = async (url) => {

    const cookie = new Cookie()

    const guestToken = cookie.get("guest")?.AccessToken
    const userToken = cookie.get("user")?.AccessToken

    let Authorization

    if (userToken) {
        Authorization = `Bearer ${userToken}`;
    } else {
        if (!guestToken || (guestToken && isTokenExpired(guestToken))) {
            const res = await fetch('https://api.cygenco.com/api/OtpAuthentication/GetGuestCustomer', {method: 'post'})
            const data = await res.json()
            if (cookie.get('guest'))
                cookie.remove('guest');
            cookie.set('guest', data)
            Authorization = `Bearer ${data.AccessToken}`;
        } else {
            Authorization = `Bearer ${guestToken}`;
        }
    }

    const res = await fetch(url.toString(), {
        headers: {
            Authorization
        }, cache: 'no-store'
    })
    if (res.status === 204) {
        return []
    }
    if (res.status === 401) {
        return []
    }
    const data = await res.json()
    return redirectStatus(data)
}

export {fetchAPi}