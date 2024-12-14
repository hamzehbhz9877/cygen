import React from 'react';


import Link from "next/link";
import Image from "next/image";


// css
import "./index.scss"




const Category = ({PictureModel,Name,SeName}:any) => {

    return (
        <div className="category">
            <Link href={`/category/${SeName}`}>
                <Image src={PictureModel.ImageUrl} width="150"
                       height="150" title={PictureModel.Title}
                       alt={PictureModel.AlternateText} className="post-thumb"/>
                <h2 className="category__name">{Name}</h2>
                {/*<span className="category__count">12</span>*/}
            </Link>
        </div>
    );
};

export default Category;