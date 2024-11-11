import React, {useEffect, useRef, useState} from 'react';
import useClickOutside from "@/hooks/useOutsideClick";
import Categories from "@/layout/header/bottom/megaMenu/categories";
import CategoryContent from "@/layout/header/bottom/megaMenu/categoryContent";
import {MdOutlineMenu} from "react-icons/md";
import UseBodyOverLay from "@/hooks/useBodyOverLay";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";

const MegaMenu = () => {
    const clickRef = useRef<HTMLDivElement | null>(null);

    const [categoryId, setCategoryId] = useState(1)
    const [isDropdownActive, setIsDropDownActive] = useState(false)


    const handleDropDown = (value:boolean) => {
        setIsDropDownActive(value)
    }


    const closeMenu = () => {
        if (clickRef.current?.classList.contains("category-dropdown--active")) {
            clickRef.current?.classList.remove("category-dropdown--active");
            setIsDropDownActive(false)
        }
    };

    useClickOutside(clickRef, closeMenu);

    UseBodyOverLay(isDropdownActive)


   return (
        <li className="header__bottom-list-item" onMouseEnter={()=>handleDropDown(true)}
            onMouseLeave={()=>handleDropDown(false)}>
            <span className="!pr-0 cursor-pointer">
                <MdOutlineMenu size={18}/>
                <span>دسته بندی کالا ها</span>
            </span>
            <div ref={clickRef}  className={`category-dropdown flex ${isDropdownActive ?
                "category-dropdown--active" : ""}`}>
                <Categories closeMenu={closeMenu}  setSubCategoryId={setCategoryId}/>
                <CategoryContent closeMenu={closeMenu} categoryId={categoryId}/>
            </div>
        </li>

    )
        ;
};

export default MegaMenu;