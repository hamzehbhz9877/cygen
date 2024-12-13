import React from 'react';
import Link from "next/link";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";


const Menu = ({Name, Url, OpenInNewPage, childs}: dynamicLinksType[0] & { childs: any }) => {
    return (
        <div className="foot-box has-menu hidden md:block">
            {/*<Link href={Url} target={OpenInNewPage ? "_blank" : "_self"}>*/}
            {/*    */}
            {/*</Link>*/}
            <span className="foot-title">آیتم</span>
            <div>
                <ul className="menu">
                    {
                        childs.map(d => {
                            return <li key={d.Id} id="navi"
                                       className="menu-item menu-item-type-post_type menu-item-object-page">
                                <Link href={"/" + d.SeName}>{d.Name}</Link></li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Menu;