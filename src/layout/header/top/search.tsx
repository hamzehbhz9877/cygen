'use client'

import React, {useRef, useState} from 'react';
import {RiSearchLine} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import {RiFireLine} from "react-icons/ri";
import {MdKeyboardArrowLeft} from "react-icons/md";
import useClickOutside from "@/hooks/useOutsideClick";
import UseBodyOverLay from "@/hooks/useBodyOverLay";


const Search = () => {

    const [value, setValue] = useState<string>('')

    const handleChangeValue = (data: string) => setValue(data)

    const searchRef = useRef<HTMLFormElement | null>(null)
    const searchResult = useRef<HTMLDivElement | null>(null)


    const handleOpenSearchResult = () => {
        const overlay = document.querySelector('body .overlay')
        searchResult.current?.classList.add('active')
        overlay?.classList.add('active')
    }


    useClickOutside(searchRef, () => {
        const overlay = document.querySelector('body .overlay')
        searchResult.current?.classList.remove('active')
        overlay?.classList.remove('active')
    })


    return (
        <div className="header__top-search">
            <form ref={searchRef} onClick={handleOpenSearchResult}>
                <input placeholder="جستجو در بین 1500 محصول تخفیف دار" type="text" value={value}
                       onChange={(e) => handleChangeValue(e.target.value)}/>
                <button className="icon-search"><RiSearchLine className="icon" color={"white"} size={22}/></button>

                <div className="search-result" ref={searchResult}>
                    <div className="search-result__image">
                        <Link href={"/"}>
                            <Image width={400} height={200} className="w-full"
                                   src={'https://pars.parskalas.com/wp-content/uploads/2023/03/das-1.jpg'}
                                   alt={"جستجو"}/>
                        </Link>
                    </div>
                    <div className="search-result__promote">
                        <span><RiFireLine size={24} className="ml-[11px]"/> جستجوی پرطرفدار </span>
                        <ul className="search-result__tags">
                            <li className="search-result__tags-item"><Link href={"/"}>گوشی و
                                موبایل <MdKeyboardArrowLeft className="icon"/></Link></li>
                            <li className="search-result__tags-item"><Link href={"/"}>
                                آیفون <MdKeyboardArrowLeft className="icon"/></Link></li>
                            <li className="search-result__tags-item"><Link href={"/"}>اپل واچ<MdKeyboardArrowLeft
                                className="icon"/></Link></li>
                            <li className="search-result__tags-item"><Link href={"/"}>مک بوک سری 8<MdKeyboardArrowLeft
                                className="icon"/></Link></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;