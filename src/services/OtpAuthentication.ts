import {instant} from "./httpservice";

export const RequestLoginRegister = (data:any) => instant.post('OtpAuthentication/RequestLoginRegister', data)
export const LoginRegisterVerification = (data:any) => instant.post('OtpAuthentication/LoginRegisterVerification', data)
export const GetGuestCustomer = () => instant.post('OtpAuthentication/GetGuestCustomer')
