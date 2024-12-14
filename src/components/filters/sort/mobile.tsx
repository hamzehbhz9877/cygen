import React from 'react';


import "./index.scss"
import Link from "next/link";
import useQueryParams from "@/hooks/useQueryParams";
import useOverlay from "@/context/overlay/useOverlay";

const MobileSort = ({data}:any) => {

    const {addQueryParam}=useQueryParams()
    const {toggleOverlay,classname}=useOverlay()

    return (
            <div className="prK_orderby_mobile sort__mobile">
                <ul className="prk-order-products">
                    {
                        data?.map((sort: any, index: number) => {
                            return <li key={index}
                                       className={`order-item order-menu-order ${sort.Selected ? "is-active" : ""}`}>
                                <a rel="nofollow" onClick={(e) => {
                                    e.stopPropagation()
                                    toggleOverlay(false)
                                    addQueryParam('order', sort.Value)
                                    document.querySelector('.prK_orderby_mobile').classList.remove("open")
                                }}>
                                    {sort.Text} </a>
                            </li>
                        })
                    }
                </ul>

            </div>
    );
};

export default MobileSort;