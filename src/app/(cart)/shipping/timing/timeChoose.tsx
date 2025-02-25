import React, {useState} from 'react';
import moment from "jalali-moment";
import {IoCloseOutline} from "react-icons/io5";

const TimeChoose = ({data,hide=true,close}:any) => {

    const [active, setActive] = useState(1)

    const [value, setValue] = useState(1)


    console.log(data)

    return (
        <div className={`timing ${hide?'hidden lg:block':''}`}>
            <div className="flex justify-between">
                <span className={"title"}>انتخاب روز و ساعت ارسال مرسوله</span>
                {!hide?
                <IoCloseOutline className={"cursor-pointer"} onClick={close} size={30} color={"#2F2F2F"}/>:""}
            </div>
            <div className={"timing-list overflow-x-auto overflow-y-hidden"}>
                <ul className={"flex gap-[20px] w-max"}>
                    {
                        data?.data !== '' ? data?.data.map((item, index) => (
                            <li key={index} className={`timing-item  ${active === index + 1 ? 'active' : ''}`}
                                onClick={() => setActive(index + 1)}>
                                <span className={"weekly"}>{moment(item.Date).locale('fa').format('dddd')}</span>
                                <span className={"day"}>{moment(item.Date).locale('fa').format('DD MMMM')}</span>
                            </li>
                        )) : ""
                    }
                </ul>
            </div>

            <div className={"timing-content"}>
                <ul className={"flex gap-x-[60px] gap-y-[16px] flex-col lg:flex-row"}>
                    <li className={"timing-content-item flex gap-[18px] items-center"}>
                        <input checked={value === 1} id="inline-radio-1" onChange={(e) => setValue(+e.target.value)}
                               type="radio" value={1} name="inline-radio-group"
                               className="w-[20px] h-[20px] text-dynamic-color-from bg-gray-100 border-gray-300 focus:text-dynamic-color-from"/>
                        <label htmlFor="inline-radio-1">
                            ساعت 11 الی 14</label>
                    </li>
                    <li className={"timing-content-item flex gap-[18px] items-center"}>
                        <input checked={value === 2} id="inline-radio-2" onChange={(e) => setValue(+e.target.value)}
                               type="radio" value={2} name="inline-radio-group"
                               className="w-[20px] h-[20px] text-dynamic-color-from bg-gray-100 border-gray-300 focus:text-dynamic-color-from"/>
                        <label htmlFor="inline-radio-2">
                            ساعت 11 الی 14</label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TimeChoose;