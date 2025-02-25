'use client'

import React, {useState} from 'react';
import {IoCloseOutline} from "react-icons/io5";
import {PiMapPin, PiMapPinPlus} from "react-icons/pi";
import {ModalBody, ModalHeader} from "@/components/modal";
import Select from "@/components/input/select";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {CheckoutAddNewAddress, CheckoutAddresses} from "@/services/Checkout";

import {Form, Formik} from "formik"
import Input from "@/components/input/simple";
import * as Yup from "yup";
import {GetCitiesByStateId} from "@/services/Common";
import {showToast} from "@/components/react-toastify/react-toastify";

const NewAddress = ({close}) => {

    const {data} = useQuery({
        queryKey: ['checkoutAddresses'],
        queryFn: CheckoutAddresses
    })

    const res = data?.data.BillingNewAddress.CustomAddressAttributes.map(d => {
        return {[d.ControlId]: d.IsRequired ? Yup.string().required(d.Name + " " + 'الزامی') : Yup.string().trim().nullable().trim()}
    }).reduce(function (result, item) {
        const key = Object.keys(item)[0]; //first property: a, b, c
        result[key] = item[key];
        return result;
    }, {});

    const dValues = data?.data.BillingNewAddress.CustomAddressAttributes.map(d => {
        return {[d.ControlId]: d.DefaultValue}
    }).reduce(function (result, item) {
        const key = Object.keys(item)[0]; //first property: a, b, c
        result[key] = item[key];
        return result;
    }, {});

    const validationSchema = Yup.object({
        FirstName: Yup.string().required('نام الزامی').trim(),
        LastName: Yup.string().required('نام خانوادگی الزامی').trim(),
        StateProvinceId: Yup.number().required('استان الزامی'),
        CityId: data?.data.BillingNewAddress.CityRequired ? Yup.number().required('شهر الزامی') : Yup.number(),
        Address1: data?.data.BillingNewAddress.StreetAddressRequired ? Yup.string().required('آدرس الزامی').trim() : Yup.string().trim(),
        Company: data?.data.BillingNewAddress.CompanyRequired ? Yup.string().required('شرکت الزامی').trim() : Yup.string().nullable().trim(),
        FaxNumber: data?.data.BillingNewAddress.FaxRequired ? Yup.string().required('شماره فکس الزامی').trim() : Yup.string().nullable().trim(),
        ZipPostalCode: data?.data.BillingNewAddress.ZipPostalCodeRequired ? Yup.number().required('کد پستی الزامی').test('phone-name', 'کد پستی ده رقم میباشد',
            function (value) {
                if (String(value).length <= 9 || String(value).length >= 11) {
                    return false;
                }
                return true;
            }) : Yup.string().trim(),
        PhoneNumber: data?.data.BillingNewAddress.PhoneRequired ?
            Yup.string().required("شماره همراه الزامی")
                .test('test-name', 'شماره همراه نامعتبر',
                    function (value) {
                        // var emailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
                        const phoneRegex = /^(\+9|0)?9\d{9}$/ // Change this regex based on requirement
                        // let isValidEmail = emailRegex.test(value);
                        const isValidPhone = phoneRegex.test(value);
                        if (!isValidPhone) {
                            return false;
                        }
                        return true;
                    }) : Yup.number(),
        ...res
    });

    const [provinceId, setProvinceId] = useState(null);


    const {data: city} = useQuery({
        queryKey: ['getCitiesByStateId'],
        queryFn: () => GetCitiesByStateId(provinceId),
        enabled: !!provinceId,
    })
    const queryClient=useQueryClient()

    const {mutate,error} = useMutation<any, any, any, any>({
        mutationFn: CheckoutAddNewAddress,onSuccess: (data) => {
            showToast("success", 'عملیات با موفقیت انجام شد')
            close()
            queryClient.invalidateQueries({queryKey: ["checkoutAddresses"]})
        },
    })


    const handleSubmit = (values) => {

        const formData = new FormData();

        const rez=Object.entries({
            ...values,
            CountryId: data?.data.BillingNewAddress.DefaultCountryId,
            StateProvinceId: +values.StateProvinceId,
            CityId: +values.CityId,
            Latitude: 0,
            Longitude: 0,
        })

        rez.forEach(e => {
            if (e[1]!==null)
            formData.append(e[0], JSON.stringify(e[1]));
        })

        mutate({data: formData})
    }

    return (
        <div className={"select-address p-[32px] py-[23px]"}>
            <ModalHeader>
                <div className={"flex items-center justify-between"}>
                    <span className="text-[20px] font-bold text-[#2F2F2F]">جزئیات نشانی جدید</span>
                    <IoCloseOutline className={"cursor-pointer"} size={32} color={"#2F2F2F"} onClick={close}/>
                </div>
            </ModalHeader>

            <ModalBody>
                <Formik
                    initialValues={{
                        FirstName: data?.data.BillingNewAddress.FirstName,
                        LastName: data?.data.BillingNewAddress.LastName,
                        StateProvinceId: data?.data.BillingNewAddress.StateProvinceId,
                        CityId: data?.data.BillingNewAddress.CityId,
                        Company: data?.data.BillingNewAddress.Company,
                        ZipPostalCode: data?.data.BillingNewAddress.ZipPostalCode,
                        FaxNumber: data?.data.BillingNewAddress.FaxNumber,
                        Address1: data?.data.BillingNewAddress.Address1,
                        PhoneNumber: data?.data.BillingNewAddress.PhoneNumber,
                        ...dValues
                    }}
                    enableReinitialize
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {(formikProps) => {
                        console.log(formikProps)
                        return (
                            <Form>
                                <div className={"mt-[30px]"}>
                                    <div
                                        className={" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[16px] mb-[20px]"}>
                                        <Input error={error} type={"text"} name="FirstName" label={<>
                                            <span>نام</span><span
                                            className={"text-red-500 mx-2 inline-block"}>*</span>
                                        </>}/>
                                        <Input error={error} type={"text"} name="LastName" label={<>
                                            <span>نام خانوادگی</span><span
                                            className={"text-red-500 mx-2 inline-block"}>*</span>
                                        </>}/>
                                    </div>
                                    <div
                                        className={" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[16px]"}>
                                        {
                                            data?.data.BillingNewAddress.StateProvinceEnabled ?
                                                <Select name={"StateProvinceId"} label={<>
                                                    <span>استان</span><span
                                                    className={"text-red-500 mx-2 inline-block"}>*</span>
                                                </>
                                                } getValue={(data) => {
                                                    setProvinceId(+data)
                                                }}>
                                                    <option className="hover:bg-dynamic-color-from"
                                                            disabled={data?.data.BillingNewAddress.AvailableStates[0].Disabled}
                                                            value={data?.data.BillingNewAddress.AvailableStates[0].Value}
                                                    >{data?.data.BillingNewAddress.AvailableStates[0].Text}</option>
                                                    {data?.data.BillingNewAddress.AvailableStates.map((d, i) => {
                                                        if (i > 0)
                                                            return (
                                                                <option className="hover:bg-dynamic-color-from" key={i}
                                                                        disabled={d.Disabled}
                                                                        value={d.Value}
                                                                        defaultValue={d.Selected}>{d.Text}</option>
                                                            )
                                                    })}
                                                </Select> : ""}
                                        {data?.data.BillingNewAddress.CityEnabled ?
                                            <Select name={"CityId"}
                                                    label={data?.data.BillingNewAddress.CityRequired ? <>
                                                        <span>شهر</span><span
                                                        className={"text-red-500 mx-2 inline-block"}>*</span>
                                                    </> : "شهر"
                                                    }>
                                                {
                                                    city?.data.length > 0 ?
                                                        <>
                                                            <option value="" disabled>
                                                                انتخاب کنید
                                                            </option>
                                                            {city?.data?.map((d, i) => {
                                                                return (
                                                                    <option className="hover:bg-dynamic-color-from"
                                                                            key={i}
                                                                            disabled={d.Disabled}
                                                                            value={d.Value}
                                                                            defaultValue={d.Selected}>{d.Text}</option>
                                                                )
                                                            })}
                                                        </>
                                                        : <option value="">
                                                            انتخاب شهر
                                                        </option>
                                                }
                                            </Select> : ""}
                                    </div>

                                    <div className={"flex flex-col mt-[20px]"}>
                                        {
                                            data?.data.BillingNewAddress.StreetAddressEnabled ?
                                                <Input error={error} type={"text"} name="Address1"
                                                       label={data?.data.BillingNewAddress.StreetAddressRequired ? <>
                                                           <span>آدرس</span><span
                                                           className={"text-red-500 mx-2 inline-block"}>*</span>
                                                       </> : "آدرس"
                                                       }/>
                                                : ""
                                        }
                                    </div>

                                    <div
                                        className={" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[16px] mt-[20px]"}>
                                        {
                                            data?.data.BillingNewAddress.CompanyEnabled ?
                                                <Input error={error} type={"text"} name="Company"
                                                       label={data?.data.BillingNewAddress.CompanyRequired ? <>
                                                           <span>شرکت</span><span
                                                           className={"text-red-500 mx-2 inline-block"}>*</span>
                                                       </> : "شرکت"
                                                       }/>
                                                : ""
                                        }
                                        {
                                            data?.data.BillingNewAddress.FaxEnabled ?
                                                <Input error={error} type={"text"} name="FaxNumber"
                                                       label={data?.data.BillingNewAddress.FaxRequired ? <>
                                                           <span>فکس</span><span
                                                           className={"text-red-500 mx-2 inline-block"}>*</span>
                                                       </> : "فکس"
                                                       }/>
                                                : ""
                                        }
                                    </div>

                                    <div className={"flex flex-col mt-[20px]"}>
                                        {data?.data.BillingNewAddress.ZipPostalCodeEnabled ?
                                            <Input error={error} type={"number"} className={"text-left"}
                                                   name="ZipPostalCode"
                                                   label={data?.data.BillingNewAddress.ZipPostalCodeRequired ? <>
                                                       <span>کد پستی (ده رقمی)</span><span
                                                       className={"text-red-500 mx-2 inline-block"}>*</span>
                                                   </> : "کد پستی (ده رقمی)"
                                                   }/> : ""}
                                    </div>

                                    {data?.data.BillingNewAddress.PhoneEnabled ?
                                        <div
                                            className={`flex gap-[16px] ${formikProps.getFieldMeta('PhoneNumber').touched && formikProps.getFieldMeta('PhoneNumber').error ? 'items-center' : 'items-end'} mt-[20px]`}>
                                            <div className={"flex-1"}>
                                                <Input error={error} type={"number"} className={"text-left"} name="PhoneNumber"
                                                       label={data?.data.BillingNewAddress.PhoneRequired ? <>
                                                           <span>شماره همراه</span><span
                                                           className={"text-red-500 mx-2 inline-block"}>*</span>
                                                       </> : "شماره همراه"
                                                       }/>
                                            </div>
                                            <div>
                                                <input type={"text"} readOnly={true} value={"98+"} disabled
                                                       className={`${formikProps.getFieldMeta('PhoneNumber').touched && formikProps.getFieldMeta('PhoneNumber').error ? "mt-[15px]" : "mt-0"}
                                                       text-[#2F2F2F] text-center w-[88px] p-[12px] border border-[#D6D6D6] rounded-[12px]`}/>
                                            </div>
                                        </div> : ""}
                                    <div
                                        className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[16px] mt-[20px]"}>
                                        {
                                            data?.data.BillingNewAddress.CustomAddressAttributes.map(d => {
                                                return <Input error={error} key={d.Name} defaultValue={d.DefaultValue} type={"text"}
                                                              className={"text-left"} name={d.ControlId}
                                                              label={d.IsRequired ? <>
                                                                  <span>{d.Name}</span><span
                                                                  className={"text-red-500 mx-2 inline-block"}>*</span>
                                                              </> : d.Name
                                                              }/>
                                            })
                                        }
                                    </div>

                                    <button type={"submit"}
                                            className={"bg-[#ED303D] text-white py-[15px] w-full rounded-[15px] text-[18px] font-bold mt-[40px]"}>
                                        ذخیره نشانی
                                    </button>
                                    <div className={"flex gap-[4px] mt-[20px] justify-center"}>
                                        <PiMapPin size={25} className={"text-dynamic-color-from"}/>
                                        <span
                                            className={"text-dynamic-color-from text-[16px] font-bold cursor-pointer"}>اصلاح موقعیت بر روی نقشه</span>
                                    </div>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </ModalBody>
        </div>
    );
};

export default NewAddress;