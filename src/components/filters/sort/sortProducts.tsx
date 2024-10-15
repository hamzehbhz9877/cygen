import React from 'react';
import {BsSortDownAlt} from "react-icons/bs";


// css
import "./index.scss"


const SortProducts = () => {


    return (
        <div className="sort-products">

            <div className="sort-products__filter">
                <BsSortDownAlt className="sort-products__filter-icon"/>
                <span className="sort-products__filter-title">مرتب سازی:</span>
                <ul className="sort-products__filter-list">

                    <li className="sort-products__filter-item sort-products__filter-item--active">
                        <a rel="nofollow"
                           href="/">
                            پیشفرض </a>
                    </li>

                    <li className="sort-products__filter-item order-rating">
                        <a rel="nofollow"
                           href="/">
                            محبوبیت </a>
                    </li>

                    <li className="sort-products__filter-item order-popularity">
                        <a rel="nofollow"
                           href="/">
                            پربازدیدترین </a>
                    </li>

                    <li className="sort-products__filter-item order-date">
                        <a rel="nofollow"
                           href="/">
                            جدیدترین </a>
                    </li>

                    <li className="sort-products__filter-item order-price">
                        <a rel="nofollow"
                           href="/">
                            ارزانترین </a>
                    </li>

                    <li className="sort-products__filter-item order-price-desc">
                        <a rel="nofollow"
                           href="/">
                            گرانترین </a>
                    </li>
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