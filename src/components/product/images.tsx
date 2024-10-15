import React from 'react';
import Image from "next/image";

const Images = () => {
    return (
        <div
            className="thumb-pro hover-image  duration-500  group-hover:-mt-[22px] group-hover:-rotate-1">
            <Image fetchPriority="high" width="300" height="300"
                   src="https://pars.parskalas.com/wp-content/uploads/2022/11/iphone-12-white-select-2020-866x1024-1-300x300.png"
                   className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                   alt="" decoding="async"
            />
            <Image width="300" height="300"
                   src="https://pars.parskalas.com/wp-content/uploads/2022/07/73409683bedd334608bd3aff7c048fcddc3094ed_1653804755-300x300.jpg"
                   alt="آیفون 13 پرو مکس 512 گیگابایت دو سیمکارت (ZAA) Active"
                   className=" second-img wp-post-image"/>
        </div>
    );
};

export default Images;