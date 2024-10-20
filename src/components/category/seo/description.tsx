'use client'

import React, {useState} from 'react';


// css
import "./index.scss"
import Link from "next/link";


type Props = {
    content: string
}
const CategoryDescription = ({content}: Props) => {


    const [isOpen, setIsOpen] = useState(false)

    const handleShowMore = () => setIsOpen(!isOpen)


    return (
        <div className="category-seo">
            <h2 className="category-seo__title">کالای دیجیتال</h2>
            <div className={`category-seo__description ${isOpen ? "category-seo__description--open" : ""}`}>
                {content}
            </div>

            <Link href="#" className="mask-handler" scroll={false}>
                <span className={`show-more ${isOpen?'hidden':"block"}`} onClick={handleShowMore}>نمایش بیشتر +</span>
                <span className={`show-less ${isOpen?'block':"hidden"}`} onClick={handleShowMore}>- بستن</span>
            </Link>
        </div>
    );
};

export default CategoryDescription;