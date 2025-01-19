'use client'

import React from 'react';
import Pagination from "@/components/pagination";
import {MakePagination} from "@/hooks/usePagination/makePagination";
import useQueryParams from "@/hooks/useQueryParams";
import Breadcrumb from "@/components/breadcrumb";
import BlogsData from "@/app/_components/blogs/blogs";
import Banner from "@/components/banner";

const Blogs = ({blogs}: any) => {
    const makePagination = MakePagination(blogs.PagingFilteringContext.PageNumber,
        blogs.PagingFilteringContext.TotalPages, () => {
        });
    const {addQueryParam} = useQueryParams()


    return (
        <div className="blogs">
            <Breadcrumb data={[{
                Name: 'مقاله ها',
                SeName: ''
            }]} show={true}/>

            <Banner PositionSystemNames={'blog_list_top'} EntityName={'Public'}/>
            <div className={"container"}>

                <BlogsData data={blogs.BlogPosts} title={' آخرین مطالب'}/>


                <div className={"mt-[12px]"}>
                    <Pagination pages={makePagination} prevPage={() => {
                        addQueryParam("PageNumber", blogs.PagingFilteringContext.PageNumber - 1)
                    }} nextPage={() => {
                        addQueryParam("PageNumber", blogs.PagingFilteringContext.PageNumber + 1)
                    }}
                                currentPage={blogs.PagingFilteringContext.PageNumber}
                                goTo={(page) => {
                                    addQueryParam("PageNumber", page)
                                }}
                                total={blogs.PagingFilteringContext.TotalPages}/>

                </div>
            </div>
        </div>
    )
        ;
};

export default Blogs;