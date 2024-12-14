'use client'
import React, {Suspense, useEffect} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {productStore} from "@/state/product/product";

const NotFound = () => {

    const pathname = usePathname()
    const {setProductNotFound} = productStore()
    useEffect(() => {
        if (pathname.includes("product")) {
            setProductNotFound(true)
        }
        return () => {
            setProductNotFound(false)
        }
    }, [pathname])
    return (
            <div className="container">
                <div className="error-404 ">

                    <h2 className={"text-center"}>صفحه‌ای که به دنبال آن بودید یافت نشد!</h2>

                    <div className={"text-center "}>
                        <span><Link href="/">صفحه اصلی</Link></span>
                    </div>

                    <img src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/404.png"
                         alt="error-404"/>

                </div>
            </div>
    );
};

export default NotFound;