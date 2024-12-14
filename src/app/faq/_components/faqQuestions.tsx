import React, {useState} from 'react';
import {TbCategoryPlus} from "react-icons/tb";
import Collapse from "@/components/collapse";
import {LiaAngleDownSolid} from "react-icons/lia";
import parse from "html-react-parser";


type Props={
    data:any
    title:string
}
const FaqAnswers = ({data,title}:Props) => {


    return (

            <div className="accordion_faq_questions">

                <div className="asked_btn_icon">
                    <TbCategoryPlus size={28} className={"text-dynamic-color-from"}/>

                </div>

                <span className="frequently_asked_questions_title me-3 lg:me-0">{title}</span>

                <div className={`faq-questions-list ${data.length===1?'!grid-cols-1':''}`}>
                    {data.map(d => {
                        return (
                            <div key={d.Id} className={"asked_questions_box"}>
                                <Collapse
                                    isOpen={false}
                                    title={
                                        <div className="ask_accordion">
                                            <h2 className="">{d.Question}</h2>
                                            <LiaAngleDownSolid size={14} color={"#000"}/>
                                        </div>
                                    }
                                    content={
                                        <div className="panel">
                                            {parse(d.Answer)}
                                        </div>
                                    }
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
    );
};

export default FaqAnswers;