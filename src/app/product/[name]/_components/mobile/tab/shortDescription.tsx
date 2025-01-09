'use client'

import React from 'react';
import {MdOutlineEdit, MdOutlineRateReview} from "react-icons/md";
import {FiExternalLink} from "react-icons/fi";
import useModal from "@/context/modal/useModal";
import ShortInfoModal from "@/app/product/[name]/_components/mobile/tab/modal/ShortInfo";
import parse from "html-react-parser";

type Props = {
    data: any
}
const ShortInfo = ({data}: Props) => {
    const {openModal,closeModal}=useModal()

    return (
        <div className="info tabs-mobile-item">
            <div className="tabs-mobile-item__title">
                <div className="text flex items-center">
                    <MdOutlineRateReview  color={"#232222"} className={"me-[5px]"} size={24} />
                    <h4 className={"#232222"}>معرفی</h4>
                </div>
                <div className="show-more flex items-center" role={"button"} onClick={()=>openModal(<ShortInfoModal data={data} closeModal={closeModal}/>,{className:"!rounded-[0]"})}>
                    <span className="text-dynamic-color-from text-nowrap">نمایش بیشتر </span>
                    <FiExternalLink size={14} className="text-dynamic-color-from"/>
                </div>
            </div>

            <div className="tabs-mobile-item__content line-clamp-6 text-justify">
                {data.ShortDescription?
                    parse(data.ShortDescription)
                    :""}
            </div>

        </div>
    );
};

export default ShortInfo;