import React from 'react';
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetAllActivePluginsQuery} from "@/services/Plugin";
import Link from "next/link";
import Image from "next/image";
import {GetSocialMediasQuery} from "@/services/SocialMedia";

const SocialMedia = () => {
    const {data:widget}=useSuspenseQuery(GetAllActivePluginsQuery)
    const {data} = useSuspenseQuery(GetSocialMediasQuery)

    if (widget.includes('Widgets.SocialMedia'))
    return (
        <>
            <span className="foot-title">رسانه های خبری ما</span>
            <div className="social-foot">
         <span className="icon-social">
             {
                 data.map((link) => {
                     return <Link href={link.Url} key={link.Id}
                                  className={"cursor-pointer"}
                                  target="_blank" rel="nofollow">
                         <Image src={link.Picture.ImageUrl} alt={link.Picture.AlternateText} width={30} height={30}/>
                     </Link>
                 })
             }
         </span>
            </div>
        </>
    );
    else return null
};

export default SocialMedia;