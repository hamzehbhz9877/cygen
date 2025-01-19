import {fetchAPi} from "@/hooks/fetch";

export const GetHomepageProducts = async () => await fetchAPi({url: `https://api.cygenco.com/api/Home/GetHomepageProducts`})
export const GetHomepageBestSellerProducts = async () => await fetchAPi({url: `https://api.cygenco.com/api/Home/GetHomepageBestSellerProducts`})
export const GetHomepageNewProducts = async () => await fetchAPi({url: `https://api.cygenco.com/api/Home/GetHomepageNewProducts`})
export const GetHomepageManufacturers = async () => await fetchAPi({url: `https://api.cygenco.com/api/Home/GetHomepageManufacturers`})
export const GetHomepageCategories = async () => await fetchAPi({url: `https://api.cygenco.com/api/Home/GetHomepageCategories`})
export const GetHomepageNews = async () => await fetchAPi({url: `https://api.cygenco.com/api/Home/GetHomepageNews`})
export const GetHomepageBlogs = async () => await fetchAPi({url: `https://api.cygenco.com/api/Home/GetHomepageBlogs`})
export const GetAnywherePictures = async (data) => await fetchAPi({
    url: `https://api.cygenco.com/api/AnyWherePicture/GetAnywherePictures?`+ new URLSearchParams(data.map(v=>['PositionSystemNames', v]))
})



