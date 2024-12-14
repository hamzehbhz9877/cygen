import {instant} from "@/services/httpservice";
import {notFound} from "next/navigation";

export const GetTopicDetails = async (topicSeName) => {
    try {

        const res = await instant.get(`Topic/GetTopicDetails?topicSeName=${topicSeName}`)
        if (res.data)
            return res.data
    } catch (err: any) {
        return notFound()
    }
}

export const AuthenticateTopic = (data) => instant.post('Topic/AuthenticateTopic', data)
