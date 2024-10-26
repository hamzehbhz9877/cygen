import Breadcrumb from "@/components/breadcrumb";
import CategoryList from "@/components/category/list";
import AllProducts from "@/app/components/allProducts";
import CategoryDescription from "@/components/category/seo/description";
import {description} from "@/api/megamenu";
import Filters from "@/components/filters";
import {ProductsListByCategory} from "@/services/Catalog";

export default async function Home() {


    const category = await ProductsListByCategory({categoryId: 18})

    return (
        <div className="main-page container">
            <Breadcrumb data={category?.CategoryBreadcrumb} show={category?.DisplayCategoryBreadcrumb}/>

            <CategoryList data={category?.SubCategories}/>

            <div className="flex">
                <Filters FeaturedProducts={category?.FeaturedProducts}
                         CatalogProductsModel={category?.CatalogProductsModel}
                />

                <AllProducts AvailableSortOptions={category?.CatalogProductsModel.AvailableSortOptions}
                             AllowProductSorting={category?.CatalogProductsModel.AllowProductSorting}
                             Products={category?.CatalogProductsModel.Products}
                />
            </div>

            <CategoryDescription content={description}/>
        </div>
    );
}
