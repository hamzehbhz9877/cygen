'use client'

import React from 'react';
import {MdOutlineEdit} from "react-icons/md";
import {FiExternalLink} from "react-icons/fi";
import useModal from "@/context/modal/useModal";
import SpecificationModal from "@/app/product/[name]/_components/mobile/tab/modal/specification";

type Props = {
    data: any
}

const Specification = ({data}: Props) => {
    const {openModal, closeModal} = useModal()
    return (
        <div id={"specification"} className="specification tabs-mobile-item">
            <div className="tabs-mobile-item__title">
                <div className="text flex items-center">
                    <MdOutlineEdit color={"#232222"} className={"me-[5px]"} size={24}/>
                    <h4 className={"#232222"}>مشخصات</h4>
                </div>
                <div className="show-more flex items-center" role={"button"} onClick={() => openModal(<SpecificationModal product={data}
                    closeModal={closeModal}/>, {className: "!rounded-[0]"})}>
                    <span className="text-dynamic-color-from text-nowrap">نمایش بیشتر </span>
                    <FiExternalLink size={14} className="text-dynamic-color-from"/>
                </div>
            </div>

            <div className="tabs-mobile-item__content ">

                {data?.ProductSpecificationModel.Groups.slice(0, 4).map(d => {
                    if (d.Name)
                        return <div key={d.Id}>
                            {d.Attributes.map(attr => {
                                return (
                                    <div key={attr.Id} className="flex my-1">
                                        <span className="attribute_name me-3">{attr.Name}:</span>

                                        <span className="attribute_value "><p>
                                                {attr.Values.map((value,index) => {
                                                    return (
                                                        <span key={index}>
                                                            {value.ValueRaw}
                                                            <br/>
                                                        </span>
                                                    )

                                                })}
                                            </p></span>
                                    </div>
                                )
                            })}
                        </div>
                })}
            </div>

        </div>
    );
};

export default Specification;