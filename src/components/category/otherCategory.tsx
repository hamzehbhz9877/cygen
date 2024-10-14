

import React from 'react';
// css

import "./index.scss"
import Link from "next/link";


type Props={
    itemCount:number
    otherContent:(data:boolean)=>void
}
const OtherCategory = ({itemCount,otherContent}:Props) => {

    const handleOtherContent=()=>otherContent(true)

    return (
        <div className="category others-categories" onClick={handleOtherContent}>
            <Link href="#">
                <div className="others-categories__count">+{itemCount}</div>
                <div className="category__name">دسته‌بندی دیگر</div>
            </Link>
        </div>
    );
};

export default OtherCategory;