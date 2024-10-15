'use client'

import React, {useState} from 'react';

// css
import "./index.scss"
import Category from "@/components/category/single";
import OtherCategory from "@/components/category/otherCategory";


const data = new Array(12).fill(0)

const CategoryList = () => {

    const [otherCategory, setOtherCategory] = useState(false)

    return (
        <div className="categories">
            <div className="categories__title">دسته‌بندی‌ها</div>

            <div className={"categories__wrapper"}>
                {
                    data.length > 7 ? <>
                        {data.slice(0, 7).map((d,index)=> {
                            return <Category key={index}/>
                        })}
                        {otherCategory ?
                            data.slice(7, data.length).map((d,index) => {
                                return <Category key={index}/>
                            })
                            : <OtherCategory otherContent={(data) => setOtherCategory(data)} itemCount={data.length - 7}/>
                        }

                    </> : data.map((d,index) => {
                        return <Category key={index}/>
                    })
                }
            </div>


        </div>

    );
};

export default CategoryList;