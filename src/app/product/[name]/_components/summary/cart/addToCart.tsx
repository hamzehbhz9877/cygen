import React from 'react';
import {priceDiscount} from "@/helpers/client";
import {TbPhoneCall} from "react-icons/tb";
import AddToCartAction from "@/app/product/[name]/_components/summary/cart/addToCartAction";
import {useRouter} from "next/navigation";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {productStore} from "@/state/product/product";
import useModal from "@/context/modal/useModal";
import {AddProductToCartFromDetails} from "@/services/ShoppingCart";
import AddedToCart from "@/app/product/[name]/_components/summary/cart/modal";
import {showToast} from "@/components/react-toastify/react-toastify";

const AddToCart = ({product}) => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const {changeAttributes, inStock, variety} = productStore(d => d)

    const {openModal, closeModal} = useModal()
    const {mutate, isPending} = useMutation<any, any, any, any>({
        mutationFn: AddProductToCartFromDetails, onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ["FlyoutShoppingCart"]})
            if (data.data.MustRedirect) {
                router.push("/cart")
            } else {
                openModal(<AddedToCart close={closeModal} product={product}/>, {className: "md:!w-[450px] no-full"})
            }
        },
        onError: (data) => {
            showToast("error", data.response.data)
        }
    })
    const handleAddToCart = (e) => {
        e.preventDefault()
        const formData = new FormData();
        variety.forEach(e => {
            formData.append('product_attribute_' + e.Id, JSON.stringify(e.ValueIds[0]));
        })
        formData.append(`addtocart_${product.Id}.EnteredQuantity`, JSON.stringify(product?.AddToCart.EnteredQuantity ?? 1))
        mutate({id: product.Id, data: formData})
    }
    return (
        product.AddToCart.DisableBuyButton || !product.InStock || inStock === false ? "" :
                <>
                    {product.ProductPrice.HidePrices ? "" :
                        <div>
                            <div className="old-price">
                                <div className="old-price__value">
                                    <del>
                                        <bdi>{product.ProductPrice.PriceWithDiscountValue ? product.ProductPrice.Price?.split(" ")[0] : changeAttributes.OldPrice?.split(" ")[0] ?? product.ProductPrice.OldPrice?.split(" ")[0]}</bdi>
                                    </del>
                                </div>
                                {(changeAttributes.oldPrice - changeAttributes.price) / changeAttributes.oldPrice ?
                                    <div className="discount">%
                                        <p>{Math.round(((changeAttributes.oldPrice - changeAttributes.price) / changeAttributes.oldPrice) * 100)}</p>
                                    </div> :
                                    priceDiscount(product) ?
                                        <div className="discount">%<p>{priceDiscount(product)}</p></div> : ""}
                            </div>
                            <div className='price'>
                                <bdi>{product.ProductPrice.PriceWithDiscountValue ? product.ProductPrice.PriceWithDiscount.split(" ")[0] : changeAttributes.Price?.split(" ")[0] ?? product.ProductPrice.Price?.split(" ")[0]}&nbsp;
                                    <span
                                        className="woocommerce-Price-currencySymbol font-light">{product.ProductPrice.PriceWithDiscountValue ? product.ProductPrice.PriceWithDiscount?.split(" ")[1] : changeAttributes.Price?.split(" ")[1] ?? product.ProductPrice.Price?.split(" ")[1]}</span>
                                </bdi>
                            </div>
                        </div>
                    }
                    {product.ProductPrice.CallForPrice ?
                        <div className="m-[10px]">
                            <button className={"displayBackInStockSubscription button !flex gap-3"}>
                                <TbPhoneCall size={20}/>
                                تماس برای قیمت
                            </button>
                        </div>
                        :
                        <AddToCartAction product={product} isPending={isPending} handleAddToCart={handleAddToCart}/>
                    }
                </>

    );
};

export default AddToCart;