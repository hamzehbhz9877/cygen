'use client'

import React from 'react';
import {TbReport} from "react-icons/tb";
import "./index.scss"
import Blog from "@/app/_components/blogs/blog";

const BlogsData = ({data,title}) => {
    return (
        <div className="elementor-widget-container my-[30px]">

            <div className="mcarousel_product_head flex justify-start pb-[18px]">

                <h4 className="flex items-center">

                    <TbReport className="ml-[5px]" size={26}/>{title} </h4>

            </div>

            <div className="prk-main-post-item style1 style-grid">
                {data.map(blog => {
                    return (
                        <Blog {...blog} key={blog.Id}/>
                    )
                })}

            </div>

        </div>
    );
};

export default BlogsData;