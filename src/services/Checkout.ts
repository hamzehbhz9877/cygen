import {instant} from "@/services/httpservice";

export const CheckoutAddresses = () =>
    instant.get(`Checkout/CheckoutAddresses`)
export const CheckoutAddNewAddress = ({data}) =>
    instant.post(`Checkout/CheckoutAddNewAddress`, data)
export const CheckoutUpdateAddress = ({data}) =>
    instant.post(`Checkout/CheckoutUpdateAddress`, data)
export const CheckoutDeleteAddress = ({id}) =>
    instant.post(`Checkout/CheckoutDeleteAddress?addressId=${id}`)
export const CheckoutSelectAddress = ({id}) =>
    instant.post(`Checkout/CheckoutSelectAddress?addressId=${id}`,)
export const GetShippingMethods = () =>
    instant.get(`Checkout/GetShippingMethods`)
export const SelectShippingMethod = ({select}) =>
    instant.post(`Checkout/SelectShippingMethod?stringShippingOption=${select}`)
export const GetPaymentMethods = () =>
    instant.get(`Checkout/GetPaymentMethods`)
export const SelectPaymentMethod = ({select}) =>
    instant.post(`Checkout/SelectPaymentMethod?paymentMethodSystemName=${select}`)




