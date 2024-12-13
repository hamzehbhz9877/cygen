'use client'

import React from 'react';
import {MdOutlineEdit} from "react-icons/md";
import {FiExternalLink} from "react-icons/fi";
import FaqAnswers from "@/app/faq/_components/faqQuestions";
import Image from "next/image";
import {useQuery} from "@tanstack/react-query";
import {FagQuery} from "@/services/Faq";

type Props = {
    id: any
}
const Faq = ({id}: Props) => {

    const {data: FaqItems} = useQuery({
        queryKey: ["faq", "Product"],
        queryFn: () => FagQuery({EntityName: "Product", EntityId: id}),
        enabled: !!id
    })
    return (
        <div className="faq tabs-mobile-item">
            <div className="tabs-mobile-item__title">
                <h4 className={"#232222"}>پرسش و پاسخ</h4>
            </div>

            <div className="tabs-mobile-item__content">
                {FaqItems?.data.length ? FaqItems.data?.map((faq, index: number) => {
                    return <FaqAnswers key={index} data={faq.FaqItems} title={faq.GroupTitle}/>
                }) : <div className="flex flex-col items-center gap-[20px] w-fit mx-auto"><Image
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFx54MxWDNYx_i7rmbjk7zKHok4B3J_8__A&s"}
                    className={"w-[50px] h-[50px] opacity-70"} alt={"faq"} width={50} height={50}/>
                    <p className="text-nowrap">هیچ پرسش و پاسخی ثبت نشده است.</p></div>}
            </div>

        </div>
    );
};

export default Faq;