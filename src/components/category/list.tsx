'use client'

import React, {useEffect, useState} from 'react';

// css
import "./index.scss"
import Category from "@/components/category/single";
import OtherCategory from "@/components/category/otherCategory";
import useResize from "@/hooks/useResize";


const data = new Array(12).fill(0)

const CategoryList = () => {

    const [otherCategory, setOtherCategory] = useState(false)

    const {windowWidth}=useResize()

    useEffect(()=>{
        if(windowWidth<1024)
            setOtherCategory(true)
    },[windowWidth])



    return (
        <div className="categories">
            <div className="categories__title">دسته‌بندی‌ها</div>

            <div className={"categories__list"}>
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