import React from 'react';
import Image from "next/image";
import Link from "next/link";

import "./index.scss"

const EmptyCart = () => {
    return (
        <div className="widget_shopping_cart_content">
            <div className="cart-empty">
                <Image className={"w-[84px] h-[133px] mx-auto"}
                       src="https://pars.parskalas.com/wp-content/themes/parskala/assets/img/empty-cart.svg"
                       width="84" height="133" alt="empty-cart"/>        <p>هیچ محصولی در سبد
                خرید
                نیست.</p>
                <div>جهت مشاهده محصولات بیشتر به صفحات زیر مراجعه نمایید.</div>
                <ul>
                    <li>
                        <Link href="/">صفحه اصلی</Link>
                    </li>
                    <li className="separator"></li>
                    <li>
                        <Link href="/">فروشگاه</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EmptyCart;