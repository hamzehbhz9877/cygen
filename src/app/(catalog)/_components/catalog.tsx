'use client'

import "./catalog.scss"
import React, {useEffect, useRef, useState} from 'react';
import Breadcrumb from "@/components/breadcrumb";
import CategoryList from "@/components/category/list";
import Filters from "@/components/filters";
import Products from "./products";
import CategoryDescription from "@/components/category/seo/description";
import {keepPreviousData, useInfiniteQuery, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {ProductsListByCategory} from "@/services/Catalog";
import {useInView} from "react-intersection-observer";
import SortProducts from "@/components/filters/sort/sortProducts";
import MobileHeadFilters from "@/components/filters/mobile";
import {useParams, useSearchParams} from "next/navigation";
import ProductsSkeleton from "@/components/product/loader/products";
import Pagination from "@/components/pagination";
import {MakePagination} from "@/hooks/usePagination/makePagination";
import useQueryParams from "@/hooks/useQueryParams";
import Banner from "@/components/banner";
import {FagQuery} from "@/services/Faq";
import "@/app/faq/_components/index.scss"
import FaqAnswers from "@/app/faq/_components/faqQuestions";
import LogoLoader from "@/components/loading/logoLoader";
import ProductSliders from "@/components/libarary/products";

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


    const {data: FaqItems} = useQuery({
        queryKey: ["faq", "category"],
        queryFn: () => FagQuery({EntityName: "Category", EntityId: data.pages[0].Id}),
        enabled: !!data.pages[0].Id
    })

    const search = useSearchParams()

    return (
        <>
            {isRefetching && firstRender ?
<LogoLoader/>
                : ""}
            <div className="catalog">

                <Breadcrumb show={!!search.get("q")} data={[{
                    Name: ` نتیجه جستجو برای “${search.get("q")}”`,
                }]}/>

                {isRefetching && isFetched ?
                    <div className="w-[100%] h-[40px] mb-4 bg-[#f0f0f1] rounded container"></div> :
                    <Breadcrumb data={data.pages[0].CategoryBreadcrumb}
                                show={data.pages[0].DisplayCategoryBreadcrumb}/>
                }

                <Banner PositionSystemName={"category_top"} EntityName={"Category"} EntityId={data.pages[0].Id}/>
                <div className="container">
                    {data.pages[0].FeaturedProducts?.length > 0 ?
                        <ProductSliders data={data.pages[0].FeaturedProducts} title={"محصولات ویژه"}/> : ""}
                </div>
                {data.pages[0]?.SubCategories?.length > 0 ?
                    <CategoryList data={
                        data.pages[0]?.SubCategories}/> : ""}
                <div className="flex items-start container">
                    <Filters AvailableManufacturers={data.pages[0].AvailableManufacturers} id={data.pages[0].Id}
                             CatalogProductsModel={data.pages[0].CatalogProductsModel}/>
                    <div className={"flex flex-col flex-1"}>
                        {data.pages.length === 1 && data.pages[0].CatalogProductsModel.Products?.length === 0 ? "" : data.pages[0].CatalogProductsModel?.AllowProductSorting ?
                            <SortProducts
                                isRefetching={isRefetching && firstRender}
                                data={data.pages[0].CatalogProductsModel}/> : ""}
                        <MobileHeadFilters isRefetching={isRefetching} data={data.pages[0]}/>
                        {
                            isFetched === false && isRefetching === true && ((!firstRender && !isFetchingNextPage) || (firstRender && !isFetchingNextPage)) ?
                                <div className={"all-products flex-1"}>
                                    <ProductsSkeleton/>
                                </div> :
                                <>
                                    {data.pages.length === 1 && data.pages[0].CatalogProductsModel.Products?.length === 0 ?
                                        <div className="woocommerce-info">
                                            <svg aria-hidden="true" data-icon="exclamation-circle"
                                                 fill="currentColor"
                                                 focusable="false" height="1.3em" viewBox="64 64 896 896"
                                                 width="1.3em">
                                                <path
                                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                                <path
                                                    d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
                                            </svg>
                                            <span className="ms-2">هیچ محصولی یافت نشد.</span></div> :
                                        <Products isFetchingNextPage={isFetchingNextPage}
                                                  isRefetching={isRefetching && firstRender}
                                                  Products={data.pages.map(d => d.CatalogProductsModel?.Products).flatMap(d => d)}/>}

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

                <div className="faq-catalog container mb-[20px]">
                    {FaqItems?.data.length ? FaqItems.data?.map((faq, index: number) => {
                        return <FaqAnswers key={index} data={faq.FaqItems} title={faq.GroupTitle}/>
                    }) : ""}
                </div>

            </div>
        </>
    )
        ;
};

export default Catalog;