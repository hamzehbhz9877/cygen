'use client'

import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import useModal from "@/context/modal/useModal";
import Login from "@/components/login";

const Account = () => {

    const {closeModal, openModal} = useModal()

    return (
        <div className="account" onClick={()=>openModal(<Login/>,{className:"!w-[31%] max-w-[500px] login"})}>
            <VscAccount color={'#424750'} size={28}/>
            <span className="account-text inline-block ms-1">ورود / ثبت نام</span>
            <IoIosArrowDown className="opacity-10" size={18}/>
        </div>
    );
};

export default Account;