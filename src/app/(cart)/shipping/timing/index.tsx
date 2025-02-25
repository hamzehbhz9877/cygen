'use client'
import React, {useState} from 'react';
import {RiEditBoxLine, RiTimeLine} from "react-icons/ri";
import {useQuery} from "@tanstack/react-query";
import {GetDeliveryTimes} from "@/services/OrderDelivertTime";
import UseSlideinModal from "@/hooks/useSlideinModal";
import More from "@/components/modal/slideIn";
import TimingChoose from "@/app/(cart)/shipping/timing/timeChoose";

const Timing = () => {


    const {data} = useQuery({
        queryKey: ['getDeliveryTimes'],
        queryFn: GetDeliveryTimes
    })

    const {handleMore, isOpen, moreRef,close} = UseSlideinModal()


    if (data?.data!=="")
        return (
            <div>
                <hr className={"border-[#E5E5E5] my-[16px]"}/>
                <More isOpen={isOpen} moreRef={moreRef}>
                    <TimingChoose data={data} hide={false} close={close}/>
                </More>
                <div className={"block lg:hidden"}>
                    <button onClick={handleMore}
                            className={"text-[14px] font-bold justify-center rounded-[16px] w-full bg-[#ED303D08] text-[#ED303D] flex gap-[8px] py-[13px] mt-[30px]"}>
                        <RiTimeLine size={24} color={"#ED303D"}/>
                        انتخاب زمان ارسال
                    </button>
                    <p className={"text-[#DFA716] w-full bg-[#DFA71608] text-[14px] mt-[16px] rounded-[8px] p-[8px]"}>لطفا
                        زمان ارسال را
                        تعیین کنید</p>
                </div>
                <div className={"rounded-[16px] p-[16px] border border-[#E6E6E6] mt-[27px] block lg:hidden"}>
                    <div className={"text-[#5E5E5E] flex gap-[5px] text-[14px] font-bold"}>
                        <RiTimeLine size={24} color={"#5E5E5E"}/>
                        زمان ارسال:
                    </div>
                    <div className={"flex justify-between items-center"}>
                        <p className={"text-[#5E5E5E] pt-[16px]"}>دیتا</p>
                        <button
                            className={"flex items-center gap-[4px] rounded-[8px] border border-[#E6E6E6] px-[9px] py-[6px] text-[#ED303D]"}>
                            <RiEditBoxLine size={16} color={"#ED303D"}/>
                            ویرایش
                        </button>
                    </div>
                </div>
                <TimingChoose data={data}/>

                {/*<More product={product} close={close}/>*/}
            </div>

        )
            ;
};

export default Timing;