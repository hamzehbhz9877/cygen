'use client'

import React, {useEffect, useState} from 'react';
import TabContent from "@/app/product/[id]/_components/tabs/tabContent";

import "./index.scss"
import {LuPencil} from "react-icons/lu";
import {LuFileText} from "react-icons/lu";
import {LiaCommentSolid} from "react-icons/lia";
import {RiLightbulbFlashLine} from "react-icons/ri";
import {productStore} from "@/state/product/product";

const Tabs = ({product, comments}: any) => {

    const [active, setActive] = useState<any>('tab-title-description')

    const {tabsActive,setActiveTab} = productStore()

    const handleChange = (id) => {
        document.querySelector(".nav-item.active")?.classList.remove("active")
        document.getElementById(id).classList.add("active")
        setActive(id)
    }


    useEffect(() => {
        if (tabsActive!=='') {
            document.querySelector(".nav-item.active")?.classList.remove("active")
            document.getElementById(tabsActive).classList.add("active")
            setActive(tabsActive)
            setActiveTab('')
        }
    }, [tabsActive]);

    return (
        <div className="hidden md:block w-full" id={"tabs"}>
            <div className="tabs">
                <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item active" id="tab-title-description" role="tab" aria-selected="false"
                        onClick={(e) => handleChange('tab-title-description')}>
                        <a className="nav-link" data-scroll="tab-description">
                            <LuPencil size={25} className={"me-[10px]"} color={"#4d4d4d"}/>
                            توضیحات </a>
                    </li>
                    <li className="nav-item" id="tab-title-additional_information" role="tab" aria-selected="false"
                        onClick={(e) => handleChange('tab-title-additional_information')}>
                        <a className="nav-link"
                           data-scroll="tab-additional_information">
                            <LuFileText size={25} className={"me-[10px]"} color={"#4d4d4d"}/>
                            مشخصات </a>
                    </li>
                    <li className="nav-item" id="tab-title-reviews" role="tab" aria-controls="tab-reviews"
                        aria-selected="false" onClick={(e) => handleChange('tab-title-reviews')}>
                        <a className="nav-link" data-scroll="tab-reviews">
                            <LiaCommentSolid size={25} className={"me-[10px]"} color={"#4d4d4d"}/>
                            نظرات<i>0</i> </a>
                    </li>
                    <li className="nav-item" id="tab-title-faq" role="tab" aria-selected="true"
                        onClick={(e) => handleChange('tab-title-faq')}>
                        <a className="nav-link" data-scroll="tab-parskala-faq">
                            <RiLightbulbFlashLine size={25} className={"me-[10px]"} color={"#4d4d4d"}/>
                            پرسش و پاسخ </a>
                    </li>
                </ul>
            </div>
            <TabContent id={active} product={product} comments={comments}/>
        </div>
    );
};

export default Tabs;