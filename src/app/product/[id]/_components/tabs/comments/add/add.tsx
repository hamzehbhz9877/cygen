import React, {useState} from 'react';
import {ModalBody, ModalFooter, ModalHeader} from "@/components/modal";
import {IoCloseCircleOutline} from "react-icons/io5";


import "./index.scss"


type Props={
    closeModal:()=>void
}

const AddComment = ({closeModal}:Props) => {

    const [rate, setRate] = useState('')

    return (
        <>
            <ModalHeader>
                <div className="relative flex h-[52px] md:h-[72px] w-full items-center justify-between px-8 transition-all"><p
                    className="text-xl font-medium leading-8 text-primary-shade-1">افزودن نظر</p>
                    <div className="flex cursor-pointer gap-1.5 text-sm font-semiBold leading-6 text-primary-shade-1">
                        <IoCloseCircleOutline size={30} onClick={closeModal}/>
                    </div>
                    <span className="absolute inset-x-8 bottom-0 border-b border-primary-tint-5"></span></div>
            </ModalHeader>
            <ModalBody>
                    <div className="flex w-full flex-col items-center pb-[20px]">
                        <div
                            className="scrollbar commentModalScrollbar ml-2.5 h-full max-h-[82vh] max-w-full overflow-auto pb-3 pl-4 pr-8 pt-6">
                            <div
                                className="mb-[24px] flex h-full w-full items-center rounded-[8px] bg-white p-2.5 shadow-md lg:mb-8">
                                <div className="w-[56px] shrink-0 lg:w-[3.8rem]">
                                    <div className="w-full relative">
                                        <div><img loading="lazy" fetchPriority="auto"
                                                  alt=""
                                                  src="https://www.technolife.ir/image/color_image_TLP-33689_cd09241b-262b-41e7-bd22-70f9690b3bb1.png"
                                                  className="responsive-image"
                                                  width="66" height="66"/>
                                        </div>
                                    </div>
                                </div>
                                <p className="mr-4 line-clamp-2 max-h-[60px] overflow-hidden text-ellipsis whitespace-pre-wrap pl-3.5 text-sm font-medium leading-[30px] text-primary-shade-1 lg:mr-4 ">گوشی
                                    موبایل شیائومی مدل Redmi Note 13 4G ظرفیت 256 گیگابایت رم 8 گیگابایت</p></div>
                            <form className=" lg:px-5" autoComplete="off">
                                <div className=" relative">
                                    <p className="flex justify-center pb-4 text-center text-xs font-semiBold text-primary-shade-1 lg:text-sm ">
                                        <p className="text-base text-red-600">*</p>به این کالا امتیاز دهید :)
                                    </p>
                                </div>
                                <p className="-mt-3 mb-3 text-center text-xs text-red-600"></p>
                                <div className="w-full flex justify-between gap-[10px] rate-sticker">
                                    <label htmlFor="excellent"
                                           className="flex justify-center items-center flex-1  rounded-[12px] ">
                                        <input
                                            type="radio" name={"radio"} id="excellent" value="excellent"
                                            onChange={(e) => setRate(e.target.value)}/>
                                        <img
                                            fetchPriority="auto" loading="lazy"
                                            src={rate !== 'excellent' ? `https://www.technolife.ir/image/static_excellent.png` :'https://www.technolife.ir/image/static_cexcellent.png'}
                                            alt="excellent"
                                            width="64"
                                            height="92"/>
                                    </label>
                                    <label htmlFor="good"
                                           className="flex justify-center items-center flex-1 rounded-[12px] ">
                                        <input
                                            type="radio" name={"radio"} id="good" value="good"
                                            onChange={(e) => setRate(e.target.value)}/>
                                        <img
                                            fetchPriority="auto"
                                            loading="lazy"
                                            src={rate !== "good" ? `https://www.technolife.ir/image/static_good.png` : 'https://www.technolife.ir/image/static_cgood.png'}
                                            alt="good"
                                            width="64"
                                            height="92"/>
                                    </label>
                                    <label
                                        htmlFor="medium"
                                        className="flex justify-center items-center flex-1  rounded-[12px] ">
                                        <input
                                            type="radio" name={"radio"} id="medium" value="medium"
                                            onChange={(e) => setRate(e.target.value)}/>
                                        <img
                                            fetchPriority="auto"
                                            loading="lazy"
                                            src={rate !== "medium" ? `https://www.technolife.ir/image/static_medium.png` : 'https://www.technolife.ir/image/static_cmedium.png'}
                                            alt="medium"
                                            width="64"
                                            height="92"/>
                                    </label>
                                    <label
                                        htmlFor="weak"
                                        className="flex justify-center items-center flex-1  rounded-[12px] ">
                                        <input
                                            type="radio" name={"radio"} id="weak" value="weak"
                                            onChange={(e) => setRate(e.target.value)}/>
                                        <img
                                            fetchPriority="auto"
                                            loading="lazy"
                                            src={rate !== "weak" ? `https://www.technolife.ir/image/static_weak.png` : 'https://www.technolife.ir/image/static_cweak.png'}
                                            alt="weak"
                                            width="64"
                                            height="92"/>
                                    </label>
                                    <label
                                        htmlFor="bad"
                                        className="flex justify-center items-center flex-1  rounded-[12px] ">
                                        <input
                                            type="radio" name={"radio"} id="bad" value="bad"
                                            onChange={(e) => setRate(e.target.value)}/>
                                        <img
                                            fetchPriority="auto"
                                            loading="lazy"
                                            src={rate !== "bad" ? `https://www.technolife.ir/image/static_bad.png` : 'https://www.technolife.ir/image/static_cbad.png'}
                                            alt="bad" width="64"
                                            height="92"/></label>
                                </div>
                                <p className="mt-[24px] mb-3 text-[12px] font-medium text-primary-shade-1 lg:mt-8 lg:text-sm">نظر
                                    خود
                                    را در مورد این محصول بنویسید.</p>
                                <div className="relative">
                            <span
                                className="flex items-center font-semiBold text-gray-500 mb-3"><p
                                className="ml-0.5 text-xs text-red-600 font-semiBold">*</p>توضیحات</span>
                                    <label className="textarea-label-float relative !h-28"><textarea
                                        className="w-full p-4 h-28 resize-none rounded-lg border
                             border-gray-300 caret-primary-200"
                                        ></textarea>
                                    </label>
                                </div>
                                <div className="relative mt-4">
                            <span
                                className="flex items-center font-semiBold text-gray-500 mb-3"><p
                                className="ml-0.5 text-xs text-red-600 font-semiBold">*</p>نام</span>
                                    <label className="textarea-label-float relative !h-28">
                                        <input type={"text"}
                                               className="w-full p-4    rounded-lg border
                             border-gray-300 caret-primary-200 "
                                               />
                                    </label>
                                </div>
                                <div className="relative mt-4">
                            <span
                                className="flex items-center font-semiBold text-gray-500 mb-3"><p
                                className="ml-0.5 text-xs text-red-600 font-semiBold">*</p>ایمیل</span>
                                    <label className="textarea-label-float relative !h-28">
                                        <input type={"email"}
                                               className="w-full p-4  rounded-lg border
                             border-gray-300 caret-primary-200 "
                                               />
                                    </label>
                                </div>
                                <div className={"mt-10 flex w-full flex-col items-center"}>
                                    <button id="submit_cm"
                                            className="transition-all w-full relative flex items-center justify-center h-[3.25rem] rounded-[8px] p-4 bg-dynamic-color-from text-white cursor-pointer"
                                            type="submit"><span className="font-semiBold leading-6">ثبت نظر</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
            </ModalBody>
        </>
    );
};

export default AddComment;