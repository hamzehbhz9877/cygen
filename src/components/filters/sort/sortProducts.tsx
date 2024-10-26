import React from 'react';
import {BsSortDownAlt} from "react-icons/bs";


// css
import "./index.scss"
import Link from "next/link";


type SortProductsType = {
    data: any
}
const SortProducts = ({data}: SortProductsType) => {
    return (
        <div className="sort-products">

            <div className="sort-products__filter">
                <BsSortDownAlt className="sort-products__filter-icon"/>
                <span className="sort-products__filter-title">مرتب سازی:</span>
                <ul className="sort-products__filter-list">

                    {
                        data.map((sort: any, index: number) => {
                            return <li key={index}
                                       className={`sort-products__filter-item
                                        ${sort.Selected ? "sort-products__filter-item--active" : ""}`}>
                                <Link rel="nofollow"
                                   href="/">
                                    {sort.Text} </Link>
                            </li>
                        })
                    }
                </ul>
            </div>


            <div className="sort-products__count">
                <span className="count">نمایش</span>

                <span className="count total"> 23 </span>

                <span className="count">قیمت کالا ها</span>
            </div>
        </div>
    );
};

export default SortProducts;