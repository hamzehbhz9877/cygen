import React from 'react';
import {BsSortDownAlt} from "react-icons/bs";


// css
import "./index.scss"
import Link from "next/link";
import useQueryParams from "@/hooks/useQueryParams";


type SortProductsType = {
    data: any,
    isRefetching: boolean
}

const SortProducts = ({data, isRefetching}: SortProductsType) => {

    const {addQueryParam} = useQueryParams()
    return (
        <div className="sort-products">

            <div className="sort-products__filter">
                <BsSortDownAlt className="sort-products__filter-icon"/>
                <span className="sort-products__filter-title text-nowrap">مرتب سازی:</span>
                <div className="overflow-x-auto">
                    <ul className="sort-products__filter-list">
                        {
                            data?.AvailableSortOptions?.map((sort: any, index: number) => {
                                return <li key={index} onClick={() => addQueryParam('order', sort.Value)}
                                           className={`sort-products__filter-item min-w-max
                                        ${sort.Selected ? "sort-products__filter-item--active" : ""}`}>
                                    <Link rel="nofollow"
                                          data-disable-nprogress={sort.Selected}
                                          href={sort.Selected ? "" : "/"}>
                                        {sort.Text} </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>

            </div>
            {isRefetching ? <div className={"loader-count"}/> :
                <div className="sort-products__count text-nowrap">

                    <span className="count total"> {data.TotalItems} </span>

                    <span className="count"> کالا</span>
                </div>}
        </div>
    );
};

export default SortProducts;