'use client'

import React, {useEffect} from "react";
import moment from "jalali-moment";

const formatter = new Intl.NumberFormat("fa-IR", {
    useGrouping: true,
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    document.documentElement?.scrollTo({top: element?.offsetTop ?? 0});
}


const diffDays = (data) => {
    const date1: any = new Date(data);
    const date2: any = new Date();
    const time = date2 - date1;

    const dateFormatter: any = new Intl.DateTimeFormat('fa-IR');
    const seconds = moment.duration(time).seconds();
    const minutes = moment.duration(time).minutes();
    const hours = moment.duration(time).hours();
    const days = moment.duration(time).days();
    const month = moment.duration(time).months();

    if (month > 0) {
        return month + " " + "ماه"
    } else if (month === 0 && days !== 0) {
        return days + " " + "روز"
    } else if (month === 0 && days === 0 && hours !== 0) {
        return hours + " " + "ساعت"
    } else if (month === 0 && days === 0 && hours === 0 && minutes !== 0) {
        return minutes + " " + "دقیقه"
    } else {
        return seconds + " " + "ثانیه"
    }
}

function copyToClipboard(copyMe: any) {
    // @ts-ignore
    navigator?.clipboard.writeText(copyMe);
}

const findKey = (key, data: any) => {
    const res = data.find(d => d.key === key)?.data
    if (res === '')
        return []
    else
        return res
}
const priceDiscount = (product) => {
    const discount = product.ProductPrice.PriceWithDiscountValue
    const price = product.ProductPrice.PriceValue
    const oldPrice = product.ProductPrice.OldPriceValue
    const discountRes = (discount && price) ? (price - discount) / price : (oldPrice && price) ? (oldPrice - price) / oldPrice : null;
    return Math.round(discountRes * 100)
}

function colorIsDarkSimple(bgColor) {
    const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB
    return ((r * 0.299) + (g * 0.587) + (b * 0.114)) <= 186;
}


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

function getErrorFromServer(error: any, name: any) {
    const valueRes: any = []
    Object.entries(error).forEach(([key, value]) => {
        if (key === name)
            valueRes.push(value)
    })
    return valueRes
}

const useDebouncedEffect = (
    onChange,
    delay,
    value
) => {
    useEffect(() => {
        const handler = setTimeout(() => onChange(), delay);
        return () => clearTimeout(handler);
    }, [value]);
};


function round(n, v) {
    return v.toFixed(n).replace(/0+$/, '0').replace(/\.0+$/, '');
}

const averReview = (product) => {
    const sum = product.ProductReviewOverview?.RatingSum
    const total = product.ProductReviewOverview?.TotalReviews
    return isNaN(+sum / +total) ? 0 : round(1, +sum / +total);
}


const computeRate = (cot, comments) => {
    const count = comments?.reduce((acc, cur) => {
        if (cot === cur.Rating)
            return acc + 1;
        else
            return acc
    }, 0)
    return count * 100;
}

export {
    formatter,
    findKey,
    diffDays,
    averReview,
    computeRate
    ,
    copyToClipboard,
    priceDiscount,
    scrolltoHash,
    useDebouncedEffect,
    toEnglishDigits,
    getErrorFromServer,
    colorIsDarkSimple
}