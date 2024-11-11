'use client'

import React, {useEffect, useState} from 'react';
import parse from "html-react-parser";

// css
import "./index.scss"
import Link from "next/link";
import UseMoreContent from "@/hooks/useMoreContent";
import {FaAngleLeft} from "react-icons/fa6";


type Props = {
    content: string
    title: string
}

const CategoryDescription = ({content, title}: Props) => {

    const {isOpen, handleShowMore} = UseMoreContent()

    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        const heightOfContent = document.querySelector(".category-seo__description ").scrollHeight
        if (heightOfContent > 400)
            setHasMore(true)
    }, [])
    return (
        <div className="category-seo">
            <h2 className="category-seo__title">{title}</h2>
            <div className={`category-seo__description ${isOpen ? "category-seo__description--open" : ""}`}>
                {parse(content)}
            </div>
            {
                hasMore ?

                    <Link href="#" className="mask-handler" scroll={false}>
                <span className={`show-more items-center justify-center ${isOpen ? 'hidden' : "flex"}`}
                      onClick={handleShowMore}>
                    نمایش بیشتر
                                            <FaAngleLeft size={12} color={"#1051ef"}
                                                         className="mr-[2px] relative top-[-1px]"/>

                </span>
                        <span className={`show-less ${isOpen ? 'block' : "hidden"}`}
                              onClick={handleShowMore}>- بستن</span>
                    </Link> : ""}
        </div>
    );
};

export default CategoryDescription;