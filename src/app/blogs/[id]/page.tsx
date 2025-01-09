import React from 'react';
import {BlogDetail} from "@/services/Blog";
import "./_components/index.scss"
import BlogDetails from "@/app/blogs/[id]/_components/blogDetails";
import {Metadata} from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0

export async function generateMetadata({params}: any): Promise<Metadata> {
    const news=await BlogDetail({blogSeName: decodeURIComponent(params.id)})
    return {
        title: news?.MetaTitle??news.Title,
        description: news?.MetaDescription??news?.Body,
        keywords: news?.MetaKeywords,
    };
}

const Page = async ({params}: any) => {
    const blogDetails: any = await BlogDetail({blogSeName: decodeURIComponent(params.id)})
    return (
        <div className="product-details container">
            <BlogDetails data={blogDetails} news={false}/>
        </div>
    );
};


export default Page;