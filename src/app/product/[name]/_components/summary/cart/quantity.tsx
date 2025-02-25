'use client'
import React from 'react';
import {FaMinus, FaPlus} from "react-icons/fa6";
import {BsTrash3} from "react-icons/bs";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {UpdateShoppingCart} from "@/services/ShoppingCart";
import {showToast} from "@/components/react-toastify/react-toastify";
import useQuantity from "@/hooks/useQuantity";

const Quantity = ({product, defaultValue}: any) => {

    const queryClient = useQueryClient()

    const {mutate, isPending} = useMutation<any, any, any, any>({
        mutationFn: UpdateShoppingCart, onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["FlyoutShoppingCart"]})

        },
        onError: (data) => {
            showToast("error", data.response.data)
        }
    })

    const {handleRemoveFromCart,handlePlus,handleChangeQuantity,handleMinus,value}=useQuantity(mutate,product.Id,defaultValue)


    return (
        <div className="quantity">
            <a className={`ms-[4px]`}
               onClick={handlePlus}>
                <FaPlus/> </a>

            {isPending ? <div className={"w-full h-[24px] grid place-content-center"}>
                    <div className={"loader-cart"}/>
                </div> :
                <input type="number" value={value} onChange={(e) => handleChangeQuantity(e.target.value)}/>}

            <a className={`me-[4px]`}
               onClick={value <= product?.AddToCart.EnteredQuantity ? null : handleMinus}>{
                value === product?.AddToCart.EnteredQuantity ? <BsTrash3 size={18} onClick={handleRemoveFromCart}/> : <FaMinus size={12}/>
            }</a>
        </div>

    );
};

export default Quantity;