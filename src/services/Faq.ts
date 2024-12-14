import {instant} from "@/services/httpservice";
import {fetchAPi} from "@/hooks/fech";


export const FagQuery = async (params: any) =>instant.get(`Faq/GetFaqs`,{params:{...params}})

export const GetFaq = async () => {
    return await fetchAPi(`https://api.cygenco.com/api/Faq/GetFaqs`)
}