'use client'

import React from 'react';
import {useMutation, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {GetSocialMediasQuery} from "@/services/SocialMedia";
import Image from "next/image";
import {useFormik} from "formik";
import * as Yup from "yup";
import {SubscribeToNewsletter} from "@/services/Newsletter";
import {LoginRegisterVerification} from "@/services/OtpAuthentication";
import {showToast} from "@/components/react-toastify/react-toastify";
import {GetSiteSettingsQuery} from "@/services/Common";

const MailBox = () => {
    const {data: settings} = useSuspenseQuery(GetSiteSettingsQuery)

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
            const isValidEmail = emailRegex.test(values.email);
            if (isValidEmail)
                mutate(values)
            else
                showToast("error", 'ایمیل نامعتبر است')

        },
    });

    const {data} = useSuspenseQuery(GetSocialMediasQuery)

    const {mutate} = useMutation<any, any, any, any>({
        mutationFn: SubscribeToNewsletter, onSuccess: () => {
            showToast("success", 'عملیات با موفقیت انجام شد')
            formik.values.email=""
        }
    })

    return (
        <div className="foot-box mailbox">
            <span className="foot-title">رسانه های خبری ما</span>
            <div className="social-foot">
         <span className="icon-social">
             {
                 data.map((link) => {
                     return <a key={link.Id}
                               className={"cursor-pointer"}
                               target="_blank" rel="nofollow">
                         <Image src={link.Picture.ImageUrl} alt={link.Picture.AlternateText} width={30} height={30}/>
                     </a>
                 })
             }
         </span>


            </div>

            {settings.NewsLetterBox.HideNewsletter ? "" : <>
                <span className="foot-title mail">در خبرنامه پر تخفیف ما عضو شوید</span>

                <form onSubmit={formik.handleSubmit} className="mail-foot">
                    <input
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name={"email"}
                        placeholder="ایمیل خود را وارد کنید..."/>
                    <button type="submit">ثبت</button>
                </form>
            </>}

        </div>
    );
};

export default MailBox;