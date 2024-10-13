import React from 'react';
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

const Account = () => {
    return (
        <div className="account">
            <VscAccount color={'#424750'} size={28}/>
            <span className="account-text inline-block ms-1">ورود / ثبت نام</span>
            <IoIosArrowDown className="opacity-10" size={18}/>
        </div>
    );
};

export default Account;