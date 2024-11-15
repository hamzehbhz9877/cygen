'use client'

import React, {useEffect, useRef, useState} from 'react';

import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import RangeLogic from "@/components/filters/price/rangeLogic";


type sliderRangeType = {
    min: number
    max: number
    step: number
    setFrom: (data: number) => void
    setTo: (data: number) => void
    from: number
    to: number
}

const SliderRange = ({
                         step,
                         max,
                         min,
                         to, from, setFrom, setTo,
                     }:sliderRangeType) => {



    const inputLeft=useRef<HTMLInputElement|null>(null)
    const inputRight=useRef<HTMLInputElement|null>(null)
    const thumbRight=useRef<HTMLDivElement|null>(null)
    const thumbLeft=useRef<HTMLDivElement|null>(null)
    const range=useRef<HTMLDivElement|null>(null)

   const {calRangeRight,calcRangeLeft}=RangeLogic(inputLeft,thumbLeft,range,inputRight,thumbRight)

    useEffect(() => {
        calcRangeLeft()
        calRangeRight()
    }, [from,to]);

    return (
        <div className="sliderRange">
            <div className="middle">
                <div className="multi-range-slider">
                    <input ref={inputLeft} type="range" id="input-left" onChange={(e) => {
                        console.log("1")
                        calcRangeLeft()
                        setFrom(+e.target.value)
                    }}
                           step={step} min={min} max={max} value={from}/>
                    <input ref={inputRight} type="range" id="input-right"  onChange={(e) => {
                        console.log("2")
                        calRangeRight()
                        setTo(+e.target.value)
                    }}
                           step={step} min={min} max={max} value={to}/>

                    <div className="slider">
                        <div className="track"></div>
                        <div ref={range} className="range" style={{left:"0",right:"0"}}></div>
                        <div ref={thumbLeft} className="thumb left" style={{left:"0"}}>
                            <FaAngleLeft color={"#1051ef"}/>
                        </div>
                        <div ref={thumbRight} className="thumb right" style={{right:"0"}}>
                            <FaAngleRight color={"#1051ef"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderRange;