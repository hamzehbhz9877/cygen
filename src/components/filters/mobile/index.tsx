'use client'

import React, {useEffect, useRef} from 'react';
import {RiFilterOffLine} from "react-icons/ri";
import {RiSortDesc} from "react-icons/ri";

import FilterSidebarMobile from "@/components/filters/mobile/filterSidebarMobile";
import ActiveFilters from "@/components/filters/active";
import FilterByPrice from "@/components/filters/price";
import CheckBoxFilter from "@/components/filters/checkbox";
import useClickOutside from "@/hooks/useOutsideClick";
import MobileSort from "@/components/filters/sort/mobile";
import Logic from "@/components/filters/mobile/logic";
import useOverlay from "@/context/overlay/useOverlay";
import {useParams} from "next/navigation";

const MobileHeadFilters = ({data,isRefetching}: any) => {

    const {toggleOverlay}=useOverlay()

    const sortRef = useRef<HTMLDivElement | null>(null)

    const {handleFilter, handleSort} = Logic()

    useClickOutside(sortRef, () => {
        if(document.querySelector('.sort__mobile').classList.contains("open"))
        {
            document.querySelector('.sort__mobile').classList.remove("open")
            toggleOverlay(false)
        }
    })
    const params=useParams()

    return (
        <div className="block lg:hidden mb-[15px] filters__mobile">
            <div className="box-filter-shop">
                <div>
                    <span className="filter_by_botton show_sidebar " onClick={handleFilter}>
                    <RiFilterOffLine size={17} color={"#2c2c2c"}/>
                    فیلتر کردن</span>
                </div>


                <div ref={sortRef} className="relative " onClick={handleSort}>
                    <span className="filter_by_botton show_sortby"><RiSortDesc size={17} color={"#2c2c2c"}
                    />مرتب سازی</span>
                    <MobileSort data={data.AvailableSortOptions}/>
                </div>
            </div>
            {isRefetching ? <div className="loader-count"/> : <div className="sort-products__count">
                <span className="count text-gray-600 text-xs">تعداد محصولات: </span>
                <span className="count total text-gray-800 text-xs">کالا {data.TotalItems} </span>
            </div>}
            <FilterSidebarMobile title={decodeURIComponent(params?.code as string)?.replaceAll("-","")}>
                <ActiveFilters activeFilters={data}/>
                {
                    data?.PriceRangeFilter?.Enabled ?
                        <FilterByPrice data={data.PriceRangeFilter}/> : ""
                }
                {
                    data?.SpecificationFilter?.Enabled ? data.SpecificationFilter.Attributes.map((data: any, index: number) => {
                        return <CheckBoxFilter type={"specifications"} key={index} title={data.Name}
                                               data={data.Values}/>
                    }) : ""
                }
                {
                    data?.ManufacturerFilter?.Enabled ? <CheckBoxFilter type={"manufacturers"} title={"برند ها"}
                                                                        data={data.ManufacturerFilter.Manufacturers}/> : ""
                }
            </FilterSidebarMobile>
        </div>
    );
};

export default MobileHeadFilters;