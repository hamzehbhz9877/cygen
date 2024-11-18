import {redirectStatus} from "@/utils/notFound-server";
import {instant} from "@/services/httpservice";


export const FagQuery = async (params: any) =>instant.get(`Faq/GetFaqs`,{params:{...params}})

export const GetFaq = async () => {
    const res = await fetch(`https://api.cygenco.com/api/Faq/GetFaqs`, {cache: 'no-store'})
    const data = await res.json()
    return redirectStatus(data)
}