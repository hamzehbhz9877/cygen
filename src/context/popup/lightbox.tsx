import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import Cookie from "universal-cookie";
import useClickOutside from "@/hooks/useOutsideClick";
import useOverlay from "@/context/overlay/useOverlay";
import {IoIosCloseCircleOutline, IoMdClose, IoMdCloseCircle} from "react-icons/io";
import {IoCloseCircleSharp} from "react-icons/io5";

const Lightbox = ({data}: any) => {
    const ref = useRef<HTMLImageElement|null>(null)
    const cookie = new Cookie()

    const {toggleOverlay,classname,isOpen}=useOverlay()
const closePopup=()=>{
    if (data.DisplayOption === 1)
        cookie.set("popup-period_" + data.Id, Date.now() + ((data.CustomPeriodInHour * 60) * 60 * 1000), {path: "/"})
    else
        cookie.set("popup-onceTime_" + data.Id, true, {path: "/"})
    classname("")
    toggleOverlay(false)
}


    useClickOutside(ref, () => {
        if (ref.current.parentElement.classList.contains("open")) {
            closePopup()
        }
    })
    const popupPeriod = cookie.get("popup-period_" + data.Id)
    const popupOnceTime = cookie.get("popup-onceTime_" + data.Id)

    useEffect(() => {
        if (!popupOnceTime || popupPeriod < Date.now())
        classname("!z-[9999]")

        if (data.DisplayOption === 1) {
            if (popupPeriod < Date.now()) {
                toggleOverlay(true)
                cookie.remove("popup-period_" + data.Id)
            }
            if (!popupPeriod) {
                toggleOverlay(true)
            }
        } else if (data.DisplayOption === 2) {
            if (!popupOnceTime)
                setTimeout(() => {
                    toggleOverlay(true)
                }, data.DisplayInSeconds)
        }
    }, [])



    return (
        <div
            className={`popup__lightbox ${!popupOnceTime && isOpen? 'open':""}`}>
            <Image src={data?.Picture.ImageUrl} title={data?.Picture.Title}
                   alt={data?.Picture.AlternateText}
                   priority width={500} height={500} className={"static w-auto"} ref={ref}/>
            <IoIosCloseCircleOutline color={"red"} role={"button"} size={35} onClick={closePopup}/>
        </div>
    );
};

export default Lightbox;