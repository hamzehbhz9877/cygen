'use client'

import React, {useEffect, useState} from 'react';
import TabContent from "@/app/product/[name]/_components/tabs/tabContent";

import "./index.scss"
import {LuPencil} from "react-icons/lu";
import {LuFileText} from "react-icons/lu";
import {LiaCommentSolid} from "react-icons/lia";
import {RiLightbulbFlashLine} from "react-icons/ri";
import {productStore} from "@/state/product/product";
import {getQueryClient} from "@/utils/get-query-client";
import {MdOutlineRateReview} from "react-icons/md";
import {useQuery} from "@tanstack/react-query";
import {FagQuery} from "@/services/Faq";

const Tabs = ({product}: any) => {

    const [active, setActive] = useState<any>('')

    useEffect(() => {
        if (!product.ShortDescription && !product.FullDescription)
            setActive('tab-title-additional_information')
        else if (!product.ShortDescription) {
            setActive('tab-title-description')
        } else if (!product.FullDescripiton) {
            setActive('tab-title-description-short')
        }
    }, [product]);

    const {tabsActive, setActiveTab} = productStore()


    const {data: FaqItems} = useQuery({
        queryKey: ["faq", "Product",product.Id],
        queryFn: () => FagQuery({EntityName: "Product", EntityId: product.Id}),
        enabled: !!product.Id
    })

    const handleChange = (id) => {
        document.querySelector(".nav-item.active")?.classList.remove("active")
        document.getElementById(id).classList.add("active")
        setActive(id)
    }


    useEffect(() => {
        if (tabsActive !== '') {
            document.querySelector(".nav-item.active")?.classList.remove("active")
            document.getElementById(tabsActive).classList.add("active")
            setActive(tabsActive)
            setActiveTab('')
        }
    }, [tabsActive]);


    return (
        <div className="hidden lg:block w-full mt-[60px]" id={"tabs"}>
            <div className="tabs">
                <ul className="nav nav-pills" role="tablist">

                    {product.ShortDescription ?
                        <li className="nav-item active" id="tab-title-description-short" role="tab"
                            onClick={(e) => handleChange('tab-title-description-short')}>
                            <a className="nav-link" data-scroll="tab-description">
                                <MdOutlineRateReview size={25} className={"me-[10px]"} color={"#4d4d4d"}/>
                                معرفی </a>
                        </li> : ""
                    }
                    {product.FullDescription ?
                        <li className="nav-item" id="tab-title-description" role="tab"
                            onClick={(e) => handleChange('tab-title-description')}>
                            <a className="nav-link" data-scroll="tab-description">
                                <LuPencil size={25} className={"me-[10px]"} color={"#4d4d4d"}/>
                                توضیحات </a>
                        </li> : ""
                    }
                    <li className="nav-item" id="tab-title-additional_information" role="tab"
                        onClick={(e) => handleChange('tab-title-additional_information')}>
                        <a className="nav-link"
                           data-scroll="tab-additional_information">
                            <LuFileText size={25} className={"me-[10px]"} color={"#4d4d4d"}/>
                            مشخصات </a>
                    </li>
                    <li className="nav-item" id="tab-title-reviews" role="tab" aria-controls="tab-reviews"
                        onClick={(e) => handleChange('tab-title-reviews')}>
                        <a className="nav-link" data-scroll="tab-reviews">
                            <LiaCommentSolid size={25} className={"me-[10px]"} color={"#4d4d4d"}/>
                            نظرات<i>{product.ProductReviewOverview?.TotalReviews}</i> </a>
                    </li>
                    {
                        FaqItems?.data?.length>0 ?
                            <li className="nav-item" id="tab-title-faq" role="tab" aria-selected="true"
                                onClick={(e) => handleChange('tab-title-faq')}>
                                <a className="nav-link" data-scroll="tab-parskala-faq">
                                    <RiLightbulbFlashLine size={25} className={"me-[10px]"} color={"#4d4d4d"}/>
                                    پرسش و پاسخ </a>
                            </li>
                            : ""
                    }
                </ul>
            </div>
            <TabContent id={active} product={product}/>
        </div>
    );
};

export default Tabs;