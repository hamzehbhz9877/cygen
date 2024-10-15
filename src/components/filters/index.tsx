import FilterByPrice from "@/components/filters/sliderRange/price";
import CheckBoxFilter from "@/components/filters/checkbox";


// css
import "./index.scss"
import ActiveFilters from "@/components/filters/active";

const Filters = () => {
    return (
        <div className="all-filter w-[20%] ml-[15px] sticky top-[105px] h-max">
            <ActiveFilters/>
            <FilterByPrice/>
            <CheckBoxFilter title={'فیلتر بر اساس رنگ ها:'} data={['بنفش', "زرد", "قرمز"]}/>
        </div>
    );
};

export default Filters;