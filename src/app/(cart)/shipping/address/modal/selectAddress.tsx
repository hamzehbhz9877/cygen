'use client'

import React, {useEffect, useState} from 'react';
import {IoCloseOutline} from "react-icons/io5";
import {PiMapPinPlus, PiPhoneOutgoingThin} from "react-icons/pi";
import {MdOutlineMapsHomeWork} from "react-icons/md";
import {FaAngleLeft, FaRegEnvelope} from "react-icons/fa";
import {AiOutlineUser} from "react-icons/ai";
import {ModalBody, ModalHeader} from "@/components/modal";
import useModal from "@/context/modal/useModal";
import NewAddress from "@/app/(cart)/shipping/address/modal/newAddress";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {CheckoutAddresses, CheckoutDeleteAddress, CheckoutSelectAddress} from "@/services/Checkout";
import {showToast} from "@/components/react-toastify/react-toastify";
import EditAddress from "@/app/(cart)/shipping/address/modal/editAddress";

const SelectAddress = ({close}) => {


    const queryClient = useQueryClient();

    const {data} = useQuery({
        queryKey: ['checkoutAddresses'],
        queryFn: CheckoutAddresses
    })


    const [addresses, setAddresses] = useState<any>([])

    const [value, setValue] = useState<any>()

    const {openModal, closeModal} = useModal()

    
    const {mutate} = useMutation<any, any, any, any>({
        mutationFn: CheckoutSelectAddress, onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ["checkoutAddresses"]})
            queryClient.invalidateQueries({queryKey: ["getDeliveryTimes"]})
        }, onError: (data) => {
            showToast("error", data.response.data)
        }
    })

    useEffect(() => {
        if (data?.data) {
            const invalid = data?.data.InvalidExistingAddresses.map(d => ({...d, invalid: true}))
            if (data?.data.ExistingAddresses.length > 0 && data?.data.InvalidExistingAddresses.length > 0)
                setAddresses([...data?.data.ExistingAddresses, ...invalid])
            else if (data?.data.InvalidExistingAddresses.length > 0)
                setAddresses([...invalid])
            else
                setAddresses([...data?.data.ExistingAddresses])
        }

        setValue(data?.data.SelectedAddressId)

    }, [data]);

    const {mutate: deleteAddress} = useMutation<any, any, any, any>({
        mutationFn: CheckoutDeleteAddress, onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["checkoutAddresses"]})
        }, onError: (data) => {
            showToast("error", data.response.data)
        }
    })


    return (
        <div className={"select-address p-[32px] py-[23px]"}>
            <ModalHeader>
                <div className={"flex items-center justify-between"}>
                    <span className="text-[20px] font-bold text-[#2F2F2F]">انتخاب آدرس</span>
                    <IoCloseOutline className={"cursor-pointer"} size={32} color={"#2F2F2F"} onClick={close}/>
                </div>
                <div className={"flex gap-[13px] mt-[25px]"}
                     onClick={() => openModal(<NewAddress close={closeModal}/>)}>
                    <PiMapPinPlus size={25} color={"#ED303D"}/>
                    <span className={"text-[#ED303D] text-[16px] font-bold cursor-pointer"}>افزودن آدرس جدید</span>
                </div>
            </ModalHeader>

            <ModalBody>
                <div className={"mt-[30px]"}>
                    <ul className={"flex flex-col gap-[17px] currentAddresses"}>
                        {addresses?.map((item, index) => (
                            <li key={index}
                                className={`rounded-[16px]  px-[23px] py-[15px] cursor-pointer border border-solid border-[#D6D6D6] ${(item.invalid) ? 'active-invalid' : item.Id === value? 'active':""}`}
                                onClick={() => mutate({id: item.Id})}>
                                <div className={"flex gap-[10px]"}>
                                    <input checked={item.Id === value}
                                           type="radio" value={item.Id} name="inline-radio-group"
                                           className="w-[22px] h-[22px] text-dynamic-color-from bg-gray-100 border-gray-300 focus:text-dynamic-color-from"/>
                                    <div className={"flex flex-col gap-[4px]"}>
                                        <div className={"flex gap-[8px] items-center "}>
                                            <MdOutlineMapsHomeWork color={"#5E5E5E"} size={16}/>
                                            <p className={"text-[14px] text-[#2F2F2F] font-bold"}>{item.Address1.replaceAll(/"/g, '')}</p>
                                        </div>
                                        <div className={"flex gap-[8px] items-center text-[#2F2F2F]"}>
                                            <FaRegEnvelope color={"#5E5E5E"} size={16}/>
                                            <span>{item.ZipPostalCode}</span>
                                        </div>
                                        <div className={"flex gap-[8px] items-center text-[#2F2F2F]"}>
                                            <PiPhoneOutgoingThin color={"#5E5E5E"} size={16}/>
                                            <span>{item.PhoneNumber}</span>
                                        </div>
                                        <div className={"flex gap-[8px] items-center text-[#2F2F2F]"}>
                                            <AiOutlineUser color={"#5E5E5E"} size={16}/>
                                            <span>{item.FirstName.replaceAll(/"/g, '') + " " + item.LastName.replaceAll(/"/g, '')}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={"flex gap-[10px] items-center justify-end"}>
                                    <div className={"flex gap-[3px]  items-center justify-end"}
                                         onClick={() => openModal(<EditAddress data={item} close={closeModal}/>)}>
                                        <span className={"text-[#00BA88]"}>ویرایش</span>
                                        <FaAngleLeft color={"#00BA88"} size={13}/>
                                    </div>
                                    {/*<div className={"flex gap-[3px]  items-center justify-end"}*/}
                                    {/*     onClick={() => deleteAddress({id: item.Id})}>*/}
                                    {/*    <span className={"text-[#ED303D]"}>حذف</span>*/}
                                    {/*    <FaAngleLeft color={"#ED303D"} size={13}/>*/}
                                    {/*</div>*/}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button
                        className={"bg-[#ED303D] text-white py-[15px] w-full rounded-[15px] text-[18px] font-bold mt-[40px]"}
                        onClick={close}>
                        تایید
                    </button>
                </div>
            </ModalBody>
        </div>
    );
};

export default SelectAddress;