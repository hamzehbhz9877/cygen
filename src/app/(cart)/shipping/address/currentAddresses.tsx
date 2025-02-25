import React from 'react';
import UseModal from "@/context/modal/useModal";
import {FaAngleLeft} from "react-icons/fa";
import SelectAddress from "@/app/(cart)/shipping/address/modal/selectAddress";

const CurrentAddresses = ({selected}) => {


    const {openModal, closeModal} = UseModal()

    return (
        <div className={"flex items-center gap-[17px] currentAddresses"}>
            {selected ? <div
                className={`rounded-[16px] px-[24px] w-full py-[32px] border border-solid border-[#E5E5E5]`}>
                <div className={"flex items-center justify-between"}>
                    <div className={"flex flex-col md:flex-row items-center gap-[17px]"}>
                        <span
                            className={"bg-[#F5FFFC] px-[22px] py-[7px] text-[12px] text-[#00BA88]"}>آدرس فعلی شما</span>
                        <p className={"text-[#5E5E5E] text-[14px] font-bold hidden lg:block"}>{selected.AddressLine.replaceAll(/"/g, '')}</p>
                    </div>
                    <div className={"self-end"}>
                        <button
                            className={"bg-[#ED303D] items-center text-[18px] flex gap-[10px] text-white p-[17px] py-[4px] rounded-[8px]"}
                            onClick={() => openModal(<SelectAddress close={closeModal}/>)}
                        >
                            <span className={"text-[14px] md:text-[15px]"}>تغییر آدرس</span>
                            <FaAngleLeft className={"text-white"} size={16}/>
                        </button>
                    </div>
                </div>
                <p className={"text-[#5E5E5E] text-[14px] font-bold block mt-[10px] lg:hidden"}>{selected.AddressLine.replaceAll(/"/g, '')}</p>
            </div> : ""}
        </div>
    );
};

export default CurrentAddresses;