'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";

const Logo = () => {
    const {data} = useSuspenseQuery(GetSiteSettingsQuery)
    return (
        <div className="logo">
            <Link href={"/"} >
                <Image alt={data.Logo.StoreName} width={135} height={61}
                       src={data.Logo.LogoPath}/>
            </Link>

        </div>
    );
};

export default Logo;