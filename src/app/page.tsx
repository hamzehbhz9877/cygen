import Breadcrumb from "@/components/breadcrumb";
import CategoryList from "@/components/category/list";
import AllProducts from "@/app/components/allProducts";
import CategoryDescription from "@/components/category/seo/description";
import {description} from "@/api/megamenu";

export default function Home() {

    return (
        <div className="main-page container">
            <Breadcrumb/>

            <CategoryList/>

            <div className="flex">
                <div className="w-[330px]">

                </div>
                <AllProducts/>
            </div>

            <CategoryDescription content={description}/>
        </div>
    );
}
