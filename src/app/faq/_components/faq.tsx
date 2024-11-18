'use client'

import React, {useState} from 'react';

import "./index.scss"
import Collapse from "@/components/collapse";
import {LiaAngleDownSolid} from "react-icons/lia";
import Link from "next/link";
import parse from "html-react-parser";
import {TbCategoryPlus} from "react-icons/tb";
import {MdOutlineQuestionMark} from "react-icons/md";
import {FaAngleLeft} from "react-icons/fa6";
import {IoIosCloseCircle} from "react-icons/io";


const Faq = ({data}: any) => {

    const [FaqItems, setFaqItems] = useState(data[0].FaqItems)
    const [questions, setQuestions] = useState(data.map(d => d.FaqItems).flatMap(d => d))

    const [questionRes, setQuestionRes] = useState([])

    const [value, setValue] = useState("")

    const [selectedQuestion,setSelectedQuestion]=useState({}) as any

    return (
<>
                <div className="ask_top_page">

                    <div className="faq_headerbox">
                        <div className="circle_btn_icon">
                            <MdOutlineQuestionMark size={24} className={"text-dynamic-color-from"}/>

                        </div>

                        <h4 className="page_title">موضوع پرسش شما چیست؟</h4>
                        <p className="page_subtitle">موضوع موردنظرتان را جستجو کرده یا از دسته‌بندی زیر انتخاب
                            کنید</p>

                        <form className="form_search_faqpage">
                            <div className="relative w-full">
                                <input id="text_search" className="input_field" type="text" name="q"
                                       value={value} onChange={e => {
                                    setValue(e.target.value)
                                    if (e.target.value.length > 2)
                                        setQuestionRes(questions.filter(d => d.Question.indexOf(e.target.value.toLowerCase()) !== -1))
                                }} autoComplete="off"
                                       placeholder="جستجوی موضوع"/>
                                {value? <IoIosCloseCircle size={24} className={"absolute top-2/4 -translate-y-2/4 left-[15px]"} role={"button"}
                                                          onClick={()=>setValue("")}/>:""}
                            </div>

                            <div className={`faq-search-result ${questionRes.length > 0 ? "active" : ""}`}>
                                {questionRes?.map(d => {
                                    return <a key={d.Id} onClick={()=> {
                                        setSelectedQuestion(d)
                                        setQuestionRes([])
                                        setValue("")
                                    }} className="result_post_search cursor-pointer">{d.Question}
                                        <FaAngleLeft size={10} className={"text-dynamic-color-from"}/>
                                    </a>
                                })}
                            </div>
                        </form>
                    </div>
                </div>
                {selectedQuestion?.Question?
                <div className="content_ask_page">
                    <div className="post_title">
                        {selectedQuestion.Question}
                    </div>
                    <div className="main-content-asked">
                        {parse(selectedQuestion.Answer)}
                    </div>
                </div>:""}

                <div className="general_faq_box ">

                    <div className="content_ask_page">

                        <div className="asked_btn_icon">
                            <TbCategoryPlus size={28} className={"text-dynamic-color-from"}/>

                        </div>

                        <span className="title_cat_box">موضوع پرسش شما چیست؟</span>
                        <div className={`main_box_ask_cats grid-cols-5`}>

                            {data.map((d, index) => {
                                return (
                                    <a key={d.Id}  onClick={() => setFaqItems(d.FaqItems)}
                                       className={`link_ask_cats cursor-pointer border_bottom ${index !== data.length - 1 ? 'border_left' : ""}`}>

                                        <img
                                            src="https://pars.parskalas.com/wp-content/uploads/2022/10/89c09fa9ffcdebee239c262d8cca8e53cf833267_1642848944.png"/>


                                        <span>{d.GroupTitle}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="accordion_faq_questions">

                    <div className="asked_btn_icon">
                        <TbCategoryPlus size={28} className={"text-dynamic-color-from"}/>

                    </div>

                    <span className="frequently_asked_questions_title">پرتکرارترین پرسش‌ها</span>

                    {FaqItems.map(d => {
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
    </>
    );
};

export default Faq;