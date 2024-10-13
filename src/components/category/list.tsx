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
            {
                data.length > 7 ? <>
                    {data.slice(0, 7).map(d => {
                        return <Category key={d}/>
                    })}
                    {otherCategory ?
                        data.slice(7, data.length).map(d => {
                            return <Category key={d}/>
                        })
                        : <OtherCategory otherContent={(data) => setOtherCategory(data)} itemCount={data.length - 7}/>
                    }

                </> : data.map(d => {
                    return <Category key={d}/>
                })
            }

        </div>

    );
};

export default CategoryList;