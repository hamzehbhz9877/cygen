import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import Menu from "@/layout/header/bottom/menu/menu";
import {findKey} from "@/helpers/client";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetDynamicLinkPositionsQuery} from "@/services/DynamicLink";
import {GetAllActivePluginsQuery} from "@/services/Plugin";

const RightMenu = () => {
    const {data} = useSuspenseQuery(GetDynamicLinkPositionsQuery)
    const {data:widget} = useSuspenseQuery(GetAllActivePluginsQuery)

    const [rightMenu] = useState(()=>{
        const rightd = findKey(10,data)?.map(d => ({...d, children: []}))
        const rightItems = rightd?.filter(d => !d.ParentId)
        rightd?.forEach(item => {
            if (item.ParentId) {
                const findIndex = rightItems.findIndex(m => m.Id === item.ParentId)
                rightItems[findIndex].children.push(item)
            }
        })
        return rightItems
    })
    if (widget.includes("Widgets.DynamicLink"))
    return (
        rightMenu?.map(d => {
            if (d.children.length === 0)
                return (
                    <li key={d.Id} className="header__bottom-list-item">
                        <Link href={d.Url} target={d.OpenInNewPage ? "_blank" : "_self"}>
                            {d.Icon ?
                                <Image className={""} alt={d.Name} src={d.Name} width={18} height={18}/> : ""}
                            <span>{d.Name}</span>
                        </Link>
                    </li>
                )
            else
                return <Menu key={d.Id} {...d}/>
        })
    );
    else return null
};

export default RightMenu;