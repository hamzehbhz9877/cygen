import React from 'react';
import {NewsList} from "@/services/News";
import News from "@/app/_components/news";


export const dynamic = "force-dynamic";
export const revalidate = 0


export default async function NewsPage() {
    const news: any = await NewsList({})

    return (
        <div className="news-page">
            <News data={news}/>
        </div>
    );
};

