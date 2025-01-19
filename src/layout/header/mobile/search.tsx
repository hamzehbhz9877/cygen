'use client'
import {FaAngleLeft} from "react-icons/fa6";
import React, {useEffect, useRef, useState} from 'react';
import {RiSearchLine} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import {RiFireLine} from "react-icons/ri";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {keepPreviousData, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetPopularSearchTermsQuery, GetSiteSettingsQuery} from "@/services/Common";
import {useDebouncedEffect} from "@/helpers/client";
import {SearchTermAutoComplete} from "@/services/Catalog";
import Banner from "@/components/banner";
import {IoIosCloseCircle, IoMdClose} from "react-icons/io";
import {useRouter, useSearchParams} from "next/navigation";


const SearchMobile = () => {

    const {data} = useSuspenseQuery(GetPopularSearchTermsQuery)
    const {data: setting} = useSuspenseQuery(GetSiteSettingsQuery)

    const searchParams = useSearchParams()

    const handleChangeValue = (data: string) => setValue(data)
    const [value, setValue] = useState<string>(searchParams.get('q') ?? '')

    useEffect(() => {
        if (searchParams.get('q'))
        {
            setValue(searchParams.get('q'))
        }
        else
        {
            setValue('')
        }
    }, [searchParams.get('q')])

    const searchRef = useRef<HTMLFormElement | null>(null)
    const searchResult = useRef<HTMLDivElement | null>(null)
    const router=useRouter()
    const [dValue,setDValue] = useState<string>('')

    const {data: SearchResultData} = useQuery({
        queryFn: () => SearchTermAutoComplete({search: dValue, sizeOfImage: 50}),
        queryKey: ["search", dValue],
        placeholderData: keepPreviousData,
        gcTime: 0,
        staleTime: 0
    })


    useDebouncedEffect(() => {
        if (value?.length >= setting.SearchBox.SearchTermMinimumLength && setting.SearchBox.AutoCompleteEnabled) {
            setDValue(value)
        }
    }, 500, value);

    const closeSearch=()=>{
        document.querySelector(".header__top-search-mobile.active").classList.remove("active")
    }

    if (setting.SearchBox.ShowSearchBox)
        return (
            <div className="header__top-search header__top-search-mobile">
                <form className={"flex gap-[15px] items-center"}>
                    <div className={"search-top relative"}>
                        {value ?
                            <IoIosCloseCircle size={24} className={"absolute top-2/4 -translate-y-2/4 left-[15px]"}
                                              role={"button"} onClick={() => setValue("")}/> : ""}
                        <input placeholder="جستجو..." type="text" value={value}
                               onChange={(e) => handleChangeValue(e.target.value)}/>

                        <RiSearchLine className="icon" color={"#9c9d9e"} size={24}/>
                    </div>
                    <IoMdClose role={"button"} size={27} onClick={closeSearch}/>
                </form>
                <div className={`flex-grow ${SearchResultData?.data.length > 0 ? 'list' : ""}`}>
                    <div className={`search-result h-full`}>
                        {SearchResultData?.data.length > 0 ? <div>
                                <div onClick={() => {
                                    closeSearch()
                                    router.push(`/search?q=${value}`)
                                }}
                                     className="search-result__top">
                                    <div className="flex">
                                        <p>جستجو برای ...</p><p>{value}</p></div>
                                    <span>مشاهده همه نتایج
                                            <FaAngleLeft className="ms-2" size={10} color={"#223c78"}/>
                                    </span>
                                </div>
                            <p className="text-[13px] px-[15px]">تمامی محصولات {value}</p>
                                <ul className="search-result__list">
                                    <div>
                                        {
                                            SearchResultData?.data.map(d => {
                                                return <li key={d.Id}
                                                           className="flex items-center gap-[10px] cursor-pointer">
                                                    {
                                                        setting.SearchBox.ShowProductImagesInSearchAutoComplete ?
                                                            <div className="w-[56px] h-[56px]">

                                                                <Image width={100} height={100}
                                                                       className="h-full object-contain"
                                                                       src={d.PictureUrl}
                                                                       alt={d.Name}/>
                                                            </div> : ""
                                                    }
                                                    <h2>{d.Name}</h2>
                                                </li>
                                            })
                                        }
                                    </div>
                                </ul>
                            </div> :
                            <>
                                <div className="search-result__image">
                                        <Banner isSingle PositionSystemNames={"search_box"} PictureSize={400}/>
                                </div>
                                <div className="search-result__promote">
                                    <span><RiFireLine size={24} className="ml-[11px]"/> جستجوی پرطرفدار </span>
                                    <ul className="search-result__tags">
                                        {data.map(d => {
                                            return <li key={d} className="search-result__tags-item cursor-pointer">
                                                <Link onClick={closeSearch}
                                                    href={`/search?q=${d}`}>{d}<MdKeyboardArrowLeft
                                                    className="icon"/></Link>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </>
                        }
                        {/*<div className="search-container">*/}
                        {/*    <div className="container-tab flex">*/}
                        {/*        <div className="tab-header ">*/}
                        {/*            <div className="tab-header-col" >*/}
                        {/*                <div className="justDesktop">*/}
                        {/*                    <span className="title-tab">دسته بندی</span>*/}
                        {/*                    <div className="content">*/}
                        {/*                        <ul>*/}
                        {/*                            {new Array(3).fill(<li>*/}
                        {/*                                <a href="/category/%D9%86%D8%A7%D8%AA%DB%8C%D9%86%DA%AF-%D9%81%D9%88%D9%86-2">*/}
                        {/*                                    موبایل ناتینگ فون*/}
                        {/*                                </a>*/}
                        {/*                            </li>).map(d=>d)}*/}
                        {/*                        </ul>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className="tab-header-col mt-[16px]">*/}
                        {/*                <div className="justDesktop">*/}
                        {/*                    <span className="title-tab">برندها</span>*/}
                        {/*                    <div className="content">*/}
                        {/*                        <ul>*/}
                        {/*                            {new Array(3).fill(<li>*/}
                        {/*                                <a href="/category/%D9%86%D8%A7%D8%AA%DB%8C%D9%86%DA%AF-%D9%81%D9%88%D9%86-2">*/}
                        {/*                                    موبایل ناتینگ فون*/}
                        {/*                                </a>*/}
                        {/*                            </li>).map(d=>d)}*/}
                        {/*                        </ul>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="bg-[#f2f2f2] mr-[10px] w-full px-[10px] py-[7px]">*/}
                        {/*            <h4 className="py-2">کالاهای مرتبط</h4>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
            ;
};

export default SearchMobile;