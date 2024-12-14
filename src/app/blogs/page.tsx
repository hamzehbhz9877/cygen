import React from 'react';
import {BlogList} from "@/services/Blog";
import Blogs from "@/app/_components/blogs";


export const dynamic = "force-dynamic";
export const revalidate = 0


export default async function Blog() {
    const blogs: any = await BlogList({})

    return (
        <div className="blog-page">
            <Blogs blogs={blogs}/>
        </div>
    );
};

