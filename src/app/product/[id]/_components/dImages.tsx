'use client'

import {productStore} from "@/state/product/product";
import Image from "next/image";
import {useEffect} from "react";
import ImageZoom from "@/components/zoom";

const DImages = ({product}: any) => {
    const {image}=productStore()

    // <Image
    // width="600" height="600"
    // alt={product.PictureModels.find(d => +d.Id === +image)?.AlternateText}
    // title={product.PictureModels.find(d => +d.Id === +image)?.Title}
    // src={product.PictureModels.find(d => +d.Id === +image)?.FullSizeImageUrl}/> :
    // <Image
    //     width="600" height="600"
    //     alt={product.DefaultPictureModel.AlternateText}
    //     title={product.DefaultPictureModel.Title}
    //     src={product.DefaultPictureModel.FullSizeImageUrl}/>
    return (
        <div>
            <figure className="woocommerce-product-gallery__wrapper prk_woocommerce-product-gallery__wrapper">

                <div className="main-image">
                    {image !== null ?
                        <ImageZoom src={product.PictureModels.find(d => +d.Id === +image)?.FullSizeImageUrl}/> :
                        <ImageZoom src={product.DefaultPictureModel.FullSizeImageUrl}/>
                    }
                </div>
            </figure>
        </div>

    );
}

export default DImages;