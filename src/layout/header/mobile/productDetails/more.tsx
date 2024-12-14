import React from 'react';
import Link from "next/link";
import {PiPlayLight, PiShare} from "react-icons/pi";
import Share from "@/app/product/[name]/_components/slider/modal/share";
import useModal from "@/context/modal/useModal";
import FilesModal from "@/app/product/[name]/_components/slider/filesModal";

const More = ({product,close}) => {

    const {closeModal,openModal}=useModal()

    return (
        <div className="more">
            <ul>
                <li>
                    <a rel="nofollow" onClick={() => {
                        close()
                        openModal(<Share close={closeModal}/>, {className: "!w-max "})
                    }}
                          >
                        <PiShare size={22} className="me-[15px]" color={"#4b4f58"} />
                        <span>به اشتراگ گذاری</span>
                    </a>
                </li>
                {
                    product.VideoModels.length > 0 ?

                <li>
                    <a rel="nofollow" onClick={() => {
                        close()
                        openModal(<FilesModal data={product}  type={"video"} index={product.PictureModels.length} close={closeModal}/>,
                            {className:"!w-full !rounded-none !h-auto !m-0"})
                    }}
                          >
                        <PiPlayLight size={22} className="me-[15px]" color={"#4b4f58"} />
                        <span>ویدیو محصول</span>
                    </a>
                </li>:""}
            </ul>

        </div>
    );
};

export default More;