import React from 'react';
import {NewsDetail} from "@/services/News";
import "./_components/index.scss"
import NewsDetails from "@/app/blogs/[id]/_components/blogDetails";
import {Metadata} from "next";
import {ProductsListByCategory} from "@/services/Catalog";

export const dynamic = "force-dynamic";
export const revalidate = 0


export async function generateMetadata({params}: any): Promise<Metadata> {
    const news=await NewsDetail({newsSeName: params.id})
    return {
        title: news?.MetaTitle??news.Title,
        description: news?.MetaDescription??news?.Full,
        keywords: news?.MetaKeywords,
    };
}


const Page = async ({params}: any) => {
    const blogDetails: any = await NewsDetail({newsSeName: params.id})

    return (
        <div className="product-details container">
            <NewsDetails data={blogDetails}/>
        </div>
    );
};


export default Page;