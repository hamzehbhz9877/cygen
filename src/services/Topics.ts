import {instant} from "@/services/httpservice";
import {notFound} from "next/navigation";

export const GetTopicDetails = async (topicSeName) => {
    const res=await instant.get(`Topic/GetTopicDetails?topicSeName=${topicSeName}`)
    if(res.data)
    return res.data
    else
        return notFound()
}
