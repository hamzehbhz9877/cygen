'use client'

import React, {useEffect, useState} from 'react';
import dynamic from "next/dynamic";
import {IoClose} from "react-icons/io5";

const Swiper = dynamic(() => import("@/components/libarary/productDetails/swiper/swiper"), {
    ssr: false
});

import "./filesModal.scss"

const FilesModal = ({data, close, index, type}: any) => {


    const [active, setActive] = useState('');


    const [thumbIndex, setThumbIndex] = useState(0);


    useEffect(() => {
        setThumbIndex(index)
    }, [index])

    useEffect(() => {
        if (data.PictureModels.length > thumbIndex)
            setActive("image")
        else setActive("video")
    }, [thumbIndex])


    useEffect(() => {
        setActive(type);
    }, [type]);

    return (
        <div className={"h-full justify-between flex flex-col overflow-y-auto files-modal"}>
            <div className="flex items-center justify-between mx-5 py-4 z-2 duration-300 opacity-100">
                <div className="flex cursor-pointer rounded-full p-1 invisible">

                </div>
                <div
                    className="flex py-1 px-2 overflow-hidden touch-none files-tab">
                    <div onClick={() => {
                        setActive("image")
                        setThumbIndex(0)
                    }}
                         className={`${active == "image" ? 'active' : ""} flex relative leading-[2.15] px-3 md:px-4 cursor-pointer select-none touch-none files-tab__item  text-white `}>تصاویر
                    </div>
                    {
                        data.VideoModels?.length > 0 ?
                            <div onClick={() => {
                                setActive("video")
                                setThumbIndex(data.PictureModels.length)
                            }}
                                 className={`${active == "video" ? 'active' : ""} divider flex relative leading-[2.15] px-3 md:px-4 cursor-pointer select-none touch-none files-tab__item text-white`}>ویدیوها
                            </div> : ""
                    }
                </div>
                <div className="flex cursor-pointer">
                    <IoClose size={24} color={"black"} onClick={close}/>
                </div>
            </div>
            <Swiper data={data} index={thumbIndex} setIndex={setThumbIndex}/>
        </div>
    );
};

export default FilesModal;