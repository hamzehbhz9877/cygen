import {fetchAPi} from "@/hooks/fetch";


export const GetDynamicSections = async (data) => await fetchAPi({
    url: `https://api.cygenco.com/api/DynamicSection/GetDynamicSections?`+ new URLSearchParams(data.map(v=>['PositionSystemNames', v]))
})