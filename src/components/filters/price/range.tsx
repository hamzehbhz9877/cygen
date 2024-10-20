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

    const calcRangeLeft=()=>{
        const inputLeft:any = document.getElementById("input-left");
        const inputRight:any = document.getElementById("input-right");

        const thumbLeft:any = document.querySelector(".slider > .thumb.left");
        const range:any = document.querySelector(".slider > .range");

        function setLeftValue() {
            const _this:any = inputLeft,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

            const percent = ((_this.value - min) / (max - min)) * 100;

            thumbLeft.style.left = percent + "%";
            range.style.left = percent + "%";
        }
        setLeftValue()
    }

    const calRangeRight=()=>{
        const inputLeft:any = document.getElementById("input-left");
        const inputRight = document.getElementById("input-right");

        const thumbRight:any = document.querySelector(".slider > .thumb.right");
        const range:any = document.querySelector(".slider > .range");
        function setRightValue() {
            const _this:any = inputRight,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

            const percent = ((_this.value - min) / (max - min)) * 100;

            thumbRight.style.right = (100 - percent) + "%";
            range.style.right = (100 - percent) + "%";
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
                    <input  type="range" id="input-left" onChange={(e) => {
                        calcRangeLeft()
                        setFrom(+e.target.value)
                    }}
                           step={step} min={min} max={max} value={from}/>
                    <input type="range" id="input-right"  onChange={(e) => {
                        calRangeRight()
                        setTo(+e.target.value)
                    }}
                           step={step} min={min} max={max} value={to}/>

                    <div className="slider">
                        <div className="track"></div>
                        <div className="range" style={{left:"0",right:"0"}}></div>
                        <div className="thumb left" style={{left:"0"}}>
                            <FaAngleLeft color={"#1051ef"}/>
                        </div>
                        <div className="thumb right" style={{right:"0"}}>
                            <FaAngleRight color={"#1051ef"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderRange;