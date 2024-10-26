import React from 'react';
import Link from "next/link";


// css
import "./index.scss"


type BreadCrumbType = {
    data: any
    show: boolean
}

const BreadCrumb = ({show, data}: BreadCrumbType) => {
    if (show)
        return (
            <nav className="breadcrumb" aria-label="Breadcrumb">
                {
                    data.map((link: any, index: number) => {
                        return data.length - 1 === index ? "" : <>
                            <Link key={index} href={link.SeName}>{link.Name}</Link>
                            <i> / </i>
                        </>
                    })
                }
                {data[data.length - 1].Name}
            </nav>
        );
    else return null
};

export default BreadCrumb;