import axios from 'axios';
import Cookie from "universal-cookie";

export const instant = axios.create({
    baseURL: "https://api.cygenco.com/api",
    // baseURL: "http://localhost:4000",
})

export const CancelToken = () => {
    const controller = new AbortController();
    instant.defaults.signal = controller.signal
    return controller;
};

instant.interceptors.request.use((config) => {

        const cookie = new Cookie()

        const guestToken = cookie.get("guest")?.AccessToken
        const userToken = cookie.get("guest")?.AccessToken


        config.headers = {
            Accept: 'application/json',
        };

        if (guestToken !== undefined || userToken!==undefined) {
            config.headers.Authorization = `Bearer ${userToken?userToken:guestToken}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instant.interceptors.response.use((res) => {
        return res;
    },
    async (error) => {
        // const originalConfig = error.config;

        if (error.response.status !== 401 && error.response.status >= 400 && error.response.data.message) {
            // toast.error(error.response.data.message, {
            //     duration: 2000,
            //     position: 'top-center',
            //     className: '',
            //     ariaProps: {
            //         role: 'status',
            //         'aria-live': 'polite',
            //     },
            // });
            // if (error.response.status === 403){
            //     replace("/", {replace: true})
            // }
        }

        // if (error.response.status === 401 && !originalConfig._retry) {
        //     originalConfig._retry = true;
        //     if (!cookie.token) {
        //         addAlert({
        //             message: error.response.data.message,
        //             timeout: 5,
        //             type: "danger",
        //         })
        //         // replace("/", {replace: true})
        //     } else {
        //         try {
        //             const {data}: AxiosResponse<Api<Authentication>> = await axios.post('api/users/refreshToken', {refreshToken: cookie.refreshToken});
        //             if (data.isSuccess) {
        //                 setCookie(data.data)
        //                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token;
        //                 return instant(originalConfig);
        //             }
        //         } catch (err) {
        //             resetCookie()
        //         }
        //     }
        // }
        return Promise.reject(error);
    }
);

