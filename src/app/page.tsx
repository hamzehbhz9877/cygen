import React from 'react';
import {
    GetHomepageBestSellerProducts, GetHomepageBlogs, GetHomepageCategories,
    GetHomepageManufacturers,
    GetHomepageNewProducts, GetHomepageNews,
    GetHomepageProducts
} from "@/services/Home";
import ProductSliders from "@/components/libarary/products";
import Categories from "@/app/_components/categories";


import "./index.scss"
import Banner from "@/components/banner";
import DynamicSection from "@/components/dynamicSection";
import Brands from "@/app/_components/brands";


const Home = async () => {

    const homepageProducts = await GetHomepageProducts()
    const homepageBestSellerProducts = await GetHomepageBestSellerProducts()
    const homepageNewProducts = await GetHomepageNewProducts()
    const homepageCategories = await GetHomepageCategories()
    const homepageManufacturers = await GetHomepageManufacturers()
    const homepageNews = await GetHomepageNews()
    const homepageBlogs = await GetHomepageBlogs()

    return (

        <div className="home-page">
            <div className={"container flex flex-wrap lg:flex-nowrap  gap-[10px] lg:gap-[20px] my-[30px]"}>
                <div className={"w-full lg:w-[70%]"}>
                    <Banner ignorecontainer PositionSystemName={'home_page_top_grid_right'} EntityName={'Public'}/>
                </div>
                <div
                    className={"flex-1 grid-left w-full lg:w-[0%] justify-between flex flex-row lg:flex-col gap-[10px] lg:gap-[20px]"}>
                    <Banner ignorecontainer PositionSystemName={'home_page_top_grid_left_top'} EntityName={'Public'}/>
                    <Banner ignorecontainer PositionSystemName={'home_page_top_grid_left_bottom'}
                            EntityName={'Public'}/>
                </div>
            </div>
            <Banner PositionSystemName={'home_page_before_categories'} EntityName={'Public'}/>
            <DynamicSection PositionSystemName={'home_page_before_categories'}/>

            <Categories data={homepageCategories}/>
            <Banner PositionSystemName={'home_page_before_products'} EntityName={'Public'}/>
            <DynamicSection PositionSystemName={'home_page_before_products'}/>

            <div className="container">
                {homepageProducts?.length > 0 ?
                    <ProductSliders data={homepageProducts} title={" پیشنهادی"}/> : ""}
            </div>

            <Banner PositionSystemName={'home_page_before_new_products'} EntityName={'Public'}/>
            <DynamicSection PositionSystemName={'home_page_before_new_products'}/>

            <div className="container">
                {homepageBestSellerProducts?.length > 0 ?
                    <ProductSliders data={homepageBestSellerProducts} title={"پرفروش ترین"}/> : ""}
            </div>

            <Banner PositionSystemName={'home_page_before_best_sellers'} EntityName={'Public'}/>
            <DynamicSection PositionSystemName={'home_page_before_best_sellers'}/>
            <div className="container">
                {homepageProducts?.length > 0 ?
                    <ProductSliders data={homepageNewProducts} title={"جدیدترین"}/> : ""}
            </div>

            <Banner PositionSystemName={'home_page_before_news'} EntityName={'Public'}/>
            <DynamicSection PositionSystemName={'home_page_before_news'}/>
            <div className={"container"}>
                {homepageNews?.length > 0 ?
                    <ProductSliders isNewsOrBlog data={homepageNews} title={"آخرین اخبار"}/> : ""}
            </div>

            <Banner PositionSystemName={'home_page_before_blog'} EntityName={'Public'}/>
            <DynamicSection PositionSystemName={'home_page_before_posts'}/>
            <div className={"container"}>
                {homepageBlogs?.length > 0 ?
                    <ProductSliders isNewsOrBlog  data={homepageBlogs} title={" آخرین مطالب"}/> : ""}
            </div>
            <div className={"container"}>
                <Brands data={homepageManufacturers}/>
            </div>
        </div>
    );
};

export default Home;
