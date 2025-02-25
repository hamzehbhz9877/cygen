'use client'

import React from 'react';
import {FaMinus, FaPlus} from "react-icons/fa6";
import useQuantity from "@/hooks/useQuantity";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {UpdateShoppingCart} from "@/services/ShoppingCart";
import {showToast} from "@/components/react-toastify/react-toastify";
import {productStore} from "@/state/product/product";

const Count = ({defaultValue, productId, sidebar = false}: any) => {

    const queryClient = useQueryClient();
    const {setShoppingCart} = productStore(d => d)


    const {mutate, isPending} = useMutation<any, any, any, any>({
        mutationFn: UpdateShoppingCart, onSuccess: (data) => {
            setShoppingCart(data.data)
            if (sidebar) {
                const product = data.data.Items.find(i => i.ProductId === productId);
                product.Warnings.map(data=>{
                    showToast("error", data,{position:"top-left"})
                })
            }

            queryClient.invalidateQueries({queryKey: ["FlyoutShoppingCart"]})
            queryClient.invalidateQueries({queryKey: ["ShoppingCart"]})
        },
        onError: (data) => {
            showToast("error", data.response.data)
        }
    })

    const {
        handlePlus,
        handleMinus,
        value
    } = useQuantity(mutate, productId, defaultValue)

    return (
        <div className={"count h-[32px] flex"}>
 <span
     onClick={handlePlus}
     className={`plus border cursor-pointer border-[#E6E6E6] rounded-t-lg-[6px] rounded-r-[6px] p-2 ${value <= 20 ? 'border-[#ED303D]' : ""}`}>
     <FaPlus size={13} color={'#ED303D'}/></span>
            <span
                className={"value flex items-center justify-center h-full  border-y border-y-[#E6E6E6] w-[50px] text-center"}>{isPending ?
                <div className={"loader-cart"}/> : value}</span>
            <span
                onClick={handleMinus}
                className={`minus cursor-pointer border border-[#E6E6E6] rounded-l-[6px] rounded-b-lg-[6px] p-2 ${value > 1 ? 'border-[#ED303D]' : ""}`}>
                <FaMinus size={13} color={value > 1 ? '#ED303D' : "#E6E6E6"}/></span>

        </div>
    );
};

export default Count;