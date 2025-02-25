'use client'

import React, {useEffect} from 'react';
import {RiTruckLine} from "react-icons/ri";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {CheckoutAddresses, GetShippingMethods, SelectShippingMethod} from "@/services/Checkout";
import Warnings from "@/app/_components/warning";

const Send = () => {

    const queryClient = useQueryClient()
    const {data} = useQuery({
        queryKey: ['getShippingMethods'],
        queryFn: GetShippingMethods
    })

    const {mutate} = useMutation<any, any, any, any>({
        mutationFn: SelectShippingMethod,
        onSuccess: () => {
            // @ts-ignore
            queryClient.invalidateQueries({queryKey: ["getDeliveryTimes"]})
            queryClient.invalidateQueries({queryKey: ["getShippingMethods"]})
            queryClient.invalidateQueries({queryKey: ["FlyoutShoppingCart"]})
        }
    })


    return (
        <div className={"send"}>
            <span className={"title"}>روش ارسال</span>
            <div className={"mt-[10px]"}>
                {data?.data.Warnings?.length > 0 ? <Warnings data={data?.data.Warnings}/> : ""}
            </div>
            <div className={"send-list"}>
                {data?.data.ShippingMethods?.map((d, index) => (
                    <div key={index} className={`send-item ${d.Selected ? "active" : ""}`} onClick={() => {
                        mutate({select: `${d.Name}___${d.ShippingRateComputationMethodSystemName}`})
                    }}>
                        <div className={"flex gap-[12px] items-center"}>
                            <RiTruckLine size={32} color={"#ED303D"} className={"scale-x-[-1]"}/>
                            <div className={"text-[#2F2F2F] flex flex-col"}>
                                <span className={"text-[14px] font-bold"}>{d.Name}</span>
                                <span className={"text-[12px]"}>{d.Description}</span>
                            </div>
                        </div>
                        <div className={"fle flex-col"}>
                            <span className={"text-[12px] font-bold text-[#979797]"}>قیمت:</span>
                            <div className={"flex items-center gap-[4px] text-[14px] font-bold"}>
                                <span>{d.Fee}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Send;