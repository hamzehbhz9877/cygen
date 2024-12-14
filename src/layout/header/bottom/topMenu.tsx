

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";

const TopMenu = () => {
    const {data:setting} = useSuspenseQuery(GetSiteSettingsQuery)

    return (
        setting?.TopMenu.Topics.map(d=>{
            return (
                <li key={d.Id} className="header__bottom-list-item">
                    <Link href={"/"+d.SeName} target={d.OpenInNewPage ? "_blank" : "_self"}>
                        {d?.Icon ?
                            <Image className={""} alt={d.Name} src={d.Name} width={18} height={18}/> : ""}
                        <span>{d.Name}</span>
                    </Link>
                </li>
            )
        })
    );
};

export default TopMenu;