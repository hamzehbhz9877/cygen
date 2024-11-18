import React from 'react';
import Collapse from "@/components/collapse";
import {LiaAngleDownSolid} from "react-icons/lia";
import Link from "next/link";


const MenuMobile = ({Name, Url, OpenInNewPage, childs}: dynamicLinksType[0] & { childs: any }) => {
    return (
        <div className="footer-menu-mobile">
            <Collapse
                withAnimation={false}
                isOpen={false}
                title={
                    <div>
                        <span>آیتم</span>
                        <LiaAngleDownSolid size={14} color={"#000"}/>
                    </div>
                }
                content={
                    <div>
                        <ul className="menu">
                            {
                                childs.map(d => {
                                    return <li key={d.Id} id="navi"
                                               className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <Link href={"/"+d.SeName}>{d.Name}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                }
            />
        </div>
    );
};

export default MenuMobile;