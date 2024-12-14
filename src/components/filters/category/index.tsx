'use client'
import React from 'react';
import Collapse from "@/components/collapse";
import {LiaAngleDownSolid} from "react-icons/lia";
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";
import {FaAngleLeft, FaCheck} from "react-icons/fa";
import {useSearchParams} from "next/navigation";
import useQueryParams from "@/hooks/useQueryParams";

const generateRow = (data,search,addQueryParam) => {



    const toggleSubMenu = (e) => {
        e.stopPropagation();

        const submenu = e.currentTarget.parentElement.parentElement.querySelector("ul");
        const icon = e.currentTarget.parentElement.parentElement.querySelector("svg");
        const rrr = e.currentTarget.parentElement.parentElement.querySelector(".rrr");

        if (!submenu) return;

        if (submenu.style.display === "none" || !submenu.style.display) {
            submenu.style.display = "block";
            if (icon)
                icon.style.transform = 'rotate(-90deg)';
            if (rrr)
                rrr.classList.add("border-b");
        } else {
            submenu.style.display = "none";
            if (icon)
                icon.style.transform = 'rotate(0deg)';
            if (rrr)
                rrr.classList.remove("border-b");

        }
    };
    const renderSubMenu = (subMenu, Index) => {
        return (
            <ul className={`submenu-${Index} hidden`}>
                {subMenu.map((subItem, index) => (
                    <li key={index}  className=" cursor-pointer">
                        <div className={`flex gap-2 items-center`}>
                            <div onClick={toggleSubMenu}>
                                {subItem.SubCategories.length > 0 ? <FaAngleLeft className="transition"/> : ""}
                            </div>
                            <div className={`border-b border-[#f0f0f1] py-3 w-full relative`} >
                                <a onClick={()=>addQueryParam('categoryId',subItem.Id)}>
                                    {subItem.Name}
                                    {+search===+subItem.Id?<FaCheck
                                        className="absolute left-[10px] top-1/2 -translate-y-1/2 text-dynamic-color-from"/>:""}
                                </a>
                            </div>
                        </div>
                        {subItem.SubCategories && renderSubMenu(subItem.SubCategories, Index + 1)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <ul>
                {data.map((item, index) => {
                    return <li key={index} className=" cursor-pointer">
                        <div className={`flex gap-2 items-center`}>
                            <div onClick={toggleSubMenu}>
                                {item.SubCategories.length > 0 ? <FaAngleLeft className="transition"/> : ""}
                            </div>
                            <div
                                className={`${index === data.length - 1 ? 'rrr' : 'border-b'}  border-[#f0f0f1] relative py-3 w-full`}>
                                <a onClick={() => addQueryParam('categoryId', item.Id)}>
                                    {item.Name}
                                    {+search === +item.Id ? <FaCheck
                                        className="absolute left-[10px] top-1/2 -translate-y-1/2 text-dynamic-color-from"/> : ""}
                                </a>
                            </div>
                        </div>
                        {item.SubCategories && renderSubMenu(item.SubCategories, 1)}
                    </li>
                })}
            </ul>
        </div>
    );
};

const CategoryFilter = ({type, title}) => {

    const {data} = useSuspenseQuery(GetSiteSettingsQuery)
    const search=useSearchParams()
    const {addQueryParam,removeQueryParam}=useQueryParams();

    return (
        <div className="filter category-filter">
            <Collapse
                isOpen={false}
                title={
                    <div className="filter__title">
                        <h2 className="">{title}</h2>
                        <LiaAngleDownSolid size={14} color={"#000"}/>
                    </div>
                }
                content={
                    <div className="filter__content">
                        <div className="max-h-[300px] overflow-y-auto p-3">
                            <div className="relative cursor-pointer" onClick={()=>removeQueryParam('categoryId')}>
                                <div className="py-3 border-b border-[#f0f0f1]">همه کالاها</div>
                                {!search.get('categoryId')?<FaCheck className="absolute left-[10px] top-1/2 -translate-y-1/2 text-dynamic-color-from"/>:""}
                            </div>
                            {generateRow(data.TopMenu.Categories,search.get('categoryId'),addQueryParam)}
                        </div>
                    </div>
                }
            />

        </div>
    );
};

export default CategoryFilter;