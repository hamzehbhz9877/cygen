import React, {useEffect} from 'react';
import {ModalBody, ModalHeader} from "@/components/modal";
import {IoCloseOutline} from "react-icons/io5";
import {productStore} from "@/state/product/product";
import Image from "next/image";
import {useRouter} from "next/navigation";

const AddedToCart = ({close, product}: any) => {
    const {image} = productStore(d => d)

    const router=useRouter()

    useEffect(() => {
        setTimeout(close, 3000)
    }, [])

    return (
        <div className="add-to-cart p-3">
            <ModalHeader>
                <div className={"flex justify-between items-center "}>
                    <span className="text-[#2e7b32]">این کالا به سبد خرید اضافه شد!</span>
                    <IoCloseOutline size={24} onClick={close} className={"cursor-pointer"}/>
                </div>
            </ModalHeader>
            <hr className={"border-[#E6E6E6] my-[16px] w-full"}/>
            <ModalBody>
                <div className={"flex gap-[10px]"}>
                    <Image width={200} height={200} className={"w-[100px] h-[100px]"}
                           alt={product.PictureModels.find(d => +d.Id === +image)?.AlternateText}
                           title={product.PictureModels.find(d => +d.Id === +image)?.Title}
                           src={product.PictureModels.find(d => +d.Id === +image)?.FullSizeImageUrl}/>
                    <h3 className={"text-[14px]"}>{product.Name}</h3>
                </div>
                <button className={"text-[14px] w-full text-white text-center mt-[20px] bg-dynamic-color-from py-[12px] rounded-[8px]"} onClick={()=>router.push("/cart")}>
                    برو به سبد خرید
                </button>
            </ModalBody>
        </div>
    );
};

export default AddedToCart;