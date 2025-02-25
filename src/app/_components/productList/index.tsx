import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {RiPaletteLine} from "react-icons/ri";

const ProductList = ({data}) => {
    return (
        <div className="product-list overflow-x-auto">
            <div className={"flex items-center gap-[16px]"}>
                {data?.map(({
                                           ProductName,
                                           ProductSeName, Picture, Quantity

                                       }, i) => (
                    <div key={i} className={"product-item pb-2"}>
                        <Image src={Picture.ImageUrl} alt={Picture.AlternateText} title={Picture.Title} width={92}
                               height={92}
                               className={"w-[92px] h-[92px] mx-auto"}/>
                        <Link className={"truncate line-clamp-2"} href={"/product/" + ProductSeName}>
                            <h3>{ProductName}</h3>
                        </Link>
                        <div className={"flex gap-[8px] items-center mt-[9px] justify-center"}>
                            <RiPaletteLine size={16}/>
                            <div className="flex items-center gap-[4px]">
                                <span className={"text-[#5E5E5E] text-[12px]"}>خاکستری</span>
                                <div className={"color rounded-full w-[16px] h-[16px] bg-[#CBCBCB]"}></div>
                            </div>
                        </div>
                        <div className={"text-[12px] text-[#6E6E6E] mt-[8px]"}>
                            <span>تعداد: {Quantity}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;