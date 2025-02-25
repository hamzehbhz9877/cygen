import React from 'react';
import Quantity from "@/app/product/[name]/_components/summary/cart/quantity";
import Link from "next/link";
import {productStore} from "@/state/product/product";
import {useQuery} from "@tanstack/react-query";
import {FlyoutShoppingCart} from "@/services/ShoppingCart";

const AddToCartAction = ({product, isPending, handleAddToCart}) => {

    const {combinationId} = productStore(d => d)

    const {data, isRefetching} = useQuery({
        queryKey: ["FlyoutShoppingCart"],
        queryFn: FlyoutShoppingCart,
    })

    return (
        <>
            <div className="add-to-cart flex flex-col items-start">
                {data?.data?.Items.find(d => d.ProductId === product.Id && combinationId === d.CombinationId)
                    ? <div className={"flex items-center w-full"}>
                        <Quantity
                            defaultValue={data?.data?.Items.find(d => d.ProductId === product.Id && combinationId === d.CombinationId)}
                            product={product}/>
                        <div className="mr-2 lg:mr-4 block shrink-0 text-right"><p
                            className="text-neutral-700 text-[14px] leading-[1.8]">در سبد شما</p>
                            <div className="flex items-center text-[12px] mt-2">مشاهده<Link
                                className="text-[#19bfd3]"
                                href="/cart"><p
                                className="mr-1">سبد خرید</p></Link></div>
                        </div>
                    </div>
                    : <button type="submit" className="button" onClick={handleAddToCart}>
                        {isPending || isRefetching ? <div className="loader"/> : 'افزودن به سبد خرید'}
                    </button>
                }
                <span
                    className="text-red-500 w-full text-[12px] pt-2 lg:text-[14px] py-[12px] !text-right">{product.AddToCart.MinimumQuantityNotification}</span>
            </div>
        </>
    );
};

export default AddToCartAction;