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
                <span className="sort-products__filter-title">مرتب سازی:</span>
                <ul className="sort-products__filter-list">
                    {
                        data?.AvailableSortOptions?.map((sort: any, index: number) => {
                            return <li key={index} onClick={() => addQueryParam('order', sort.Value)}
                                       className={`sort-products__filter-item
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
            {isRefetching ? <div className={"loader-count"}/> :
                <div className="sort-products__count">
                    <span className="count">نمایش</span>

                    <span className="count total"> {data.TotalItems} </span>

                    <span className="count">قیمت کالا ها</span>
                </div>}
        </div>
    );
};

export default SortProducts;