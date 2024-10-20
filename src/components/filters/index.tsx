import FilterByPrice from "@/components/filters/price";
import CheckBoxFilter from "@/components/filters/checkbox";


// css
import "./index.scss"
import ActiveFilters from "@/components/filters/active";
import {Suspense} from "react";

const Filters = () => {
    return (
        <div className="all-filter w-[20%] ml-[15px] sticky top-[105px] h-max hidden lg:block">
            <Suspense>
                <ActiveFilters/>
            </Suspense>
            <Suspense>
                <FilterByPrice/>
            </Suspense>
            <Suspense>
                <CheckBoxFilter title={'فیلتر بر اساس رنگ ها:'} data={['بنفش', "زرد", "قرمز"]}/>
            </Suspense>
        </div>
    );
};

export default Filters;