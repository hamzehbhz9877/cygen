import React from 'react';
import {scrolltoHash} from "@/helpers/client";
import {FaAngleLeft} from "react-icons/fa6";

const Specification = ({product,setActiveTab}) => {
    return (
        <>
            <div className="meta-additional mt-3">
                <span className="atri-single">ویژگی های محصول</span>
                <ul className="!pb-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 w-full   lg:gap-2 mt-2 lg:grid lg:grid-cols-3 lg:overflow-hidden">

                    {
                        product?.ProductSpecificationModel.Groups.map((d, index) => {
                            if (d.Name && index <= 5)
                                return <li key={d.Id}
                                           className="flex flex-col items-start justify-start bg-neutral-100 p-2 rounded-md">
                                    <div className="flex flex-col gap-2 max-w-[150px]">
                                        <div><p
                                            className="text-[#81858b] text-[12px]
                                     !leading-none lg:!leading-6 lg:break-all lg:overflow-hidden ellipsis-1">{d.Attributes[0].Name}</p>
                                            <p
                                                className="text-[12px] !leading-none mt-2 lg:mt-0 lg:!leading-6
                                            text-[#3f4064] break-all lg:overflow-hidden ellipsis-1">{d.Attributes[0].Values[0].ValueRaw}</p>
                                        </div>
                                    </div>
                                </li>
                        })
                    }

                </ul>
            </div>
            <div className="all-features flex justify-center items-center gap-4 mt-4">
                <hr/>
                <span>
                        <div className=" items-center justify-center relative grow hidden md:flex" onClick={() => {
                            scrolltoHash('tabs')
                            setActiveTab('tab-title-additional_information')
                        }}>مشاهده همه ویژگی‌ها
                            <div className="flex mr-2">
                                <FaAngleLeft size={11}/>
                            </div>
                        </div>
                        <div className="flex md:hidden items-center justify-center relative grow" onClick={() => {
                            scrolltoHash('specification')
                        }}>مشاهده همه ویژگی‌ها
                            <div className="flex mr-2">
                                <FaAngleLeft size={11}/>
                            </div>
                        </div>
                    </span>
                <hr/>
            </div>
        </>
    );
};

export default Specification;