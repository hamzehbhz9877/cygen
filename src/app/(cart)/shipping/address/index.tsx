'use client'

import React, {useEffect, useState} from 'react';
import {FaPlus} from "react-icons/fa6";
import UseModal from "@/context/modal/useModal";
import SelectAddress from "@/app/(cart)/shipping/address/modal/selectAddress";
import {useMutation, useQuery} from "@tanstack/react-query";
import {CheckoutAddresses, CheckoutSelectAddress} from "@/services/Checkout";
import NewAddress from "@/app/(cart)/shipping/address/modal/newAddress";
import CurrentAddresses from "@/app/(cart)/shipping/address/currentAddresses";
import {showToast} from "@/components/react-toastify/react-toastify";

const Address = () => {

    const {openModal, closeModal} = UseModal()

    const [addresses, setAddresses] = useState<any>({})

    const {data} = useQuery({
        queryKey: ['checkoutAddresses'],
        queryFn: CheckoutAddresses
    })

    useEffect(() => {
        if (data?.data) {
            const findExisting = data?.data.ExistingAddresses.find(d => d.Id === data?.data.SelectedAddressId)
            if (findExisting)
                setAddresses({selected: findExisting, invalid: false})
            const findInvalid = data?.data.InvalidExistingAddresses.find(d => d.Id === data?.data.SelectedAddressId)
            if (findInvalid)
                setAddresses({selected: findInvalid, invalid: true})
        }
    }, [data]);


    return (
        <div
            className={`address`}>
            {addresses.selected ? <CurrentAddresses selected={addresses.selected}/> :
                <div
                    className="flex flex-row lg:flex-col flex-1 gap-[10px] justify-start lg:justify-center items-center h-[auto] lg:h-[130px] empty"
                    onClick={() => openModal(data?.data.ExistingAddresses?.length === 0 ?
                        <NewAddress close={closeModal}/> :
                        <SelectAddress close={closeModal}/>)}>
                    <FaPlus size="24" color={'#2F2F2F'}/>
                    <span className={"text-[14px] text-[#2F2F2F] inline-block"}>افزودن آدرس جدید</span>
                </div>}
        </div>
    );
};

export default Address;