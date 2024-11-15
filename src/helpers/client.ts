'use client'

import React, {useEffect} from "react";
import {jwtDecode} from "jwt-decode";

const formatter = new Intl.NumberFormat("fa-IR", {
    useGrouping: true,
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
const isTokenExpired = (token) => {
    if (!token) return true;
    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp < currentTime;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
};


function toEnglishDigits(num: any) {
    const id = {
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
    }
    return num ? num.toString().replace(/[^0-9.]/g, function (w: any) {
        // @ts-ignore
        return id[w] || w
    }) : null
}

function getErrorFromServer(error:any, name:any) {
    const valueRes:any = []
    Object.entries(error).forEach(([key, value]) => {
        if (key === name)
            valueRes.push(value)
    })
    return valueRes
}
const UseDebouncedEffect = (
    onChange,
    delay,
    value
) => {
    useEffect(() => {
        const handler = setTimeout(() => onChange(value), delay);
        return () => clearTimeout(handler);
    }, [value]);
};


export {formatter,UseDebouncedEffect, toEnglishDigits,getErrorFromServer,isTokenExpired}