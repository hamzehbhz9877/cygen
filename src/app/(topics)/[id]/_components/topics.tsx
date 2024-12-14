'use client'

import React, {useEffect, useState} from 'react';
import parse from "html-react-parser";
import useModal from "@/context/modal/useModal";
import PasswordRequired from "@/app/(topics)/[id]/_components/modal/passwordRequired";

const Topics = ({Body, Title, IsPasswordProtected, Id}: Topic) => {

    const [data, setData] = useState() as any;
    const [title, setTitle] = useState() as any;
    const {openModal, closeModal} = useModal()


    useEffect(() => {
        if (data)
            setData(Body)
    }, [Body])

    useEffect(() => {
        if (title)
            setTitle(Title)
    }, [Title])

    useEffect(() => {
        if (IsPasswordProtected)
            openModal(<PasswordRequired id={Id} close={closeModal} setTitle={setTitle} setData={setData}/>, {className: "passwordRequired"})
    }, [IsPasswordProtected])

    return (
        <div className={`topics ${!data && IsPasswordProtected ? '!h-[calc(100vh-400px)] isPassReq' : ""}`}>
            <h2 className="topics__title">
                {title}
            </h2>
            <div className="topics__body">
                {data ? parse(data) : ""}
            </div>
        </div>
    );
};

export default Topics;