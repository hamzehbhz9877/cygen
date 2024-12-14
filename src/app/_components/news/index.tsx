'use client'

import React from 'react';
import Pagination from "@/components/pagination";
import {useParams, useSearchParams} from "next/navigation";
import {MakePagination} from "@/hooks/usePagination/makePagination";
import useQueryParams from "@/hooks/useQueryParams";
import Image from "next/image";
import parse from "html-react-parser";
import {RiTimerLine} from "react-icons/ri";
import {LiaArrowLeftSolid} from "react-icons/lia";

import "./index.scss"
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";
import {TbReport} from "react-icons/tb";
import {diffDays} from "@/helpers/client";
import {ImNewspaper} from "react-icons/im";

const News = ({data}: any) => {
    const makePagination = MakePagination(data.PagingFilteringContext.PageNumber,
        data.PagingFilteringContext.TotalPages, () => {
        });
    const {addQueryParam} = useQueryParams()

    return (
        <div className="data container">
            <Breadcrumb data={[{
                Name:'اخبار',
                SeName: ''
            }]} show={true}/>
            <div className="elementor-widget-container my-[30px]">

                <div className="mcarousel_product_head flex justify-start pb-[18px]">

                    <h4 className="flex items-center">

                        <ImNewspaper   className="ml-[5px]" size={26} /> آخرین مطالب </h4>

                </div>

                <div className="prk-main-post-item style1 style-grid">
                    {data.NewsItems.map(news => {
                        return (
                            <div className="prk-post-item" key={news.Id}>
                                <div className="post-item-image relative">
                                    <Image decoding="async" width="300" height="191"
                                           src={news.PictureModel.ImageUrl}
                                           alt={news.AlternateText}
                                           title={news.Title}
                                           className="attachment-post-thumbnail size-post-thumbnail wp-post-image"/>
                                </div>
                                <h2 className="post-item-title">
                                    <Link href={'/news/'+news.SeName}>{news.Title}</Link>
                                </h2>

                                <div className="flex justify-between items-center post-item-footer">

                                    <span className="reading-time"><RiTimerLine size={15} color={'#9d9d9d'}/>{diffDays(news.CreatedOn)}  روز پیش منتشر شده</span>


                                    <Link href={'/news/'+news.SeName} className="view-more"><LiaArrowLeftSolid size={18} color={"white"}/></Link>

                                </div>


                            </div>)
                    })}

                </div>

            </div>


            <div className={"mt-[12px]"}>
                <Pagination pages={makePagination} prevPage={() => {
                    addQueryParam("PageNumber", data.PagingFilteringContext.PageNumber - 1)
                }} nextPage={() => {
                    addQueryParam("PageNumber", data.PagingFilteringContext.PageNumber + 1)
                }}
                            currentPage={data.PagingFilteringContext.PageNumber}
                            goTo={(page) => {
                                addQueryParam("PageNumber", page)
                            }}
                            total={data.PagingFilteringContext.TotalPages}/>

            </div>
        </div>
    )
        ;
};

export default News;