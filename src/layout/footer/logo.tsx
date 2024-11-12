'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";

const Logo = () => {
    const {data} = useSuspenseQuery(GetSiteSettingsQuery)
    return (
        <div className="logo-box">
            <Link href=""><Image width={100} height={100}
                alt={data.Logo.StoreName}
                                 src={data.Logo.LogoPath}/></Link>
        </div>

    );
};

export default Logo;