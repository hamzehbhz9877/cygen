import React from 'react';
import Link from "next/link";

const Title = ({product}:any) => {
    return (
        <div className="title_compleates flexed_start">
            <div className="boxed_title">
                <div className="breadcrumb"><a
                    href={product.SeName}>دسته بندی</a></div>
                <h1 className="product_title entry-title">{product.Name}</h1>
                <div className="product-en"><span className="en_name_pro">{product.Breadcrumb.ProductSeName}</span>
                </div>
                <div className={"tag my-3"}>
                    <ul className={"flex items-center"}>
                        {product.ProductTags.map(tag => {
                            return <li key={tag.Id}
                                       className={"bg-gray-100 text-gray-800 text-xs font-medium me-2 px-[13px] py-[6px] rounded-full dark:bg-gray-700 dark:text-gray-300"}>
                                <Link href={`/tag/${tag.Name}`}>{tag.Name}</Link>
                            </li>
                        })}
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default Title;