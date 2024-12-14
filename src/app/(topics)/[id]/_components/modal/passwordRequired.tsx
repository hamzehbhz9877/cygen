'use client'

import {ModalBody, ModalHeader} from "@/components/modal";
import Logo from "@/layout/header/top/logo";
import {Form, Formik} from "formik";
import Input from "@/components/input/simple";
import React, {useEffect} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";
import {IoCloseOutline} from "react-icons/io5";
import {AuthenticateTopic} from "@/services/Topics";
import Button from "@/components/button/simple";

import "./index.scss"
import * as Yup from "yup";
import {PiLockKeyLight} from "react-icons/pi";
import {showToast} from "@/components/react-toastify/react-toastify";

const PasswordRequired = ({close, setData,id,setTitle}) => {

    const initialValues = {
        password: ''
    }
    const validationSchema = Yup.object({
        password: Yup.string()
            .required("لطفا پسورد را وارد کنید")
    })
    const {mutate, isPending, error} = useMutation<any, any, any, any>({
        mutationFn: AuthenticateTopic, onSuccess: (data: any) => {
            setData(data.data.Body);
            setTitle(data.data.Title);
            close()
        },
        onError: (data) => {
           showToast("error", data.response.data)
        }
    });

    const handleSubmit = (values: any) => mutate({password: values.password,id})

    return (
        <>
            <ModalHeader>
                <div className="absolute left-[20px] top-[20px]">
                    <IoCloseOutline color="#4d4d4d" role={"button"} size={30} onClick={close}/>
                </div>
            </ModalHeader>
            <ModalBody>
                <Logo/>
                <div className="passwordRequired__title">
                    <span>این صفحه محافظت شده میباشد جهت دسترسی پسورد را وارد کنید</span>
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
                                    <Input error={error} autoFocus type={"text"}
                                           label={'پسورد'}
                                           name={"password"} icon={<PiLockKeyLight color={'#92929270'} size={25}/>}/>
                                    {/*{error&&error?.status>400?*/}
                                    {/*    <div className={"error"}>{error?.response.data}</div>:""}*/}
                                    <Button type={"submit"} loading={isPending} text={"تایید"}
                                            className=""/>
                                </>
                            </Form>
                        )
                    }}
                </Formik>

                <div className="h-[30px]">

                </div>
            </ModalBody>
        </>
    );
};

export default PasswordRequired;