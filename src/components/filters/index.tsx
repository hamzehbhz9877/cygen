import FilterByPrice from "@/components/filters/price";
import CheckBoxFilter from "@/components/filters/checkbox";


// css
import "./index.scss"
import ActiveFilters from "@/components/filters/active";
import React, {Suspense} from "react";
import Banner from "@/components/banner";
import CategoryFilter from "@/components/filters/category";


type FiltersType = {
    FeaturedProducts: any
    CatalogProductsModel: any
    id:number
    AvailableManufacturers?:any
}

const Filters = ({FeaturedProducts,AvailableManufacturers, CatalogProductsModel,id}: FiltersType) => {

    return (
        <div className="all-filter sticky">
                <ActiveFilters activeFilters={CatalogProductsModel} AvailableManufacturers={AvailableManufacturers}/>

            {
                CatalogProductsModel?.ManufacturerFilter?.Enabled ? <CheckBoxFilter type={"manufacturers"}  title={"برند ها"}
                                                                                    data={CatalogProductsModel.ManufacturerFilter.Manufacturers}/>: ""
            }
            {
                AvailableManufacturers ?
                    <div className="radio-filter">
                        <CategoryFilter type={"categoryId"}  title={"دسته بندی ها"}/>
                    </div>
                    : ""
            }
            {
                AvailableManufacturers ?
                    <div className="radio-filter">
                        <CheckBoxFilter type={"manufacturerId"}  title={"برند ها"}
                                        data={AvailableManufacturers}/>
                    </div>
                    : ""
            }

            {
                CatalogProductsModel?.PriceRangeFilter?.Enabled ?
                    <FilterByPrice data={CatalogProductsModel.PriceRangeFilter} isOpen={false}/> : ""
            }
                {
                    CatalogProductsModel?.SpecificationFilter?.Enabled ? CatalogProductsModel.SpecificationFilter.Attributes.map((data: any, index: number) => {
                        return <CheckBoxFilter type={"specifications"} key={index} title={data.Name} data={data.Values}/>
                    }) : ""
                }

            <Banner PositionSystemName={"category_sidebar"} type EntityName={"Category"} EntityId={String(id)}/>
        </div>
    );
};

export default Filters;