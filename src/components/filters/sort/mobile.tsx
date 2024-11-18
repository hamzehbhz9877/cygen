import React from 'react';


import "./index.scss"
import Link from "next/link";
import useQueryParams from "@/hooks/useQueryParams";

const MobileSort = ({data}:any) => {

    const {addQueryParam}=useQueryParams()

    return (
            <div className="prK_orderby_mobile sort__mobile">
                <ul className="prk-order-products">
                    {
                        data?.map((sort: any, index: number) => {
                            return <li key={index} onClick={() => {
                                addQueryParam('order', sort.Value)
                                document.querySelector('.sort__mobile').classList.remove("open")
                            }}
                                       className={`order-item order-menu-order ${sort.Selected ? "is-active" : ""}`}>
                                <Link rel="nofollow"
                                      href="/">
                                    {sort.Text} </Link>
                            </li>
                        })
                    }
                </ul>

            </div>
    );
};

export default MobileSort;