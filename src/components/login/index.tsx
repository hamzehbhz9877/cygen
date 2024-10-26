'use client'

import {ModalBody} from "@/components/modal";
import Logo from "@/layout/header/top/logo";


import "./index.scss"
import {Form, Formik} from "formik";
import {initialValues, validationSchema} from "@/components/login/validation";
import Input from "@/components/input/simple";
import Button from "@/components/button/simple";
import Link from "next/link";
import useModal from "@/context/modal/useModal";
import SubmissionCode from "@/components/login/otp";
import {VscAccount} from "react-icons/vsc";
import React, {useEffect} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {GetGuestCustomer, RequestLoginRegister} from "@/services/OtpAuthentication";


const Login = () => {

    const {openModal} = useModal()

    const {mutate, isPending} = useMutation({
        mutationFn: RequestLoginRegister, onSuccess: (data: any) => {
            openModal(<SubmissionCode resendCode={()=>mutate({mobileNumber: data.data.MobileNumber})} {...data.data}/>, {className: "login"})
        }
    });

    const handleSubmit = (values: any) => mutate({mobileNumber: values.phone})

    return (
        <>
            <ModalBody>
                <Logo/>
                <div className="login__title">
                    <span>ورود / عضویت</span>
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {() => {
                        return (
                            <Form>
                                <>
                                    <Input autoFocus type={"text"} label={'موبایل یا ایمیل خود را وارد نمایید.'}
                                           name={"phone"} icon={<VscAccount color={'#92929270'} size={25}/>}/>
                                    <Button type={"submit"} loading={isPending} text={"ورود / عضویت"}
                                            className=""/>
                                </>
                            </Form>
                        )
                    }}
                </Formik>
                <p className="copyright">
                    با ورود و یا ثبت نام در سایت شما <Link className="linkp"
                                                           href="https://pars.parskalas.com/%d8%ad%d8%b1%db%8c%d9%85-%d8%ae%d8%b5%d9%88%d8%b5%db%8c/"
                                                           target="_blank">شرایط و قوانین</Link> استفاده از سرویس های
                    سایت
                    و <a href="#" target="_blank">قوانین حریم خصوصی</a> آن را می‌پذیرید. </p>

            </ModalBody>
        </>
    );
};

export default Login;