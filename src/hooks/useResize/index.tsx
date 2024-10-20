'use client'

import {useEffect, useState} from "react";

const UseResize = () => {
    const [windowWidth, setWindowWidth] = useState(1280);


    const resizeWindow = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);


    return {windowWidth}
};

export default UseResize;