'use client'
import {FaAngleLeft} from "react-icons/fa6";
import React, {useEffect, useRef, useState} from 'react';
import {RiSearchLine} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import {RiFireLine} from "react-icons/ri";
import {MdKeyboardArrowLeft} from "react-icons/md";
import useClickOutside from "@/hooks/useOutsideClick";
import {keepPreviousData, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetPopularSearchTermsQuery, GetSiteSettingsQuery} from "@/services/Common";
import {useDebouncedEffect} from "@/helpers/client";
import {SearchTermAutoComplete} from "@/services/Catalog";
import Banner from "@/components/banner";
import useOverlay from "@/context/overlay/useOverlay";
import {IoIosCloseCircle} from "react-icons/io";
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import useQueryParams from "@/hooks/useQueryParams";


const Search = () => {

    const {data} = useSuspenseQuery(GetPopularSearchTermsQuery)
    const {data: setting} = useSuspenseQuery(GetSiteSettingsQuery)
    const searchParams = useSearchParams()
    const [value, setValue] = useState<string>(searchParams.get('q') ?? '')

    useEffect(() => {
        if (searchParams.get('q')) {
            setValue(searchParams.get('q'))
        } else {
            setValue('')
        }
    }, [searchParams.get('q')])

    const handleChangeValue = (data: string) => setValue(data)

    const searchRef = useRef<HTMLFormElement | null>(null)
    const searchResult = useRef<HTMLDivElement | null>(null)
    const router = useRouter()
    const [dValue, setDValue] = useState<string>('')

    const {data: SearchResultData, isFetching} = useQuery({
        queryFn: () => SearchTermAutoComplete({search: dValue, sizeOfImage: 50}),
        queryKey: ["search", dValue],
        placeholderData: keepPreviousData,
        gcTime: 0,
        staleTime: 0
    })
    const {toggleOverlay} = useOverlay()

    const handleOpenSearchResult = () => {
        searchResult.current?.classList.add('active')
        toggleOverlay(true)
    }

    const closeMenu = () => {
        searchResult.current?.classList.remove('active')
        toggleOverlay(false)
    }


    useClickOutside(searchRef, () => {
        if (searchResult.current?.classList.contains('active')) {
            closeMenu()
        }
    })

    useDebouncedEffect(() => {
        if (value?.length >= setting.SearchBox.SearchTermMinimumLength && setting.SearchBox.AutoCompleteEnabled) {
            setDValue(value)
        }
        if (value?.length <= setting.SearchBox.SearchTermMinimumLength) {
            setDValue('')
        }
    }, 500, value);


    const handleSubmit = (e) => {
        e.preventDefault()
        closeMenu()
        if (dValue !== '')
            router.push(`/search?q=${dValue}`)
    }


    if (setting.SearchBox.ShowSearchBox)
        return (
            <div className="header__top-search">
                <form ref={searchRef} onSubmit={handleSubmit} onClick={handleOpenSearchResult}>
                    {dValue ?
                        <IoIosCloseCircle size={24} className={"absolute top-2/4 -translate-y-2/4 left-[15px]"}
                                          role={"button"} onClick={() => setValue("")}/> : ""}
                    <input placeholder="جستجو در بین 1500 محصول تخفیف دار" type="text" value={value}
                           onChange={(e) => {
                               handleChangeValue(e.target.value)
                               if (!searchResult.current?.classList.contains('active')) {
                                   handleOpenSearchResult()
                               }
                           }}/>
                    <button type={"submit"} className="icon-search"><RiSearchLine className="icon" color={"white"}
                                                                                  size={22}/></button>
                    <div className={`${SearchResultData?.data.length > 0 ? 'list' : ""}`}>
                        <div className={`search-result`} ref={searchResult}>
                            {dValue.length >= setting.SearchBox.SearchTermMinimumLength && SearchResultData?.data.length > 0 ?
                                <div>
                                    <div onClick={async (e) => {
                                        e.stopPropagation()
                                        closeMenu()
                                        if (dValue !== '')
                                            router.push(`/search?q=${dValue}`)
                                    }}
                                         className="search-result__top">
                                        <div className="flex">
                                            <p>جستجو برای ...</p><p>{dValue}</p></div>
                                        <span>مشاهده همه نتایج
                                            <FaAngleLeft className="ms-2" size={10} color={"#223c78"}/>
                                    </span>
                                    </div>
                                    <ul className="search-result__list">
                                        <div>
                                            {
                                                SearchResultData?.data.map(d => {
                                                    return <Link key={d.Id} href={`/product/${d.SeName}`}
                                                                 onClick={(e) => {
                                                                     e.stopPropagation()
                                                                     closeMenu()
                                                                 }}>
                                                        <li
                                                            className="flex items-center gap-[10px] cursor-pointer">
                                                            {
                                                                setting.SearchBox.ShowProductImagesInSearchAutoComplete ?
                                                                    <div className="w-[100px] h-[56px]">

                                                                        <Image width={100} height={100}
                                                                               className="h-full object-contain w-auto"
                                                                               src={d.PictureUrl}
                                                                               alt={d.Name}/>
                                                                    </div> : ""
                                                            }
                                                            <h2>{d.Name}</h2>
                                                        </li>
                                                    </Link>
                                                })
                                            }
                                        </div>
                                    </ul>
                                </div> :
                                <>
                                    {!isFetching && SearchResultData?.data?.length === 0 && dValue?.length >= setting.SearchBox.SearchTermMinimumLength ?
                                        <div
                                            className="border border-[#ef5350] bg-[#fdeded] text-[#ef5350]  py-4 px-2 rounded-md width-100">
                                            <div className="flex items-center">
                                                <div className="me-3">
                                                    <svg aria-hidden="true" data-icon="exclamation-circle"
                                                         fill="currentColor"
                                                         focusable="false" height="1.3em" viewBox="64 64 896 896"
                                                         width="1.3em">
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                        <path
                                                            d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
                                                    </svg>
                                                </div>
                                                <div className="me-2">
                                                    متاسفانه نتوانستیم کالای مرتبطی را برای شما پیدا کنیم!
                                                </div>
                                            </div>
                                        </div> : <>
                                            <div className="search-result__image">
                                                    <Banner isSingle PositionSystemName={"search_box"}
                                                            PictureSize={400}/>
                                            </div>
                                            <div className="search-result__promote">
                                                <span><RiFireLine size={24}
                                                                  className="ml-[11px]"/> جستجوی پرطرفدار </span>
                                                <ul className="search-result__tags">
                                                    {data.map(d => {
                                                        return <li key={d}
                                                                   className="search-result__tags-item cursor-pointer"
                                                                   onClick={(e) => {
                                                                       e.stopPropagation()
                                                                       closeMenu()
                                                                   }}>
                                                            <Link
                                                                href={`/search?q=${d}`}>{d}<MdKeyboardArrowLeft
                                                                className="icon"/></Link>
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                        </>
                                    }

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