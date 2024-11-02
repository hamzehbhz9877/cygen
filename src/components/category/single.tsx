import React from 'react';


import Link from "next/link";
import Image from "next/image";


// css
import "./index.scss"
import {CategoryListType} from "@/components/category/list";




const Category = ({PictureModel,Name}:any) => {
    return (
        <div className="category">
            <Link href="/">
                <Image src={PictureModel.ImageUrl} width="150"
                       height="150" title={PictureModel.Title}
                       alt={PictureModel.AlternateText} className="post-thumb"/>
                <h2 className="category__name">{Name}</h2>
                <span className="category__count">12</span>
            </Link>
        </div>
    );
};

export default Category;