import React from 'react';
import {FaMinus, FaPlus} from "react-icons/fa6";

const QuantitySidebar = ({value}: any) => {

    const [count, setQuantity] = React.useState(value);

    return (
        <div className={"count h-[32px] flex"}>
            <span onClick={() => setQuantity(count + 1)}
                  className={`plus border cursor-pointer border-[#E6E6E6] rounded-t-lg-[6px] 
                  rounded-r-[6px] p-2 ${count <= 20 ? 'border-[#ED303D]' : ""}`}><FaPlus size={13}
                                                                                         color={count <= 20 ? '#ED303D' : "#E6E6E6"}/></span>
            <span
                className={"value flex items-center justify-center h-full  border-y border-y-[#E6E6E6] w-[50px] text-center"}>{count}</span>
            <span onClick={() => {
                if (count > 1)
                    setQuantity(count - 1)
            }}
                  className={`minus cursor-pointer border border-[#E6E6E6] rounded-l-[6px] rounded-b-lg-[6px] p-2 ${count > 1 ? 'border-[#ED303D]' : ""}`}>
                <FaMinus size={13} color={count > 1 ? '#ED303D' : "#E6E6E6"}/></span>
        </div>
    );
};

export default QuantitySidebar;