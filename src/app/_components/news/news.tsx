'use client'


import React from 'react';
import {ImNewspaper} from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import {RiTimerLine} from "react-icons/ri";
import {diffDays} from "@/helpers/client";
import {LiaArrowLeftSolid} from "react-icons/lia";
import "../blogs/index.scss"
import Blog from "@/app/_components/blogs/blog";

const NewsData = ({data,title}) => {

    return (
        <div className="elementor-widget-container my-[30px]">

            <div className="mcarousel_product_head flex justify-start pb-[18px]">

                <h4 className="flex items-center">

                    <ImNewspaper className="ml-[5px]" size={26}/> {title} </h4>

            </div>

            <div className="prk-main-post-item style1 style-grid">
                {data.map(news => {
                    return (
                        <Blog {...news} key={data.Id}/>)
                })}

            </div>

        </div>
    );
};

export default NewsData;