import React from 'react';
import {
    GetAnywherePictures,
    GetHomepageBestSellerProducts, GetHomepageBlogs, GetHomepageCategories,
    GetHomepageManufacturers,
    GetHomepageNewProducts, GetHomepageNews,
    GetHomepageProducts
} from "@/services/Home";
import ProductSliders from "@/components/libarary/products";
import Categories from "@/app/_components/categories";


import "./index.scss"
import DynamicSection from "@/components/dynamicSection";
import Brands from "@/app/_components/brands";
import BannerMain from "@/components/banner/bannerMain";


const Home = async () => {

    const homepageProducts = await GetHomepageProducts()
    const homepageBestSellerProducts = await GetHomepageBestSellerProducts()
    const homepageNewProducts = await GetHomepageNewProducts()
    const homepageCategories = await GetHomepageCategories()
    const homepageManufacturers = await GetHomepageManufacturers()
    const homepageNews = await GetHomepageNews()
    const homepageBlogs = await GetHomepageBlogs()

    const banner = await GetAnywherePictures([
        'home_page_top_grid_right',
        'home_page_top_grid_left_top',
        'home_page_top_grid_left_bottom',
        'home_page_before_categories',
        'home_page_before_products',
        'home_page_before_new_products',
        'home_page_before_best_sellers',
        'home_page_before_news',
        'home_page_before_blog',
    ])

    return (

        <div className="home-page">
            <div className={"container flex flex-wrap lg:flex-nowrap  gap-[10px] lg:gap-[20px] my-[30px]"}>
                <div className={"w-full lg:w-[70%]"}>
                    <BannerMain ignorecontainer  data={banner.find(d=>d.PositionSystemName==='home_page_top_grid_right')?.AnyWherePictures}/>
                </div>
                <div
                    className={"flex-1 grid-left w-full lg:w-[0%] justify-between flex flex-row lg:flex-col gap-[10px] lg:gap-[20px]"}>
                    <BannerMain ignorecontainer  data={banner.find(d=>d.PositionSystemName==='home_page_top_grid_left_top')?.AnyWherePictures}/>
                    <BannerMain ignorecontainer  data={banner.find(d=>d.PositionSystemName==='home_page_top_grid_left_bottom')?.AnyWherePictures}
                    />
                </div>
            </div>
            <BannerMain data={banner.find(d=>d.PositionSystemName==='home_page_before_categories')?.AnyWherePictures}/>
            <DynamicSection PositionSystemName={'home_page_before_categories'}/>

            <Categories data={homepageCategories}/>
            <BannerMain data={banner.find(d=>d.PositionSystemName==='home_page_before_products')?.AnyWherePictures}/>
            <DynamicSection PositionSystemName={'home_page_before_products'}/>

            <div className="container">
                {homepageProducts?.length > 0 ?
                    <ProductSliders data={homepageProducts} title={" پیشنهادی"}/> : ""}
            </div>

            <BannerMain data={banner.find(d=>d.PositionSystemName==='home_page_before_new_products')?.AnyWherePictures}/>
            <DynamicSection PositionSystemName={'home_page_before_new_products'}/>

            <div className="container">
                {homepageBestSellerProducts?.length > 0 ?
                    <ProductSliders data={homepageBestSellerProducts} title={"پرفروش ترین"}/> : ""}
            </div>

            <BannerMain data={banner.find(d=>d.PositionSystemName==='home_page_before_best_sellers')?.AnyWherePictures}/>
            <DynamicSection PositionSystemName={'home_page_before_best_sellers'}/>
            <div className="container">
                {homepageProducts?.length > 0 ?
                    <ProductSliders data={homepageNewProducts} title={"جدیدترین"}/> : ""}
            </div>

            <BannerMain data={banner.find(d=>d.PositionSystemName==='home_page_before_news')?.AnyWherePictures}/>
            <DynamicSection PositionSystemName={'home_page_before_news'}/>
            <div className={"container"}>
                {homepageNews?.length > 0 ?
                    <ProductSliders isNewsOrBlog data={homepageNews} title={"آخرین اخبار"}/> : ""}
            </div>

            <BannerMain data={banner.find(d=>d.PositionSystemName==='home_page_before_blog')?.AnyWherePictures}/>
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
