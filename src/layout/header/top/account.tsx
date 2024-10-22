'use client'

import React, {useRef} from 'react';
import {VscAccount} from "react-icons/vsc";
import {IoIosArrowDown} from "react-icons/io";
import useModal from "@/context/modal/useModal";
import Login from "@/components/login";
import UseAuth from "@/context/authentication/useAuth";
import DashboardMenu from "@/layout/header/mobile/dashboardMenu";
import useClickOutside from "@/hooks/useOutsideClick";

const Account = () => {

    const { openModal} = useModal()

    const {user} = UseAuth()

    const ref=useRef<HTMLDivElement>(null)

    const handleDropDown=()=>{
        document.querySelector('.dashboard').classList.toggle("active")
        document.querySelector('.angle').classList.toggle("rotate")
    }

    useClickOutside(ref,()=>{
        document.querySelector('.dashboard')?.classList.remove("active")
        document.querySelector('.angle')?.classList.remove("rotate")
    })

    return (
            <div ref={ref} className="account relative" onClick={ user ? handleDropDown: ()=>openModal(<Login/>, {className: "login"})}>
                <VscAccount color={'#424750'} size={28}/>
                <span className="account-text inline-block ms-1">{user ? user.Username : 'ورود / ثبت نام'}</span>
                <IoIosArrowDown className={user?"angle opacity-100":"opacity-10"} color={"#424750"} size={18}/>
                <DashboardMenu/>
            </div>
    );
};

export default Account;