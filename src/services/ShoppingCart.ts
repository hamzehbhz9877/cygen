import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";

export const ProductDetailsAttributeChange = ({data,id}) =>
    instant.post(`ShoppingCart/ProductDetailsAttributeChange?productId=${id}`,data)

export const AddProductToCartFromDetails = ({data,id}) =>
    instant.post(`ShoppingCart/AddProductToCartFromDetails?shoppingCartTypeId=1&productId=${id}`,data)

export const UpdateShoppingCart = ({data,id}) =>
    instant.post(`ShoppingCart/UpdateShoppingCart`,data)

export const FlyoutShoppingCart = () =>
    instant.get('ShoppingCart/FlyoutShoppingCart')

export const ShoppingCartService = () =>
    instant.get('ShoppingCart/ShoppingCart')


export const RemoveDiscountCoupon = ({data}) =>
    instant.post('ShoppingCart/RemoveDiscountCoupon',data)


export const ApplyDiscountCoupon = ({code,data}) =>
    instant.post(`ShoppingCart/ApplyDiscountCoupon?discountCouponCode=${code}`,data)


export const ApplyGiftCard = ({code,data}) =>
    instant.post(`ShoppingCart/ApplyGiftCard?giftCardCouponCode=${code}`,data)


export const RemoveGiftCard = ({data}) =>
    instant.post('ShoppingCart/RemoveGiftCard',data)


export const ShoppingCartServiceQuery = queryOptions({
    queryKey: ["ShoppingCart"],
    queryFn:async ()=>{
        const res:any = await ShoppingCartService()
        console.log("res",res)
        return JSON.parse(JSON.stringify(res))
    },
})