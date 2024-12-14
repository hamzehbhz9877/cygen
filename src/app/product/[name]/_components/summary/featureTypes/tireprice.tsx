import React from 'react';

const TirePrice = ({product}) => {
    return (

                <div className="tirePrice relative overflow-x-auto tire-prices shadow-md sm:rounded-lg my-[20px]">
                    <table className="w-full  rtl:text-right text-gray-500 text-center">
                        <thead
                            className="text-[14px] text-gray-700 uppercase bg-dynamic-color-from-rgba ">
                        <tr>
                            <th  scope="col" className="px-3 py-3">تعداد</th>
                            {product.TierPrices.map((tire, index) => {
                                return <th key={index} scope="col" className="px-1 py-3 text-[15px]">
                                    {tire.Quantity}+
                                </th>
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="odd:bg-white  even:bg-gray-50  border-b
                         ">
                            <th scope="row"
                                className="text-[14px] text-gray-700 uppercase ">
                                قیمت (تومان)
                            </th>
                            {product.TierPrices.map((tire, index) => {
                                return <th scope="row" key={index}
                                           className="px-1 py-4 text-nowrap text-[13px]">
                                    {tire.Price.split(" ")[0]}
                                </th>
                            })}


                        </tr>

                        </tbody>
                    </table>
                </div>

    );
};

export default TirePrice;