'use client'

import React from 'react';
import Image from "next/image";
import FaqAnswers from "@/app/faq/_components/faqQuestions";
import {useQuery} from "@tanstack/react-query";
import {FagQuery} from "@/services/Faq";

const Faq = ({id}: any) => {


    const {data: FaqItems} = useQuery({
        queryKey: ["faq", "Product"],
        queryFn: () => FagQuery({EntityName: "Product", EntityId: id}),
        enabled: !!id
    })

    return (
        <div className='faq'>
            {FaqItems?.data.length ? FaqItems.data?.map((faq, index: number) => {
                return <FaqAnswers key={index} data={faq.FaqItems} title={faq.GroupTitle}/>
            }) : <div className="flex items-center gap-[20px] w-fit mx-auto"><Image
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFx54MxWDNYx_i7rmbjk7zKHok4B3J_8__A&s"}
                className={"w-[90px] h-[90px] opacity-70"} alt={"faq"} width={90} height={90}/>
                <p className="text-nowrap">هیچ پرسش و پاسخی ثبت نشده است.</p></div>}

        </div>
    );
};

export default Faq;