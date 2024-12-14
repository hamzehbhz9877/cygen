'use client'

import React from 'react';
import DImages from "@/app/product/[name]/_components/dImages";
import Image from "next/image";
import {GoVideo} from "react-icons/go";
import useModal from "@/context/modal/useModal";
import FilesModal from "@/app/product/[name]/_components/slider/filesModal";

const Files = ({product}:any) => {
    const {openModal,closeModal}=useModal()
    return (
        <div className={"slider__images"}>

            <DImages product={product}/>
            <ul className="main_gallery_product">
                {
                    product.VideoModels?.length > 0 ?
                        <li data-remodal-target="modalvidoe" className="show_modal_gallery video"
                            onClick={() => openModal(<FilesModal data={product}  type={"video"} index={product.VideoModels.length-1}
                                                                 close={closeModal}/>,
                                {className:"!min-h-max !h-[700px] !w-[900px] "})}
                        >
                            <Image loading="lazy" width="150" height="150"
                                   className="attachment-thumbnail size-thumbnail"
                                   alt={product.DefaultPictureModel.AlternateText}
                                   title={product.DefaultPictureModel.Title}
                                   src={product.DefaultPictureModel.FullSizeImageUrl}
                            />
                            <GoVideo
                                className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-1/2 z-[9999]"
                                color={"white"}/>
                        </li>
                : ""}

                {
                    product.PictureModels?.map((pic, index) => {
                        if (index <= 3)
                            return (
                                <li key={pic.Id} onClick={() => openModal(<FilesModal data={product}  type={"image"} index={index} close={closeModal}/>,{className:"!min-h-max !h-[700px] !w-[900px] "})}>
                                    <Image loading="lazy" width="150" height="150"
                                           className="attachment-thumbnail size-thumbnail"
                                           alt={pic.AlternateText}
                                           title={pic.Title}
                                           src={pic.FullSizeImageUrl}
                                    /></li>
                            )
                    })
                }
                {/*{product.PictureModels?.length > 4 ?*/}
                    <li className="show_modal_gallery" onClick={() => openModal(<FilesModal data={product} type={"image"} index={0} close={closeModal}/>,{className:"!min-h-max !h-[700px] !w-[900px] "})}>
                        <Image loading="lazy" width="150" height="150"
                               className="attachment-thumbnail size-thumbnail"
                               alt={product.DefaultPictureModel.AlternateText}
                               title={product.DefaultPictureModel.Title}
                               src={product.DefaultPictureModel.FullSizeImageUrl}
                        /></li>
                {/*: ""}*/}
            </ul>
        </div>
    );
};

export default Files;