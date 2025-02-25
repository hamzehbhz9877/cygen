'use client'

import React from 'react';


import Timing from "@/app/(cart)/shipping/timing";
import Send from "@/app/(cart)/shipping/send";
import {useQuery, useQueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {ShoppingCartService,} from "@/services/ShoppingCart";
import ProductList from "@/app/_components/productList";

const Consignment = () => {

    const {data} = useQuery<any>({
        queryKey: ["ShoppingCart"],
        queryFn: ShoppingCartService,
    })

    return (
        <div className={"consigment"}>
            <Send/>
            <hr className={"border-[#E5E5E5] my-[16px]"}/>
            <div className={"flex items-center justify-between"}>
                <div className="products-count">
                    <span>مرسوله</span>
                    <span className={"value"}>({data?.data.Items.length} کالا)</span>
                </div>
                {/*<div>*/}
                {/*    <span className={"status"}>آماده ارسال</span>*/}
                {/*</div>*/}
            </div>
            <ProductList data={data?.data.Items}/>
            <Timing/>
        </div>
    );
};

export default Consignment;