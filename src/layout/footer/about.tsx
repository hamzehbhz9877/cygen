'use client'

import React, {useState} from 'react';
import Enamad from "@/layout/footer/enamad";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import UseMoreContent from "@/hooks/useMoreContent";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetLicenseLogosQuery} from "@/services/LicenseLogo";
import Image from "next/image";


const About = () => {


    const {data}=useSuspenseQuery(GetLicenseLogosQuery)

    const {isOpen,handleShowMore}=UseMoreContent()


    return (
        <div className="foot-core">

            <div className="foot-box text boxed">

                <span className="foot-title">فروشگاه اینترنتی پارس کالا، بررسی، انتخاب و خرید آنلاین</span>

                <p className={`${isOpen ? "open" : ""}`}>پارس کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با
                    پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده
                    تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به
                    محض ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و
                    به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.</p>
                <Link href="#" className="mask-handler" scroll={false}>
                    <span className={`show-more ${isOpen?'hidden':"flex"}`} onClick={handleShowMore}>
                        نمایش بیشتر
                        <FaAngleLeft size={11} color={"#4b4b4b"} className="mr-[2px] relative top-[-1px]"/>
                    </span>
                    <span className={`show-less ${isOpen?'block':"hidden"}`} onClick={handleShowMore}>- بستن</span>
                </Link>
            </div>


            <div className="foot-box enmads">

                {data.map((link, index: number) => {
                    return <Image src={link.Picture.ImageUrl} key={index} alt={link.Picture.AlternateText} className={"cursor-pointer"}
                                  title={link.Picture.Title} width={60} height={60}/>
                })}
            </div>
        </div>
    );
};

export default About;