'use client'

import React, {useEffect, useRef} from 'react';

// css
import "./index.scss"

type Props = {
    title: React.ReactNode
    content: React.ReactNode
    isOpen?: boolean
    withAnimation?:boolean
}

const Collapse = ({title, content, withAnimation=true,isOpen = false}: Props) => {

    const contentRef = useRef<any>(null)
    const collapseRef = useRef<any>(null)

    const handleCollapseContent = () => {
        const icon=collapseRef.current.querySelector('.collapse__title svg')
        if (contentRef.current.classList.contains("collapse__content--show")) {
            contentRef.current.style.maxHeight =contentRef.current.scrollHeight + "px";
            setTimeout(()=>{
                contentRef.current.style.maxHeight = 0 + "px";
            },1)

            icon.classList.remove("rotate")
            contentRef.current.classList.remove("collapse__content--show")
        } else {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
            setTimeout(()=>{
                contentRef.current.style.maxHeight ='max-content';
            },200)
            icon.classList.add("rotate")
            contentRef.current.classList.add("collapse__content--show")
        }
    }


    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
            setTimeout(()=>{
                contentRef.current.style.maxHeight ='max-content';
            },200)
            const icon=collapseRef.current.querySelector('.collapse__title svg')
            icon.classList.add("rotate")
        }
    }, [isOpen]);

    return (
        <div className="collapse-wrapper" ref={collapseRef}>
            <div className="collapse__title" onClick={handleCollapseContent}>
                {title}
            </div>
            <div className={`collapse__content ${withAnimation?"":"no-animate"} ${isOpen ? "collapse__content--show" : ""}`} ref={contentRef}
                 style={{maxHeight: "0"}}>
                {content}
            </div>
        </div>
    );
};

export default Collapse;