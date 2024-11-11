'use client'

import React, {useEffect, useRef, useState} from 'react';
import Breadcrumb from "@/components/breadcrumb";
import CategoryList from "@/components/category/list";
import Filters from "@/components/filters";
import Products from "./products";
import CategoryDescription from "@/components/category/seo/description";
import {keepPreviousData, useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {ProductsListByCategory} from "@/services/Catalog";
import {useInView} from "react-intersection-observer";
import SortProducts from "@/components/filters/sort/sortProducts";
import MobileHeadFilters from "@/components/filters/mobile";
import {useParams} from "next/navigation";
import ProductsSkeleton from "@/components/product/loader/products";
import Pagination from "@/components/pagination";
import {MakePagination} from "@/hooks/usePagination/makePagination";
import useQueryParams from "@/hooks/useQueryParams";


const Catalog = ({category, searchParams}: { category: catalog, searchParams: any }) => {
    const {ref, inView} = useInView()


    const params = useParams()

    const {addQueryParam} = useQueryParams()


    const {
        status,
        data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        isRefetching,
        isFetched,
        ...rest
    } = useInfiniteQuery({
        queryKey: ['category', Object.values(searchParams).join(","), params.code ? params.code : ""],
        queryFn: ({pageParam}) => {
            return ProductsListByCategory({
                pageParam,
                categorySeName: decodeURIComponent(params.code as any), ...searchParams
            })
        },
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
            return firstPage.CatalogProductsModel?.HasPreviousPage ? firstPage.CatalogProductsModel.PageNumber - 1 : undefined
        },
        getNextPageParam: (lastPage) => {
            if (lastPage.CatalogProductsModel?.HasNextPage && lastPage.CatalogProductsModel.PageNumber + 1 <= 3) {
                return lastPage.CatalogProductsModel.PageNumber + 1
            } else {
                return undefined
            }
        },
        // maxPages: 3,
    })

    const [firstRender, setFirstRender] = useState(false)

    React.useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [fetchNextPage, inView, data])


    useEffect(() => {
        if (rest.isFetchedAfterMount)
            setFirstRender(true)
    }, [rest.isFetchedAfterMount]);


    const makePagination = MakePagination(data.pages[data.pages.length - 1].CatalogProductsModel.PageNumber,
        data.pages[data.pages.length - 1].CatalogProductsModel.TotalPages, () => {
        });


    return (
        <>
            <div>
                {isRefetching && isFetched ?
                    <div className="w-[100%] h-[40px] mb-4 bg-[#f0f0f1] rounded "></div> :
                    <Breadcrumb data={data.pages[0].CategoryBreadcrumb}
                                show={data.pages[0].DisplayCategoryBreadcrumb}/>}
                <CategoryList data={data.pages[0].SubCategories}/>
                <div className="flex mt-5">
                    <Filters FeaturedProducts={data.pages[0].FeaturedProducts}
                             CatalogProductsModel={data.pages[0].CatalogProductsModel}/>
                    <div className={"flex flex-col flex-1"}>
                        {data.pages[0].CatalogProductsModel?.AllowProductSorting ?
                            <SortProducts
                                isRefetching={isRefetching && firstRender}
                                data={data.pages[0].CatalogProductsModel}/> : ""}
                        <MobileHeadFilters isRefetching={isRefetching} data={data.pages[0].CatalogProductsModel}/>
                        {
                            isFetched === false && isRefetching === true && firstRender ?
                                <div className={"all-products flex-1"}>
                                    <ProductsSkeleton/>
                                </div>
                                :
                                <>
                                    <Products isFetchingNextPage={isFetchingNextPage}
                                              isRefetching={isRefetching && firstRender}
                                              Products={data.pages.map(d => d.CatalogProductsModel?.Products).flatMap(d => d)}/>

                                    {searchParams.PageNumber || data.pages[data.pages.length - 1].CatalogProductsModel.PageNumber >= 3 ?
                                        <Pagination pages={makePagination} prevPage={() => {
                                            addQueryParam("PageNumber", data.pages[data.pages.length - 1].CatalogProductsModel.PageNumber - 1)
                                        }} nextPage={() => {
                                            addQueryParam("PageNumber", data.pages[data.pages.length - 1].CatalogProductsModel.PageNumber + 1)
                                        }}
                                                    currentPage={data.pages[data.pages.length - 1].CatalogProductsModel.PageNumber}
                                                    goTo={(page) => {
                                                        addQueryParam("PageNumber", page)
                                                    }}
                                                    total={data.pages[data.pages.length - 1].CatalogProductsModel.TotalPages}/>
                                        : <div ref={ref} className={"flex-1"}>

                                        </div>}
                                    {/*{isFetching && !isFetchingNextPage*/}
                                    {/*    ? 'Background Updating...'*/}
                                    {/*    : 'nothing mor'}*/}
                                </>
                        }
                    </div>
                </div>
                {
                    data.pages[0].Description ?
                        <CategoryDescription content={data.pages[0].Description} title={data.pages[0].Name}/> : ""}
            </div>
        </>
    )
        ;
};

export default Catalog;