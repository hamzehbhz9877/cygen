'use client'

import React, {useEffect, useState} from 'react';
import { FaMinus,FaPlus } from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";
import {BsTrash3} from "react-icons/bs";

const Quantity = ({product}) => {
    const [value,setValue]=useState(1)

    useEffect(() => {
        setValue(product?.AddToCart.EnteredQuantity)
    }, [product]);

    const handleChangeQuantity=(value)=>{
        if(value>0 && Number(value))
            setValue(value)
    }

    const handlePlus=()=>setValue(value+1)

    const handleMinus=()=>setValue(value>1?value-1:value)


    return (
        <div className="quantity">
            <a className={`ms-[4px] ${product?.AddToCart.MinimumQuantityNotification === value ? 'opacity-60 !cursor-not-allowed' : ""}`}
               onClick={handlePlus}>
                <FaPlus/> </a>

            <input type="number" value={value} onChange={(e) => handleChangeQuantity(e.target.value)}/>

            <a className={`me-[4px]`} onClick={handleMinus}>{
                value === product?.AddToCart.EnteredQuantity  ? <BsTrash3 size={18}/> : <FaMinus size={12}/>
            }</a>
        </div>

    );
};

export default Quantity;