'use client'

import React from 'react';
import {MdOutlineEdit} from "react-icons/md";
import {FiExternalLink} from "react-icons/fi";
import useModal from "@/context/modal/useModal";
import InfoModal from "@/app/product/[id]/_components/mobile/tab/modal/info";

type Props = {
    data: any
}
const Info = ({data}: Props) => {
    const {openModal,closeModal}=useModal()
    return (
        <div className="info tabs-mobile-item">
            <div className="tabs-mobile-item__title">
                <div className="text flex items-center">
                    <MdOutlineEdit color={"#232222"} className={"me-[5px]"} size={24} />
                    <h4 className={"#232222"}>توضیحات</h4>
                </div>
                <div className="show-more flex items-center" role={"button"} onClick={()=>openModal(<InfoModal closeModal={closeModal}/>,{className:"!rounded-[0]"})}>
                    <span className="text-dynamic-color-from text-nowrap">نمایش بیشتر </span>
                    <FiExternalLink size={14} className="text-dynamic-color-from"/>
                </div>
            </div>

            <div className="tabs-mobile-item__content">
               <p> بالاخره بعد از شایعات، شاهد رونمایی جدید‌ترین گوشی‌های هوشمند اپل در قالب خانواده آیفون 13 بودیم. آیفون
                   13 پرو مکس، آیفون 13 پرو، آیفون 13 و آیفون 13 مینی به‌عنوان جدید‌ترین گوشی‌های هوشمند این شرکت معرفی
                   شدند. آیفون 13 پرو مکس بدون شک به مشخصات فنی قدرتمند‌تری به نسبت ما‌بقی اعضای این خانواده مجهز شده است.
                   از نظر طراحی</p>
            </div>

        </div>
    );
};

export default Info;