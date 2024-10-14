import React from 'react';
import {headerCategory} from "@/api/megamenu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

type Props = {
    categoryId: number
}
const CategoryContent = ({categoryId}: Props) => {
    return (
        <div className="category-dropdown__content">
            <ul className=" level-1">
                {headerCategory.find((ele) => ele.id === categoryId)?.subCategory?.map((data,index) => {
                    return (
                        <li className="category-dropdown__content-item" key={index}>
                            <Link href="#" className="category-dropdown__content-title inline-block">
                                <span>{data.title}</span>
                            </Link>
                            <ul>
                                {data?.subCategory?.map((e,index) => {
                                    return (
                                        <li key={index} className="category-dropdown__content-sub-item level-2">
                                            <Link href="#">
                                                <span>{e.tab}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default CategoryContent;