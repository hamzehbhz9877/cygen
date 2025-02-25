'use client'

import React from 'react';


import "./index.scss"
import {RiTimerLine} from "react-icons/ri";
import parse from "html-react-parser";
import {GrShareOption} from "react-icons/gr";
import Breadcrumb from "@/components/breadcrumb";
import Banner from "@/components/banner";
import {diffDays} from "@/helpers/client";
import Share from "@/app/product/[name]/_components/slider/modal/share";
import useModal from "@/context/modal/useModal";

const NewsBlogsDetails = ({data, news}) => {


    const {openModal, closeModal} = useModal()

    return (

        <div className=" my-[20px]">
            <div className="breadcrumb-wrapper">
                <Breadcrumb data={[{
                    Name: news?'اخبار':"مقاله",
                    SeName: news?'/news':"/blogs"
                }, {
                    Name: data.Title,
                    SeName: ''
                }]} show={true}/>
            </div>
            {
                news ?
                    <Banner PositionSystemNames={'news_details_before_content'}  EntityName={'News'}
                            EntityId={data.Id}/> :
                    <Banner PositionSystemNames={'blog_details_before_content'}  EntityName={'Blog'}
                            EntityId={data.Id}/>
            }


            <div className="main-cont container  single-post">


                <div className="header-content-post">
                    <div className="flex flex-wrap gap-[10px] justify-between items-center">
                        <h1 className="title-cont">
                            {data.Title} </h1>

                        <span className="reading-time"><RiTimerLine size={15}
                                                                    color={'#9d9d9d'}/>{diffDays(data.CreatedOn)} پیش منتشر شده</span>

                    </div>
                </div>


                <div className="humbnail-single">
                </div>


                <div className="counts">{data?.Full ? parse(data.Full) : data?.Body ? parse(data.Body) : ''}</div>


                <hr className="w-full h-[1px] bg-[#eee] my-[20px]"/>
                <div className="tag-coment-box">

        <span className="coment-cont">

            <div className="flex items-center cursor-pointer"
                 onClick={() => openModal(<Share close={closeModal}/>, {className: "!w-max !rounded-[6px]"})}>
              <GrShareOption size={24} color={'#9BA4AB'} className={"pl-[5px]"}/>
              <span>اشتراک گذاری</span>
            </div>
        </span>
                    {data?.Tags?.length > 0 ?
                        <span className="tags-cont">
             <ul className="post-categories">
	{data?.Tags?.map((tag, i) => {
        return (
            <li key={i}><span
                rel="category tag">{tag}</span></li>
        )
    })}
	</ul>          </span> : ""}
                </div>
            </div>
        </div>

    );
};

export default NewsBlogsDetails;