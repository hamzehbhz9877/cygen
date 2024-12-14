import React from 'react';
import Logo from "@/layout/header/top/logo";
import Image from "next/image";

const LogoLoader = () => {
    return (
        <div className="loading-spinner w-full h-full fixed top-0 left-0 bg-[rgb(0,0,0,.5)] z-[9999]">
            <div className="flex justify-center items-center h-full">
                <div className={"loading-content"}>
                    <Logo/>
                    <div className="w-full h-3 xl:h-5"></div>
                    <Image fetchPriority="auto" loading="lazy" className="max-w-[60px]"
                           src="https://www.technolife.ir/image/static_loadingCircles.gif" alt="loadingGif"
                           width="54" height="30"/>
                </div>
            </div>
        </div>
    );
};

export default LogoLoader;