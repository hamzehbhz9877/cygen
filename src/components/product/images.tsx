import React from 'react';
import Image from "next/image";


type Props = {
    data: {
        ImageUrl: string,
        FullSizeImageUrl: string,
            Title: string,
            AlternateText: string
        }[]
    }
    const Images = ({data}: Props) => {
        return (
            <div
                className={`thumb-pro ${data[1]?'hover-image':""}  duration-500  group-hover:-mt-[22px] group-hover:-rotate-1`}>
                <Image fetchPriority="high" width="300" height="300"
                       src={data[0].ImageUrl}
                       title={data[0].Title}
                       className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                       alt={data[0].AlternateText} decoding="async"
                />
            {data[1]?
            <Image width="300" height="300"
                   src={data[1].ImageUrl}
                   title={data[1].Title}
                   alt={data[1].AlternateText} decoding="async"
                   className=" second-img wp-post-image"
            />:""}
        </div>
    );
};

export default Images;




