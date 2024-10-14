import React from 'react';


import Link from "next/link";
import Image from "next/image";


// css
import "./index.scss"

const Category = () => {
    return (
        <div className="category">
            <Link href="/">
                <Image src="https://pars.parskalas.com/wp-content/uploads/2023/07/cover-thumbnail-1.svg" width="150"
                       height="150"
                       alt="آیفون 13 پرو مکس 512 گیگابایت دو سیمکارت (ZAA) Active" className="post-thumb"/>
                <h2 className="category__name">اسپیکر بلوتوث باسیم</h2>
                <span className="category__count">12</span>
            </Link>
        </div>
    );
};

export default Category;