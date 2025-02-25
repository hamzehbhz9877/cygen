import React from 'react';
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import {RiTimerLine} from "react-icons/ri";
import {diffDays} from "@/helpers/client";
import {LiaArrowLeftSolid} from "react-icons/lia";
import "./blog.scss"

const Blog = ({
                  PictureModel,
                  AlternateText,
                  Title,
                  SeName,
                  Body,
                  CreatedOn,
              }) => {
    return (
        <div className="prk-post-item" >
            <div className="post-item-image relative">
                <Image decoding="async" width="300" height="191"
                       src={PictureModel.ImageUrl}
                       alt={AlternateText}
                       title={Title}
                       className="attachment-post-thumbnail size-post-thumbnail wp-post-image"/>
            </div>
            <h2 className="post-item-title">
                <Link href={(Body?'/blogs/':'/news/') + SeName}>{Title}</Link>
            </h2>

            {Body?
            <div className="post-item-content">{parse(Body)}</div>:""}

            <div className="flex justify-between items-center post-item-footer">

                                <span className="reading-time"><RiTimerLine size={15}
                                                                            color={'#9d9d9d'}/>{diffDays(CreatedOn)}  پیش منتشر شده</span>


                <Link href={(Body?'/blogs/':'/news/') + SeName} className="view-more"><LiaArrowLeftSolid size={18}
                                                                                              color={"black"}/></Link>

            </div>


        </div>
    );
};

export default Blog;