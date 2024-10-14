import React from 'react';
import Link from "next/link";


// css
import "./index.scss"
const data=[
    {
        text:"خانه",
        link:"/"
    },
    {
        text:"کالای دیجیتال",
        link:""
    }
]
const BreadCrumb = () => {
    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            {
                data.map(link=> {
                    return link.link===""?"":<>
                        <Link href={link.link}>{link.text}</Link>
                        <i> / </i>
                    </>
                })
            }
            {data[data.length-1].text}
        </nav>
    );
};

export default BreadCrumb;