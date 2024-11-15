import React, {useRef, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {IoIosArrowDown} from "react-icons/io";
import useClickOutside from "@/hooks/useOutsideClick";

const Menu = ({Name, Icon,children}:any) => {

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
        <li className="header__bottom-list-item menu" onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
            <Link href={"/"}>
                {Icon ?
                    <Image className={""} alt={Name} src={Name} width={18} height={18}/> : ""}
                <span className="flex items-center gap-[5px]">
                        <span className="w-max">{Name}</span>
                        <IoIosArrowDown size={10}/>
                        </span>
            </Link>

            <div ref={clickRef} className={`menu-dropdown  flex ${isDropdownActive ? 'menu-dropdown--active' : ""}`}>
                <ul>
                    {
                        children.map(link => {
                            return <li key={link.Id}><Link href={link.Url}><span>{link.Name}</span></Link></li>
                        })
                    }
                </ul>
            </div>
        </li>
    );
};

export default Menu;