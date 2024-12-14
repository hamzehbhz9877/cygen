import React from 'react';
import {FaStar} from "react-icons/fa";
import {averReview, scrolltoHash} from "@/helpers/client";
import {RiCheckboxBlankCircleFill} from "react-icons/ri";

const Rating = ({product,setActiveTab}) => {
    return (
        <div className="rating_and_nummbercomment">
            <div className="flexed">
                <div className="rating_product">
                    <FaStar size={11} color={"white"} className={"me-[4px]"}/>
                    <span
                        className="average_rating mt-[3px]">{averReview(product)}</span>
                </div>
                {/*<span className="rating_count"> از 5 رای </span>*/}
            </div>
            <div className="comments_number hidden md:flex" onClick={() => {
                scrolltoHash('tabs')
                setActiveTab('tab-title-reviews')
            }}>
                <RiCheckboxBlankCircleFill color={"#e0e0e2"} size={5} className="me-[7px]"/>
                <p><span>{product.ProductReviewOverview.TotalReviews}</span>دیدگاه</p>
            </div>

            <div className="comments_number flex md:hidden" onClick={() => {
                scrolltoHash('comments-mobile')
            }}>
                <RiCheckboxBlankCircleFill color={"#e0e0e2"} size={5} className="me-[7px]"/>
                <p><span>{product.ProductReviewOverview.TotalReviews}</span>دیدگاه</p>
            </div>

            <div className="comments_number">

            </div>

        </div>
    );
};

export default Rating;