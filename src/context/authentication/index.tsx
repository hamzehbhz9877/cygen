'use client'

import {createContext, ReactNode, useEffect, useState} from "react";
import {useRouter} from "next/navigation";

import Cookie from 'universal-cookie'
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {GetGuestCustomer} from "@/services/OtpAuthentication";

export const AuthProvider = createContext({} as any);

type Props = {
    children: ReactNode
}


const Auth = ({children}: Props) => {

    const cookie = new Cookie()


    const router = useRouter();

    const [user, setUser] = useState<any>(null);

    const queryClient = useQueryClient()


    const {data} = useQuery({
        queryKey: ["guest"],
        queryFn: GetGuestCustomer, enabled: cookie.get("guest") === undefined && cookie.get('user') === undefined
    });

    const resetUserCookie = async () => {
        await cookie.remove("user", {path: "/"});
        await queryClient.invalidateQueries({queryKey: ["FlyoutShoppingCart"]})
        await queryClient.invalidateQueries({queryKey: ["ShoppingCart"]})
        setUser(null)
        router.push("/");
    };

    const setUserCookie = (data: any) => {
        cookie.set("user", data.data, {path: "/"});
        setUser(data.data)
    };

    useEffect(() => {
        setUser(user ? user : cookie.get('user'));
    }, [user]);

    useEffect(() => {
        if (data)
            cookie.set("guest", data.data, {path: "/"});
    }, [data])

    const resetGuestCookie = () => {
        cookie.remove('guest')
    }


    return (
        <AuthProvider.Provider
            value={{
                user,
                resetGuestCookie,
                resetUserCookie,
                setUserCookie,
            }}
        >
            {children}
        </AuthProvider.Provider>
    );
};

export default Auth;