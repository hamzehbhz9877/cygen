import Breadcrumb from "@/components/breadcrumb";
import CategoryList from "@/components/category/list";

export default function Home() {
    return (
        <div className="main-page container">
            <Breadcrumb/>

            <CategoryList/>

        </div>
    );
}
