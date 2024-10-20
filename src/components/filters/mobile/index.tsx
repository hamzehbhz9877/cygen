'use client'

import React, {useEffect, useRef} from 'react';
import {RiFilterOffLine} from "react-icons/ri";
import {RiSortDesc} from "react-icons/ri";

// css
import "./index.scss"
import FilterSidebarMobile from "@/components/filters/filterSidebarMobile";
import Filters from "@/components/filters";
import ActiveFilters from "@/components/filters/active";
import FilterByPrice from "@/components/filters/price";
import CheckBoxFilter from "@/components/filters/checkbox";
import useClickOutside from "@/hooks/useOutsideClick";
import MobileSort from "@/components/filters/sort/mobile";

const MobileHeadFilters = () => {


    const sortRef = useRef<HTMLDivElement | null>(null)

    const handleFilter = () => {
        document.querySelector('#filter-sidebar-mobile').classList.toggle("open")
        document.querySelector("body").style.overflow = "hidden"
    }

    const handleSort = () => {
        document.querySelector('.sort__mobile').classList.toggle("open")
    }

    useClickOutside(sortRef, () => {
        document.querySelector('.sort__mobile').classList.remove("open")
    })

    useEffect(() => {
        const element:any = document.querySelector('.box-filter-shop')
        const top = element.offsetTop + 120
        window.addEventListener("scroll", () => {
            if (window.scrollY > top) {
                element.classList.add("fixed")
            } else {
                element.classList.remove("fixed")
            }
        })
    }, [])

    return (
        <div className="block lg:hidden mb-[15px] filters__mobile">
            <div className="title_shop">
                کالای دیجیتال
                <div className="sort-products__count">
                    <span className="count">نمایش</span>

                    <span className="count total"> 23 </span>

                    <span className="count">قیمت کالا ها</span>
                </div>
            </div>

            <div className="box-filter-shop">
                <div>
                    <span className="filter_by_botton show_sidebar " onClick={handleFilter}>
                    <RiFilterOffLine size={17} color={"#2c2c2c"}/>
                    فیلتر کردن</span>
                </div>


                <div ref={sortRef} className="relative " onClick={handleSort}>
                    <span className="filter_by_botton show_sortby"><RiSortDesc size={17} color={"#2c2c2c"}
                    />مرتب سازی</span>

                    <MobileSort/>
                </div>

            </div>
            <FilterSidebarMobile title={"کالای دیجیتال"}>
                <ActiveFilters/>
                <FilterByPrice isOpen={false}/>
                <CheckBoxFilter isOpen={false} title={'فیلتر بر اساس رنگ ها:'} data={['بنفش', "زرد", "قرمز"]}/>
            </FilterSidebarMobile>
        </div>
    );
};

export default MobileHeadFilters;