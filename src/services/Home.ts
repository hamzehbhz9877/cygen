import {fetchAPi} from "@/hooks/fech";

export const GetHomepageProducts = async () => await fetchAPi(`https://api.cygenco.com/api/Home/GetHomepageProducts`)
export const GetHomepageBestSellerProducts = async () => await fetchAPi(`https://api.cygenco.com/api/Home/GetHomepageBestSellerProducts`)
export const GetHomepageNewProducts = async () => await fetchAPi(`https://api.cygenco.com/api/Home/GetHomepageNewProducts`)
export const GetHomepageManufacturers = async () => await fetchAPi(`https://api.cygenco.com/api/Home/GetHomepageManufacturers`)
export const GetHomepageCategories = async () => await fetchAPi(`https://api.cygenco.com/api/Home/GetHomepageCategories`)
export const GetHomepageNews = async () => await fetchAPi(`https://api.cygenco.com/api/Home/GetHomepageNews`)
export const GetHomepageBlogs = async () => await fetchAPi(`https://api.cygenco.com/api/Home/GetHomepageBlogs`)



