'use client'
import React from 'react';
import Product from "@/app/(cart)/cart/product";
import PriceBox from "@/app/_components/priceBox";
import {useQuery, useQueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {ShoppingCartService, ShoppingCartServiceQuery} from "@/services/ShoppingCart";
import WarningsAlerts from "@/app/_components/warning";
import {productStore} from "@/state/product/product";
import EmptyCart from "@/components/partial/cart/emptyCart";

const ShoppingCart = () => {

    const {shoppingCart} = productStore(d => d)
    const {data, isLoading} = useQuery<any>({
        queryKey: ["ShoppingCart"],
        queryFn: ShoppingCartService,
    })

    if (isLoading)
        return null
    else {
        if (data?.data.Items.length === 0)
            return <EmptyCart/>
        else
            return (
                <div className={"shopping-cart-page"}>
                    <div className="container">
                        {/*<Map/>*/}
                        {shoppingCart?.Warnings.length > 0 || data?.data.Warnings.length > 0 ?
                            <WarningsAlerts data={shoppingCart.Warnings ?? data?.data.Warnings}/> : ""}
                        <div className="flex gap-[24px] flex-wrap md:flex-nowrap">
                            <div className="flex flex-col gap-[24px] flex-1">
                                {shoppingCart?.Items ?
                                    shoppingCart.Items.map(item => (
                                        <Product key={item.Id} IsEditable={data.data.IsEditable} {...item}/>
                                    ))
                                    : data?.data?.Items.map(item => (
                                        <Product key={item.Id} IsEditable={data.data.IsEditable} {...item}/>
                                    ))}
                            </div>
                            <PriceBox shipping={false} gift={false} nextStepUrl={"/cart"}/>
                        </div>
                    </div>
                </div>
            );
    }

};

export default ShoppingCart;