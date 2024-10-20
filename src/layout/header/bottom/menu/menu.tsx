import React, {useRef, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {IoIosArrowDown} from "react-icons/io";
import useClickOutside from "@/hooks/useOutsideClick";

const Menu = () => {

    const clickRef = useRef<HTMLDivElement | null>(null);
    const [isDropdownActive, setIsDropDownActive] = useState(false)


    const handleDropDown = () => {
        setIsDropDownActive(!isDropdownActive)
    }
    const closeMenu = () => {
        clickRef.current?.classList.remove("menu-dropdown--active");
    };

    useClickOutside(clickRef, closeMenu);

    return (
        <li className="header__bottom-list-item menu"  onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
            <Link href={"/"}>
                <Image alt={"image-icon-menu"}
                       src="https://pars.parskalas.com/wp-content/uploads/2022/10/store.png" width={18}
                       height={18}/>
                <span className="flex items-center gap-[5px]">
                        <span>لیست کالا ها</span>
                        <IoIosArrowDown size={10}/>
                        </span>
            </Link>

            <div ref={clickRef} className={`menu-dropdown  flex ${isDropdownActive?'menu-dropdown--active':""}`}>
                <ul>
                    <li><Link href={"/"}/>آیتم</li>
                    <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <li><Link href={"/"}/>آیتم</li>
                    <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <li><Link href={"/"}/>آیتم</li>
                    <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <li><Link href={"/"}/>آیتم</li>
                </ul>

            </div>
        </li>
    );
};

export default Menu;