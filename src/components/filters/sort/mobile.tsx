import React from 'react';


import "./index.scss"

const MobileSort = () => {
    return (
            <div className="prK_orderby_mobile sort__mobile">
                <ul className="prk-order-products">
                    <li className="order-item order-menu-order is-active">
                        <a rel="nofollow"
                           href="/">
                            پیشفرض </a>
                    </li>

                    <li className="order-item order-rating">
                        <a rel="nofollow"
                           href="/">
                            محبوبیت </a>
                    </li>

                    <li className="order-item order-popularity">
                        <a rel="nofollow"
                           href="/">
                            پربازدیدترین </a>
                    </li>

                    <li className="order-item order-date">
                        <a rel="nofollow"
                           href="/">
                            جدیدترین </a>
                    </li>

                    <li className="order-item order-price">
                        <a rel="nofollow"
                           href="/">
                            ارزانترین </a>
                    </li>

                    <li className="order-item order-price-desc">
                        <a rel="nofollow"
                           href="/">
                            گرانترین </a>
                    </li>
                </ul>

            </div>
    );
};

export default MobileSort;