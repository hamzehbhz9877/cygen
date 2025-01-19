import {instant} from "@/services/httpservice";
import {fetchAPi} from "@/hooks/fetch";


export const FagQuery = async (params: any) =>instant.get(`Faq/GetFaqs`,{params:{...params}})

export const GetFaq = async () => {
    return await fetchAPi({url:`https://api.cygenco.com/api/Faq/GetFaqs`
})
}