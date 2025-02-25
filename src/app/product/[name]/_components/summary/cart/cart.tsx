'use client'
import React, {useEffect, useRef, useState} from 'react';
import {LuBellRing} from "react-icons/lu";
import AddToCartPrice from "@/app/product/[name]/_components/summary/cart/addToCartPrice";
import Banner from "@/components/banner";
import {ProductDetailsAttributeChange} from "@/services/ShoppingCart";
import {useMutation, useQuery} from "@tanstack/react-query";
import {GetProductCombinations} from "@/services/Product";
import {productStore} from "@/state/product/product";

const Cart = ({product}) => {


        const [res, setRes] = useState([])


        const {
            setVariety,
            setChangeAttributes,
            variety,
            setInStock,
            inStock,
            changeAttributes,
            setChanges,
            setCombinationId
        } = productStore(d => d);

        const {data: combinations} = useQuery({
            queryKey: ["GetProductCombinations", product.Id],
            queryFn: async () => GetProductCombinations(product.Id)
        })


        const {mutate, isPending} = useMutation<any, any, any, any>({
            mutationFn: ProductDetailsAttributeChange, onSuccess: (data) => {
                const varietyRes = variety?.filter(de => !data.data?.disabledattributemappingids?.includes(de.Id))
                setChanges(varietyRes)
                setChangeAttributes(data.data)
            },
            onError: (data) => {
            }
        })


        const equalsCheck = (a, b) => {
            return a.length === b.length && JSON.stringify(a) === JSON.stringify(b);
        }

        useEffect(() => {
            const result = []
            product.ProductAttributes.forEach(e => {
                if (e.IsRequired)
                    result.push({
                        Id: e.Id,
                        ValueIds: [e.Values.find(d => d.IsPreSelected) ? e.Values.find(d => d.IsPreSelected).Id : e.Values[0].Id]
                    })
            })
            setRes(result)
        }, [])


        useEffect(() => {
            if (variety?.length > 0) {
                const InStock = combinations?.data.find(d => equalsCheck(d.Attributes, variety) === true)
                if (InStock) {
                    if (!InStock.InStock) {
                        setInStock(false)
                        setChangeAttributes({
                            ...changeAttributes,
                            disabledattributemappingids: InStock.DisabledAttributeMappingIds
                        })
                    } else {
                        setCombinationId(InStock.Id)
                        setInStock(true)
                        const formData = new FormData();
                        variety.forEach(e => {
                            formData.append('product_attribute_' + e.Id, JSON.stringify(e.ValueIds[0]));
                        })
                        mutate({data: formData, id: product.Id})
                    }
                }
                if (combinations?.data.every(d => equalsCheck(d.Attributes, variety) === false)) {
                    const formData = new FormData();
                    variety?.forEach(e => {
                        formData.append('product_attribute_' + e.Id, JSON.stringify(e.ValueIds[0]));
                    })
                    mutate({data: formData, id: product.Id})
                }
            }
        }, [variety])


        useEffect(() => {
            if (combinations?.data.every(d => equalsCheck(d.Attributes, res) === false)) {
                const data = combinations?.data.find(d => d.InStock === true)
                const res = JSON.parse(JSON.stringify(data.Attributes));
                setVariety(res)
            } else {
                for (let i = 0; i < combinations?.data.length; i++) {
                    if (equalsCheck(combinations?.data[i].Attributes, res)) {
                        if (combinations?.data[i].InStock) {
                            setVariety(res)
                        } else {
                            const data = combinations?.data.find(d => d.InStock === true)
                            const res = JSON.parse(JSON.stringify(data.Attributes));
                            setVariety(res)
                        }
                    }
                }
            }
        }, [combinations]);


        return (

            <div className="summary__cart">
                {isPending ? <div className={"flex summary__cart flex-col gap-[30px] !w-[100%]"}>
                        <div className="max-w-sm !h-max !bg-gray-200 w-full">
                            <div className={"h-[200px]  w-full"}/>
                        </div>
                        <div className=" max-w-sm !h-max !bg-gray-200 w-full">
                            <div className={"h-[70px]  w-full"}/>
                        </div>
                    </div> :
                    <div className={"w-full"}>
                        <AddToCartPrice product={product}/>
                        {product.AddToCart.DisableBuyButton && product.DisplayBackInStockSubscription ?
                            <div className={"p-[10px]"}>
                                <p className={"my-[15px] text-justify text-[14px]"}>این کالا فعلا موجود نیست اما می‌توانید
                                    زنگوله
                                    را بزنید تا به محض موجود شدن، به شما خبر دهیم.
                                </p>
                                <button className="displayBackInStockSubscription button !flex gap-3"><LuBellRing
                                    size={20}/>
                                    <span>موجود شد خبرم کن</span>
                                </button>
                            </div> : ""
                        }
                        {((product.AddToCart.DisableBuyButton && !product.DisplayBackInStockSubscription) || !product.InStock || inStock === false) ?
                            <div className="p-[10px]">
                                <div className="rounded-md nonexistent px-8  bg-white mt-3">
                                    <div className="flex w-full items-center gap-1 py-3">
                                        <div className=" h-[1px] flex-grow bg-gray-500"></div>
                                        <p className="relative  text-sm text-gray-600 px-4 font-medium">ناموجود</p>
                                        <div className=" h-[1px] flex-grow bg-gray-500"></div>
                                    </div>
                                </div>
                            </div> : ""}
                    </div>}
                <Banner PositionSystemNames={"product_details_after_price_box"} type EntityName={"Product"}
                        EntityId={String(product.Id)}/>
            </div>

        )
            ;
    }
;

export default Cart;