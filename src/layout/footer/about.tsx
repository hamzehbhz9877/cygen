import React from 'react';
import Enamad from "@/layout/footer/enamad";

const About = () => {
    return (
        <div className="foot-core">


            <div className="foot-box text boxed">

                <span className="foot-title">فروشگاه اینترنتی پارس کالا، بررسی، انتخاب و خرید آنلاین</span>

                <p>پارس کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با
                    پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده
                    تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به
                    محض ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و
                    به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.</p>
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