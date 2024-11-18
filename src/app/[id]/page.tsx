import {GetTopicDetails} from "@/services/Topics";
import {Metadata} from "next";
import Topics from "@/app/[id]/_components/topics";

import "./_components/index.scss"

export async function generateMetadata({params}: any): Promise<Metadata> {
    const topics:Topic=await GetTopicDetails(decodeURIComponent(params.id))
    return {
        title: topics?.MetaTitle,
        description: topics?.MetaDescription,
        keywords: topics?.MetaKeywords,
    };
}


export default async function TopicsPage({params}:any) {

    const topics:Topic = await GetTopicDetails(decodeURIComponent(params.id))

    return (
        <div className=" container">
            <Topics {...topics}/>
        </div>
    );
}
