'use client'

import React from 'react';
import PriceBox from "@/app/_components/priceBox";
import Consignment from "@/app/(cart)/shipping/consignment";
import Address from "@/app/(cart)/shipping/address";

const Page = () => {

    return (
        <div className={"shipping-page"}>
            <div className={"container"}>
                <div className={"flex gap-[24px] flex-col lg:flex-row"}>
                    <div className={"w-full lg:w-0 flex-1"}>
                        <div className={"mb-[36px]"}>
                            <h3 className={"text-[#2F2F2F] text-[14px] font-bold mb-[8px]"}>آدرس تحویل سفارش</h3>
                            <Address/>
                        </div>
                        <Consignment/>
                    </div>
                    <PriceBox/>
                </div>
            </div>
        </div>
    );
};

export default Page;