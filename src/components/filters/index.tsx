import FilterByPrice from "@/components/filters/sliderRange/price";
import CheckBoxFilter from "@/components/filters/checkbox";


// css
import "./index.scss"
import ActiveFilters from "@/components/filters/active";

const Filters = () => {
    return (
        <div className="all-filter w-[320px] ml-[15px] sticky top-[105px] h-max">
            <ActiveFilters/>
            <FilterByPrice/>
            <CheckBoxFilter title={'فیلتر بر اساس رنگ ها:'} data={new Array(20).fill('بنفش')}/>
        </div>
    );
};

export default Filters;