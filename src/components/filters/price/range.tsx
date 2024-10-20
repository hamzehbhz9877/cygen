'use client'

import React, {useEffect, useRef, useState} from 'react';

import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";


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

    const calcRangeLeft=()=>{
        function setLeftValue() {
            const _this:any = inputLeft.current,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.current.value) - 1);

            const percent = ((_this.value - min) / (max - min)) * 100;

            thumbLeft.current.style.left = percent + "%";
            range.current.style.left = percent + "%";
        }
        setLeftValue()
    }

    const calRangeRight=()=>{
        function setRightValue() {
            const _this:any = inputRight.current,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.current.value) + 1);

            const percent = ((_this.value - min) / (max - min)) * 100;

            thumbRight.current.style.right = (100 - percent) + "%";
            range.current.style.right = (100 - percent) + "%";
        }
        setRightValue();
    }

    useEffect(() => {
        calcRangeLeft()
        calRangeRight()
    }, [from,to]);

    return (
        <div className="sliderRange">
            <div className="middle">
                <div className="multi-range-slider">
                    <input ref={inputLeft} type="range" id="input-left" onChange={(e) => {
                        calcRangeLeft()
                        setFrom(+e.target.value)
                    }}
                           step={step} min={min} max={max} value={from}/>
                    <input ref={inputRight} type="range" id="input-right"  onChange={(e) => {
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