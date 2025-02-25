import React from 'react';
import Image from "next/image";
import {RiDeleteBinLine, RiPaletteLine, RiShieldCheckLine, RiStore2Line, RiTruckLine} from "react-icons/ri";
import Count from "@/app/(cart)/cart/count";
import Link from "next/link";
import WarningsAlerts from "@/app/_components/warning";
import {Discount as DiscountPerc} from "@/helpers/client";
import wrapAnsi from "wrap-ansi";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {UpdateShoppingCart} from "@/services/ShoppingCart";
import {showToast} from "@/components/react-toastify/react-toastify";
import {productStore} from "@/state/product/product";

const Product = ({
                     IsEditable,
                     AllowItemEditing, AttributeInfo, DisableRemoval, Id,
                     Discount,
                     DiscountValue,
                     Picture,
                     ProductId,
                     ProductName,
                     ProductSeName,
                     Quantity,
                     Sku,
                     SubTotal,
                     SubTotalValue,
                     UnitPrice,
                     UnitPriceValue,
                     VendorName,
                     Warnings,
                 }) => {


    const {variety} = productStore(d => d)
    const queryClient=useQueryClient()
    const {mutate, isPending} = useMutation<any, any, any, any>({
        mutationFn: UpdateShoppingCart, onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["FlyoutShoppingCart"]})
            queryClient.invalidateQueries({queryKey: ["ShoppingCart"]})
            showToast("success", 'عملیات با مفقیت انجام شد')
        },
        onError: (data) => {
            showToast("error", data.response.data)
        }
    })
    const handleRemoveFromCart=()=>{
        const formData = new FormData();
        variety.forEach(e => {
            formData.append('product_attribute_' + e.Id, JSON.stringify(e.ValueIds[0]));
        })
        formData.append(`removeFromCart`, JSON.stringify(Id))
        mutate({id: ProductId, data: formData})
    }


    return (
        <div className={"shopping-cart-page__products"}>
            <div className={"flex items-end flex-wrap  justify-between"}>
                <div className={"shopping-cart-page__products-right"}>
                    <div className="image">
                        <Image src={Picture.ImageUrl} title={Picture.Title}
                               alt={Picture.AlternateText}
                               priority width={100} height={100}
                               className={"w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mx-auto"}/>
                        {DiscountPerc(SubTotalValue + DiscountValue, SubTotalValue) ?
                            <div className={"discount mt-[20px] text-nowrap px-[5px]"}>
                                <span>{DiscountPerc(SubTotalValue + DiscountValue, SubTotalValue)} درصد تخفیف</span>
                            </div> : ""}
                    </div>
                    <div className="content">
                        <Link href={"/product/"+ProductSeName}>
                            <h3 className={"title"}>{ProductName}</h3>
                        </Link>
                        <ul>
                            <li>
                                <RiPaletteLine size={16}/>
                                <div className="flex items-center gap-[4px]">
                                    <span>خاکستری</span>
                                    <div className={"color bg-[#CBCBCB]"}></div>
                                </div>
                            </li>
                            <li>
                                <RiStore2Line size={16}/>
                                <span>{VendorName}</span>
                            </li>
                            <li>
                                <RiShieldCheckLine size={16}/>
                                <span>گارانتی سلامت فیزیکی کالا</span>
                            </li>
                            <li>
                                <RiTruckLine size={16}/>
                                <span>ارسال از 2 روزی کاری دیگر</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className={"border-[#E6E6E6] my-[16px] block md:hidden w-full"}/>
                <div className={"shopping-cart-page__products-left"}>
                    <div>
                        {DiscountValue ?
                            <div className="old-price">
                                <del>
                                    <bdi>{
                                        new Intl.NumberFormat('fa-IR').format(
                                            SubTotalValue + DiscountValue,
                                        )}</bdi>
                                </del>
                            </div> : ""}
                        <div className="price">
                            <bdi>{SubTotal.split(" ")[0]}</bdi>
                            {" "}
                            <span>{SubTotal.split(" ")[1]}</span>
                        </div>
                    </div>

                    <div className={"pt-[20px] flex items-center gap-[16px]"}>
                        {IsEditable && AllowItemEditing ?
                            <Count productId={ProductId} defaultValue={{Id, Quantity}}/> : ""}
                        {DisableRemoval ? "" :
                            IsEditable ? <button className={"trash"} onClick={()=>handleRemoveFromCart()}>
                                <RiDeleteBinLine size={16} color="#979797"/>
                                <span className={"hidden md:block"}>حذف</span>
                            </button> : ""
                        }
                    </div>
                </div>
            </div>
            <div className={"mt-[20px]"}>
                {Warnings.length > 0 ? <WarningsAlerts data={Warnings}/> : ""}
            </div>
        </div>
    );
};

export default Product;