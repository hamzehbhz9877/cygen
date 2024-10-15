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
        var inputLeft = document.getElementById("input-left");
        var inputRight = document.getElementById("input-right");

        var thumbLeft = document.querySelector(".slider > .thumb.left");
        var range = document.querySelector(".slider > .range");

        function setLeftValue() {
            var _this = inputLeft,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

            var percent = ((_this.value - min) / (max - min)) * 100;

            thumbLeft.style.left = percent + "%";
            range.style.left = percent + "%";
        }
        setLeftValue()
    }

    const calRangeRight=()=>{
        var inputLeft = document.getElementById("input-left");
        var inputRight = document.getElementById("input-right");

        var thumbRight = document.querySelector(".slider > .thumb.right");
        var range = document.querySelector(".slider > .range");
        function setRightValue() {
            var _this = inputRight,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

            var percent = ((_this.value - min) / (max - min)) * 100;

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
                        setFrom(e.target.value)
                    }}
                           step={step} min={min} max={max} value={from}/>
                    <input type="range" id="input-right"  onChange={(e) => {
                        calRangeRight()
                        setTo(e.target.value)
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