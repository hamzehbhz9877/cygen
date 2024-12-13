'use client'

import React, {useState} from 'react';
import { FaMinus,FaPlus } from "react-icons/fa6";

const Quantity = () => {
    const [value,setValue]=useState(1)

    const handleChangeQuantity=(value)=>{
        if(value>0 && Number(value))
            setValue(value)
    }

    const handlePlus=()=>setValue(value+1)

    const handleMinus=()=>setValue(value>1?value-1:value)


    return (
        <div className="quantity">
            <a className={`ms-[4px]`} onClick={handlePlus}><FaPlus size={12}/></a>
            <input type="number" value={value} onChange={(e) => handleChangeQuantity(e.target.value)}/>
            <a className={`me-[4px] ${value===1?'opacity-50':''}`} onClick={handleMinus}><FaMinus size={12}/></a>
        </div>

    );
};

export default Quantity;