'use client'

import {createContext, ReactNode, useEffect, useState} from "react";
import {useRouter} from "next/navigation";

import Cookie from 'universal-cookie'
import {useQuery} from "@tanstack/react-query";
import {GetGuestCustomer} from "@/services/OtpAuthentication";

export const AuthProvider = createContext({} as any);

type Props= {
    children: ReactNode
}


const Auth= ({children}:Props) => {

    const cookie=new Cookie()


    const router = useRouter();

    const [user, setUser] = useState<any>(null);


    const {data} = useQuery({queryKey:["guest"],
        queryFn: GetGuestCustomer,enabled:cookie.get("guest") === undefined && cookie.get('user')===undefined
    });

    const resetCookie = async () => {
        await cookie.remove("user",{path:"/"});
        setUser(null)
        router.push("/");
    };

    const setCookie = (data: any) => {
        cookie.set("user", data.data, {path: "/"});
        setUser(data.data)
    };

    useEffect(() => {
        setUser(user?user:cookie.get('user'));
    }, [user]);

    useEffect(()=>{
        if(data)
            cookie.set("guest", data.data, {path: "/"});
    },[data])

    return (
        <AuthProvider.Provider
            value={{
                user,
                resetCookie,
                setCookie,
            }}
        >
            {children}
        </AuthProvider.Provider>
    );
};

export default Auth;