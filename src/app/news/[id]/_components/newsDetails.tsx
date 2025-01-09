'use client'

import React from 'react';


import "@/app/blogs/[id]/_components/index.scss"
import {RiTimerLine} from "react-icons/ri";
import parse from "html-react-parser";
import {GrShareOption} from "react-icons/gr";
import Breadcrumb from "@/components/breadcrumb";
import Banner from "@/components/banner";
import {diffDays} from "@/helpers/client";
import Share from "@/app/product/[name]/_components/slider/modal/share";
import useModal from "@/context/modal/useModal";

const NewsDetails = ({data}) => {


    const {openModal,closeModal}=useModal()

    return (

        <div className="container my-[20px]">
            <div className="breadcrumb-wrapper">
                <Breadcrumb data={[{
                    Name: 'اخبار',
                    SeName: '/blogs'
                },{
                    Name: data.Title,
                    SeName: ''
                }]} show={true}/>
            </div>

            <div className="main-cont  single-post">


                <div className="header-content-post">
                    <div className="flex justify-between items-center">
                        <h1 className="title-cont">
                            {data.Title} </h1>

                        <span className="reading-time"><RiTimerLine size={15}
                                                                    color={'#9d9d9d'}/>{diffDays(data.CreatedOn)}   پیش منتشر شده</span>

                    </div>
                </div>


                <div className="humbnail-single">
                  <Banner  PositionSystemName={'home_page_before_blog'} EntityName={'public'} isSingle/></div>


                <div className="counts">{parse(data.Full)}</div>

                <div className="tag-coment-box">

        <span className="coment-cont">

            <div className="flex items-center cursor-pointer"
                 onClick={() => openModal(<Share close={closeModal}/>, {className: "!w-max !rounded-[6px]"})}>
              <GrShareOption size={24} color={'#9BA4AB'} className={"pl-[5px]"}/>
              <span>اشتراک گذاری</span>
            </div>
        </span>
                </div>
                <span className="tags-cont">
             <ul className="post-categories">
	{data.Tags.map((tag, i) => {
        return (
            <li key={i}><span
                rel="category tag">{tag}</span></li>
        )
    })}
	</ul>          </span>

            </div>
        </div>

    );
};

export default NewsDetails;