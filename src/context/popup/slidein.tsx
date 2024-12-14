import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import Cookie from "universal-cookie";
import useClickOutside from "@/hooks/useOutsideClick";
import {IoIosCloseCircleOutline} from "react-icons/io";

const SlideIn = ({data}: any) => {
    const ref = useRef<HTMLImageElement | null>(null)
    const cookie = new Cookie()

    const closePopup = () => {
        if (data.DisplayOption === 1 && data.DisplayPeriod===3)
            cookie.set("popup-period_" + data.Id, Date.now() + ((data.CustomPeriodInHour * 60) * 60 * 1000), {path: "/"})
        else
            cookie.set("popup-onceTime_" + data.Id, true, {path: "/"})

        if (data.DisplayOption === 1 && data.DisplayPeriod===3) {
            document.querySelector(".popup__slidein").classList.remove("open")
        }
    }


    useClickOutside(ref, () => {
        if (data.DisplayOption === 1 && data.DisplayPeriod===1)
            if (ref.current.parentElement.classList.contains("open")) {
                closePopup()
            }
    })

    const popupPeriod = cookie.get("popup-period_" + data.Id)
    const popupOnceTime = cookie.get("popup-onceTime_" + data.Id)

    useEffect(() => {
        if (data.DisplayOption === 1 && data.DisplayPeriod===3) {
            if (popupPeriod < Date.now()) {
                cookie.remove("popup-period_" + data.Id)
            }
        }

        if ((data.DisplayOption===1 && data.DisplayPeriod===3 && !popupPeriod) || (data.DisplayOption===1 && data.DisplayPeriod===1 && !popupOnceTime))
        {
            ref.current.parentElement.classList.add("open")
        }
    }, [])

    return (
        <div
            className={`popup__slidein`}>
            <Image src={data?.Picture.ImageUrl} title={data?.Picture.Title}
                   alt={data?.Picture.AlternateText}
                   priority width={500} height={500} className={"static w-auto"} ref={ref}/>
            <IoIosCloseCircleOutline color={"red"} role={"button"} size={35} onClick={closePopup}/>
        </div>
    );
};

export default SlideIn;