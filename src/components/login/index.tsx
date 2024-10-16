import {ModalBody, ModalFooter, ModalHeader} from "@/components/modal";
import Logo from "@/layout/header/top/logo";


// css

import "./index.scss"
import {Form, Formik} from "formik";
import {initialValues, validationSchema} from "@/components/login/validation";
import Input from "@/components/input/simple";
import Button from "@/components/button/simple";
import Link from "next/link";
import useModal from "@/context/modal/useModal";
import SubmissionCode from "@/components/login/submissionCode";
import {VscAccount} from "react-icons/vsc";
import React from "react";


const Login = () => {


    const {openModal} = useModal()
    const handleSubmit = (values: any) => {
        console.log(values)

        openModal(<SubmissionCode phone={values.phone}/>, {className: "!w-[31%] max-w-[500px] login"})
    }

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
                                    <ModalFooter align={"center"}>
                                        <Button onClick={close} text={"ورود / عضویت"}
                                                className=""/>
                                    </ModalFooter>
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