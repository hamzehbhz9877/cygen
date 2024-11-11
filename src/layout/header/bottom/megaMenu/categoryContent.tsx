import React from 'react';
import Link from "next/link";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";

type Props = {
    categoryId: number
    closeMenu:()=>void
}
const CategoryContent = ({categoryId,closeMenu}: Props) => {
    const {data} = useSuspenseQuery(GetSiteSettingsQuery)

    return (
        <div className="category-dropdown__content">
            <ul className="level-1">
                {data?.TopMenu.Categories.find((ele) => ele.Id === categoryId)?.SubCategories?.map((data,index) => {
                    return (
                        <li className="category-dropdown__content-item" key={index}>
                            <Link href={"/category/"+data.SeName} className="category-dropdown__content-title inline-block" onClick={closeMenu}>
                                <span>{data.Name}</span>
                            </Link>
                            <ul>
                                {data?.SubCategories?.map((e,index) => {
                                    return (
                                        <li key={index} className="category-dropdown__content-sub-item level-2" >
                                            <Link href={"/category/"+e.SeName} onClick={closeMenu}>
                                                <span>{e.Name}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default CategoryContent;