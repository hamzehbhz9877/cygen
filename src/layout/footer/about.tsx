'use client'

import React, {useState} from 'react';
import Enamad from "@/layout/footer/enamad";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";


const About = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleShowMore = () => setIsOpen(!isOpen)

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

                {["https://pars.parskalas.com/wp-content/uploads/2022/10/1e5dab5a.png"].map((link, index: number) => {
                    return <Enamad key={index} link={link}/>
                })}
            </div>
        </div>
    );
};

export default About;