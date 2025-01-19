'use client'

import React from 'react';
import Pagination from "@/components/pagination";
import {MakePagination} from "@/hooks/usePagination/makePagination";
import useQueryParams from "@/hooks/useQueryParams";

import Breadcrumb from "@/components/breadcrumb";
import NewsData from "@/app/_components/news/news";
import Banner from "@/components/banner";

const News = ({data}: any) => {
    const makePagination = MakePagination(data.PagingFilteringContext.PageNumber,
        data.PagingFilteringContext.TotalPages, () => {
        });
    const {addQueryParam} = useQueryParams()

    return (
        <div className="data ">
            <Breadcrumb data={[{
                Name:'اخبار',
                SeName: ''
            }]} show={true}/>
            <Banner PositionSystemNames={'news_list_top'}  EntityName={'Public'}/>
            <div className={"container"}>
                <NewsData data={data.NewsItems} title={'آخرین اخبار'}/>
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
        </div>
    )
        ;
};

export default News;