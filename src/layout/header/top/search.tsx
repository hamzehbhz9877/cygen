'use client'
import {FaAngleLeft} from "react-icons/fa6";
import React, {useRef, useState} from 'react';
import {RiSearchLine} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import {RiFireLine} from "react-icons/ri";
import {MdKeyboardArrowLeft} from "react-icons/md";
import useClickOutside from "@/hooks/useOutsideClick";
import {keepPreviousData, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetPopularSearchTermsQuery, GetSiteSettingsQuery} from "@/services/Common";
import {UseDebouncedEffect} from "@/helpers/client";
import {SearchTermAutoComplete} from "@/services/Catalog";
import Banner from "@/components/banner";
import useOverlay from "@/context/overlay/useOverlay";
import { IoIosCloseCircle } from "react-icons/io";
import {useRouter} from "next/navigation";


const Search = () => {

    const {data} = useSuspenseQuery(GetPopularSearchTermsQuery)
    const {data: setting} = useSuspenseQuery(GetSiteSettingsQuery)

    const [value, setValue] = useState<string>('')

    const handleChangeValue = (data: string) => setValue(data)

    const searchRef = useRef<HTMLFormElement | null>(null)
    const searchResult = useRef<HTMLDivElement | null>(null)
const router=useRouter()

    const {data: SearchResultData, refetch} = useQuery({
        queryFn: () => SearchTermAutoComplete({search: value, sizeOfImage: 50}),
        queryKey: ["search", value],
        placeholderData: keepPreviousData,
        gcTime: 0,
        staleTime: 0
    })
    const {toggleOverlay}=useOverlay()

    const handleOpenSearchResult = () => {
        searchResult.current?.classList.add('active')
        toggleOverlay(true)
    }


    useClickOutside(searchRef, () => {
        if (searchResult.current?.classList.contains('active')) {
            searchResult.current?.classList.remove('active')
            toggleOverlay(false)
        }
    })

    UseDebouncedEffect(() => {
        if (value.length >= setting.SearchBox.SearchTermMinimumLength && setting.AutoCompleteEnabled)
            refetch()
    }, 500, value);


    if (setting.SearchBox.ShowSearchBox)
        return (
            <div className="header__top-search">
                <form ref={searchRef} onClick={handleOpenSearchResult}>
                    {value?
                    <IoIosCloseCircle size={24} className={"absolute top-2/4 -translate-y-2/4 left-[15px]"} role={"button"} onClick={()=>setValue("")}/>:""}
                    <input placeholder="جستجو در بین 1500 محصول تخفیف دار" type="text" value={value}
                           onChange={(e) => handleChangeValue(e.target.value)}/>
                    <button className="icon-search"><RiSearchLine className="icon" color={"white"} size={22}/></button>
                    <div className={`${SearchResultData?.data.length > 0 ? 'list' : ""}`}>
                        <div className={`search-result`} ref={searchResult}>
                            {SearchResultData?.data.length > 0 ? <div>
                                    <div onClick={()=>{
                                        router.push(`/search?q=${value}`)
                                        searchResult.current?.classList.remove('active')
                                        toggleOverlay(false)
                                    }}
                                        className="search-result__top">
                                        <div className="flex">
                                            <p>جستجو برای ...</p><p>{value}</p></div>
                                        <span>مشاهده همه نتایج
                                            <FaAngleLeft className="ms-2" size={10} color={"#223c78"}/>
                                    </span>
                                    </div>
                                    <ul className="search-result__list">
                                        <div>
                                            {
                                                SearchResultData?.data.map(d => {
                                                    return <li key={d.Id} className="flex items-center gap-[10px] cursor-pointer">
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
                                        <Link href={"/"}>
                                            <Banner PositionSystemName={"search_box"} PictureSize={400}/>
                                        </Link>
                                    </div>
                                    <div className="search-result__promote">
                                        <span><RiFireLine size={24} className="ml-[11px]"/> جستجوی پرطرفدار </span>
                                        <ul className="search-result__tags">
                                            {data.map(d => {
                                                return <li key={d} className="search-result__tags-item cursor-pointer">
                                                    <Link
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
                </form>
            </div>
        )
            ;
};

export default Search;