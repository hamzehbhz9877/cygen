import React from 'react';
import {ModalBody, ModalHeader} from "@/components/modal";
import {FaAngleLeft} from "react-icons/fa6";
import parse from "html-react-parser";

const InfoModal = ({closeModal,data}:any) => {
    return (
        <>
            <ModalHeader>
                <div className="relative flex h-[52px] md:h-[72px] w-full items-center justify-between px-4 transition-all"><p
                    className="text-lg font-medium leading-8">توضیحات</p>
                    <div className="text-lg font-medium cursor-pointer gap-1.5 font-semiBold leading-6 flex items-center" onClick={closeModal}>
                        <span className={"text-[17px]"}>بازگشت</span>
                        <FaAngleLeft size={22} />
                    </div>
                    <span className="absolute inset-x-4 bottom-0 border-b border-primary-tint-5"></span></div>
            </ModalHeader>
            <ModalBody>

                        <section className="py-2 px-4">

                            {data.FullDescription?parse(data.FullDescription):""}
                        </section>
            </ModalBody>
        </>

);
};

export default InfoModal;