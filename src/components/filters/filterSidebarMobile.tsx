import React, {useRef} from 'react';

import { RiCloseFill } from "react-icons/ri";

import "./index.scss"

type Props={
    title:string
    children:React.ReactNode
}

const FilterSidebarMobile = ({title,children}:Props) => {

    const ref=useRef<HTMLDivElement|null>(null)

    const handleCloseModal=()=> {
        document.querySelector("body").style.overflow="auto"
        ref.current?.classList.remove("open")
    }

    return (
        <div ref={ref} id="filter-sidebar-mobile" className="remodals tabs_content_product mob_tab_filter_sidebar remodal-full content_filter">
            <div className="remodal-header">
                <div className="title">{title}</div>
                <button className="remodal-back-tabs filter_sides_close" onClick={handleCloseModal}>
                    <RiCloseFill size={33} color={"#000000bf"}/>
                </button>
            </div>
            <div id="sides" className="sides">
                {children}
            </div>
        </div>
    );
};

export default FilterSidebarMobile;