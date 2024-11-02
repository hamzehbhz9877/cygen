'use client'

import React, {Suspense, useEffect, useRef, useState} from 'react';
import Breadcrumb from "@/components/breadcrumb";
import CategoryList from "@/components/category/list";
import Filters from "@/components/filters";
import Products from "./products";
import CategoryDescription from "@/components/category/seo/description";
import {description} from "@/api/megamenu";
import {keepPreviousData, useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {ProductsListByCategory} from "@/services/Catalog";
import {useInView} from "react-intersection-observer";
import SortProducts from "@/components/filters/sort/sortProducts";
import MobileHeadFilters from "@/components/filters/mobile";
import {useParams} from "next/navigation";
import ProductsSkeleton from "@/components/product/loader/products";
import Pagination from "@/components/pagination";
import {MakePagination} from "@/hooks/usePagination/makePagination";


const Catalog = ({category, searchParams}: { category: catalog, searchParams: any }) => {
    const {ref, inView} = useInView()


    const params = useParams()

    const {
        status,
        data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        isRefetching,
        isFetched,
        ...rest
    } = useInfiniteQuery({
        queryKey: ['category', Object.values(searchParams).join(",")],
        queryFn: ({pageParam}) => ProductsListByCategory({
            pageParam,
            categorySeName: decodeURIComponent(params.code as any), ...searchParams
        }),
        initialData: () => {
            const data: any = category as any
            if (data) {
                return {
                    pageParams: 1,
                    pages: [data]
                } as any
            }
        },
        staleTime: 0,
        placeholderData: keepPreviousData,
        initialPageParam: 1,
        getPreviousPageParam: (firstPage) => {
            return firstPage.CatalogProductsModel.HasNextPage ? firstPage.CatalogProductsModel.PageNumber + 1 : undefined
        },
        getNextPageParam: (lastPage) => {
            return lastPage.CatalogProductsModel.HasPreviousPage ? lastPage.CatalogProductsModel.PageNumber - 1 : undefined
        },
        maxPages: 3,
    })

    const [firstRender,setFirstRender]=useState(false)

    React.useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [fetchNextPage, inView])


    useEffect(() => {
        if (rest.isFetchedAfterMount)
            setFirstRender(true)
    }, [rest.isFetchedAfterMount]);


    const makePagination = MakePagination(1, 30, ()=>{});

    return (
        <>
            {data.pages.map((page, index) => {
                return <div key={index}>
                    {isRefetching && isFetched ?
                        <div className="w-[100%] h-[40px] mb-4 bg-[#f0f0f1] rounded dark:bg-gray-700"></div> :
                        <Breadcrumb data={page.CategoryBreadcrumb} show={page.DisplayCategoryBreadcrumb}/>}
                    <CategoryList data={page.SubCategories}/>
                    <div className="flex">
                        <Filters FeaturedProducts={page.FeaturedProducts}
                                 CatalogProductsModel={page.CatalogProductsModel}/>
                        <div className={"flex flex-col flex-1"}>
                            {page.CatalogProductsModel?.AllowProductSorting ?
                                <SortProducts
                                    isRefetching={isRefetching && firstRender}
                                    data={page.CatalogProductsModel}/> : ""}
                            <MobileHeadFilters isRefetching={isRefetching} data={page.CatalogProductsModel}/>
                            {isFetched === false && isRefetching === true && firstRender?
                                <div className={"flex-1"}>
                                    <ProductsSkeleton/>
                                </div>
                                :
                                <>
                                    <Products isRefetching={isRefetching && firstRender}
                                              Products={page.CatalogProductsModel?.Products}/>
                                    <div ref={ref}>
                                        {isFetchingNextPage
                                            ?
                                            <div className={"flex-1"}>
                                                <ProductsSkeleton/>
                                            </div>
                                            : hasNextPage
                                                ? ''
                                                : ''}
                                    </div>
                                    <div>
                                        <Pagination pages={makePagination} prevPage={()=>{}} nextPage={()=>{}} currentPage={1} goTo={()=>{}} total={30}/>
                                    </div>
                                    {/*{isFetching && !isFetchingNextPage*/}
                                    {/*    ? 'Background Updating...'*/}
                                    {/*    : null}*/}
                                </>}
                        </div>
                    </div>
                    <CategoryDescription content={description}/>
                </div>
            })}
        </>
    )
        ;
};

export default Catalog;