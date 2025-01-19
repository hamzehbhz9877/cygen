'use client'

import React, {useEffect, useState} from 'react';

import "./index.scss"
import Image from "next/image";
import Breadcrumb from "@/components/breadcrumb";
import {MdOutlineQuestionMark} from "react-icons/md";
import {IoIosCloseCircle} from "react-icons/io";

const Brands = ({data}: any) => {

    const [brands, setBrands] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);
    const [value, setValue] = useState("")

    useEffect(() => {
        setBrands(data)
        setDataFilter(data)
    }, [data]);

    console.log(brands)
    return (
        <div className="brands-page ">

            <div className="ask-search">
                {/*<Breadcrumb data={[{*/}
                {/*    Name: 'برند ها',*/}
                {/*    SeName: ''*/}
                {/*}]} show={true}/>*/}
                <div className="text-center brands-search">
                    <p className="page_subtitle">برند موردنظرتان را جستجو کنید</p>
                    <form className="form_search_faqpage">
                        <div className="relative w-full">
                            <input id="text_search" className="input_field" type="text" name="q"
                                   value={value} onChange={e => {
                                setValue(e.target.value)
                                setDataFilter(brands.filter(d => d.Picture.Title.indexOf(e.target.value.toLowerCase()) !== -1))
                            }} autoComplete="off"
                                   placeholder="جستجوی برند"/>
                            {value ?
                                <IoIosCloseCircle size={24} className={"absolute top-2/4 -translate-y-2/4 left-[15px]"}
                                                  role={"button"}
                                                  onClick={() => {
                                                      setValue("")
                                                      setDataFilter(data)
                                                  }}/> : ""}
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-[30px] container">
                <h3 className={"mb-3"}>برند ها</h3>
                {dataFilter.length > 0 ? <ul>
                    {dataFilter.map((brand: any) => (
                        <li key={brand.Id}>
                            <Image src={brand.Picture.ImageUrl} title={brand.Picture.Title}
                                   alt={brand.Picture.AlternateText}
                                   priority width={100} height={100}
                                   className={"w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mx-auto"}/>
                            <span className="inline-block mt-3">{brand.Name}</span>
                        </li>
                    ))}
                </ul> : <p className="text-center my-3">برند مورد نظر یافت نشد</p>}
            </div>
        </div>
    );
};

export default Brands;