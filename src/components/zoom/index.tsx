import React, {useEffect, useRef, useState} from "react";
import "./index.scss";
import useResize from "@/hooks/useResize";
import Image from "next/image";

const ImageZoom = ({ src,alt,title }) => {
    const imgRef = useRef(null);
    const lensRef = useRef(null);


    const {windowWidth}=useResize()
    useEffect(() => {
        const img = imgRef.current;
        const lens = lensRef.current;
        const result:any = document.querySelector(".img-zoom-result");


        const cx = result.offsetWidth / lens.offsetWidth ;
        const cy = result.offsetHeight / lens.offsetHeight;

        result.style.backgroundImage = `url('${img.src}')`;
        result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

        const moveLens = (e) => {
            e.preventDefault();

            const pos = getCursorPos(e);
            let x = pos.x - lens.offsetWidth / 2;
            let y = pos.y - lens.offsetHeight / 2;

            if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
            if (x < 0) x = 0;
            if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
            if (y < 0) y = 0;

            lens.style.left = `${x}px`;
            lens.style.top = `${y}px`;
            result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
        };

        const getCursorPos = (e) => {
            const rect = img.getBoundingClientRect();
            const x = e.pageX - rect.left - window.pageXOffset;
            const y = e.pageY - rect.top - window.pageYOffset;
            return { x, y };
        };

        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);

        return () => {
            lens.removeEventListener("mousemove", moveLens);
            img.removeEventListener("mousemove", moveLens);
            lens.removeEventListener("touchmove", moveLens);
            img.removeEventListener("touchmove", moveLens);
        };
    }, [src,windowWidth]);

    const handleMouseEnter = () => {
        lensRef.current.style.visibility = "visible";
        const element:any=document.querySelector(".img-zoom-result")
        element.style.visibility = "visible";
    };

    const handleMouseLeave = () => {
        lensRef.current.style.visibility = "hidden";
        const element:any=document.querySelector(".img-zoom-result")
        element.style.visibility = "hidden";
    };

    return (
        <div
            className="img-zoom-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
                <div ref={lensRef} className="img-zoom-lens"></div>
            <Image alt={alt} title={title} id="myimage" ref={imgRef} src={src}  width="500" height="500" />
        </div>
    );
};

export default ImageZoom;
