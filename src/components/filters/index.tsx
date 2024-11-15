import FilterByPrice from "@/components/filters/price";
import CheckBoxFilter from "@/components/filters/checkbox";


// css
import "./index.scss"
import ActiveFilters from "@/components/filters/active";
import {Suspense} from "react";


type FiltersType = {
    FeaturedProducts: any
    CatalogProductsModel: any
}

const Filters = ({FeaturedProducts, CatalogProductsModel}: FiltersType) => {
    return (
        <div className="all-filter w-[20%] ml-[15px] sticky top-[138px] h-max hidden lg:block">
                <ActiveFilters activeFilters={CatalogProductsModel}/>
                {
                    CatalogProductsModel?.PriceRangeFilter?.Enabled ?
                        <FilterByPrice data={CatalogProductsModel.PriceRangeFilter}/> : ""
                }
                {
                    CatalogProductsModel?.SpecificationFilter?.Enabled ? CatalogProductsModel.SpecificationFilter.Attributes.map((data: any, index: number) => {
                        return <CheckBoxFilter type={"specifications"} key={index} title={data.Name} data={data.Values}/>
                    }) : ""
                }
                {
                    CatalogProductsModel?.ManufacturerFilter?.Enabled ? <CheckBoxFilter type={"manufacturers"}  title={"برند ها"}
                                                                                      data={CatalogProductsModel.ManufacturerFilter.Manufacturers}/>: ""
                }
        </div>
    );
};

export default Filters;