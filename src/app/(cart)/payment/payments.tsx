'use client'

import React from 'react';
import {HiOutlineCreditCard} from "react-icons/hi";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {GetPaymentMethods, SelectPaymentMethod} from "@/services/Checkout";
import Image from "next/image";

const Payments = () => {


    const queryClient=useQueryClient()

    const {data} = useQuery({
        queryKey: ['getShippingMethods'],
        queryFn: GetPaymentMethods
    })

    const {mutate} = useMutation<any, any, any, any>({
        mutationFn:  SelectPaymentMethod,
        onSuccess: () => {
            // @ts-ignore
            queryClient.invalidateQueries({queryKey: ["FlyoutShoppingCart"]})
            queryClient.invalidateQueries({queryKey: ["getShippingMethods"]})
        }
    })

    if (data?.data!=='')
    return (
        <div className={"payments"}>
            <ul className={"flex flex-col lg:flex-row  items-center gap-[18px] mt-[24px]"}>
                {data?.data.PaymentMethods?.map((d, index) => (
                    <li key={index} className={`payments-item ${d.Selected ? "active" : ""}`}
                        onClick={() => {
                            mutate({select:`${d.PaymentMethodSystemName}`})
                        }}
                    >
                        <Image src={d.LogoUrl} alt={'logo'} className={"w-[52px] h-[52px]"} width={100} height={100}/>
                        <div className={"flex flex-col gap-[5px]"}>
                            <span className={"text-[#2F2F2F] text-[14px] font-bold"}>{d.Name}</span>
                            <span
                                className={"text-[#2F2F2F] font-medium text-[12px]"}>{d.Description}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Payments;