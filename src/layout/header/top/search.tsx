'use client'

import React, {useRef, useState} from 'react';
import {RiSearchLine} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import {RiFireLine} from "react-icons/ri";
import {MdKeyboardArrowLeft} from "react-icons/md";
import useClickOutside from "@/hooks/useOutsideClick";
import UseBodyOverLay from "@/hooks/useBodyOverLay";
import {keepPreviousData, useMutation, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetPopularSearchTermsQuery, GetSiteSettingsQuery} from "@/services/Common";
import useQueryParams from "@/hooks/useQueryParams";
import {useRouter} from "next/navigation";
import {UseDebouncedEffect} from "@/helpers/client";
import {SearchTermAutoComplete} from "@/services/Catalog";


const Search = () => {

    const {data} = useSuspenseQuery(GetPopularSearchTermsQuery)
    const {data: setting} = useSuspenseQuery(GetSiteSettingsQuery)

    const [value, setValue] = useState<string>('')

    const handleChangeValue = (data: string) => setValue(data)

    const searchRef = useRef<HTMLFormElement | null>(null)
    const searchResult = useRef<HTMLDivElement | null>(null)


    const {data: SearchResultData,refetch} = useQuery({
        queryFn: ()=>SearchTermAutoComplete({search:value,sizeOfImage:50}),
        queryKey:["search",value],
        placeholderData:keepPreviousData,
        gcTime:0,
        staleTime:0
    })

    const handleOpenSearchResult = () => {
        const overlay = document.querySelector('body .overlay')
        searchResult.current?.classList.add('active')
        overlay?.classList.add('active')
    }


    useClickOutside(searchRef, () => {
        if (searchResult.current?.classList.contains('active')) {
            const overlay = document.querySelector('body .overlay')
            searchResult.current?.classList.remove('active')
            overlay?.classList.remove('active')
        }
    })

    UseDebouncedEffect((data) => {
        if(value.length>=setting.SearchBox.SearchTermMinimumLength)
            refetch()
    }, 500, value);



    if(setting.SearchBox.ShowSearchBox)
    return (
        <div className="header__top-search">
            <form ref={searchRef} onClick={handleOpenSearchResult}>
                <input placeholder="جستجو در بین 1500 محصول تخفیف دار" type="text" value={value}
                       onChange={(e) => handleChangeValue(e.target.value)}/>
                <button className="icon-search"><RiSearchLine className="icon" color={"white"} size={22}/></button>

                <div className="search-result" ref={searchResult}>

                    { SearchResultData?.data.length>0 ? <ul className="search-result__list">
                            <div>
                                {
                                    SearchResultData?.data.map(d => {
                                        return <li key={d.Id} className="flex items-center gap-[10px]">
                                            {
                                                setting.SearchBox.ShowProductImagesInSearchAutoComplete ?
                                                    <div className="w-[50px] h-[50px]">

                                                        <Image width={100} height={50} className="object-contain"
                                                               src={d.PictureUrl}
                                                               alt={d.Name}/>
                                                    </div>:""
                                            }

                                            <span>{d.Name}</span>
                                        </li>
                                    })
                                }
                            </div>
                    </ul> :
                            <>
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
                                    {data.data.map(d => {
                                        return <li key={d} className="search-result__tags-item cursor-pointer"><Link
                                            href={`/category?term=${d}`}>{d}<MdKeyboardArrowLeft
                                            className="icon"/></Link>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </>
                    }

                </div>
            </form>
        </div>
    );
};

export default Search;