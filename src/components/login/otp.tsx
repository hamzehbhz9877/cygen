import {ModalBody, ModalHeader} from "@/components/modal";
import Logo from "@/layout/header/top/logo";
import {ErrorMessage, Form, Formik, useFormikContext} from "formik";
import Button from "@/components/button/simple";
import {FaArrowRight} from "react-icons/fa6";

// css
import "./index.scss"
import useModal from "@/context/modal/useModal";
import Login from "@/components/login/index";
import useTimer from "@/hooks/useTimer";
import Code from "@/components/input/code/code";
import {useMutation} from "@tanstack/react-query";
import {LoginRegisterVerification, ResendLoginRegisterOtpCode} from "@/services/OtpAuthentication";
import {showToast} from "@/components/react-toastify/react-toastify";
import useAuth from "@/context/authentication/useAuth";
import {
    initialValues,
    initialValuesRegister,
    validationSchema,
    validationSchemaRegister
} from "@/components/login/otpValidation";
import Input from "@/components/input/simple";
import React, {useEffect, useState} from "react";
import {IoCloseOutline} from "react-icons/io5";


type Props = {
    AuthenticationToken: string,
    MobileNumber: string,
    OtpExpireDateTotalSeconds: number,
    RegisterRequired: boolean
}
const AutoSubmitToken = ():any => {
    const {values, submitForm}:any = useFormikContext();
    React.useEffect(() => {
        if (values.OtpCode.toString().length === 5) {
            submitForm();
        }
    }, [values, submitForm]);
    return null;
};

const Otp = ({MobileNumber, OtpExpireDateTotalSeconds, AuthenticationToken, RegisterRequired}: Props) => {

    const [timer, setTimer] = useState() as any

    useEffect(() => {
        setTimer(OtpExpireDateTotalSeconds)
    }, [OtpExpireDateTotalSeconds])

    const {openModal, closeModal} = useModal()

    const {setUserCookie,resetGuestCookie} = useAuth()


    const {mutate, isPending, error} = useMutation<any, any, any, any>({
        mutationFn: LoginRegisterVerification, onSuccess: (data) => {
            setUserCookie(data)
            resetGuestCookie()
            closeModal()
            showToast("success", 'عملیات با موفقیت انجام شد')
        }
    });

    const {mutate: resendCode, error: ResendLoginRegisterOtpCodeError} = useMutation<any, any, any, any>({
        mutationFn: ResendLoginRegisterOtpCode, onSuccess: (data) => {
            setTimer(data.data.OtpExpireDateTotalSeconds)
        }
    });

    const handleSubmit = (values: any) => mutate({
        ...values,
        authenticationToken: AuthenticationToken,
        firstName: values?.firstName,
        lastName: values?.lastName,
    })


    const handleBackToPrevStep = () => openModal(<Login/>, {className: "login"})


    const {minutes, seconds} = useTimer({sec: timer})

    const handleResendCode = () => resendCode({authenticationToken: AuthenticationToken})


    return (
        <>
            <ModalHeader>
                <div className="absolute left-[20px] top-[20px]">
                    <IoCloseOutline color="#4d4d4d" role={"button"} size={30} onClick={closeModal}/>
                </div>
            </ModalHeader>
            <ModalBody>
                <Logo/>
                <div className="back-prev-step" onClick={handleBackToPrevStep}>
                    <FaArrowRight size={25} color={"#424750"}/>
                </div>
                {RegisterRequired ? <div className="login__title">
                        <span>تکمیل ثبت نام</span>
                    </div> :
                    <div className="login__title">
                        <span>کد تایید را وارد کنید</span>
                    </div>}
                <Formik
                    initialValues={RegisterRequired ? initialValuesRegister : initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={RegisterRequired ? validationSchemaRegister : validationSchema}
                >
                    {(formikProps) => {
                        return (
                            <Form>
                                <>
                                    <div>
                                        {
                                            RegisterRequired ?
                                                <div className="mb-[30px]">
                                                    <Input error={error} type={'text'} label={'نام'}
                                                           name={"firstName"}/>
                                                    <Input error={error} type={'text'} label={'نام خانوادگی'}
                                                           name={"lastName"}/>
                                                </div> : ""
                                        }
                                        <div className="label">
                                            کد تایید را وارد کنید
                                            <span className="phone-number">{MobileNumber}</span>
                                        </div>

                                        <Input onKeyPress={(e) => {
                                            const {value, maxLength}:any = e.target;
                                            if (String(value).length >= maxLength) {
                                                e.preventDefault();
                                                return;
                                            }
                                        }} maxLength={5} className="text-center text-[18px] tracking-[11px]"
                                               placeholder={ new Array(5).fill("-").join('')}
                                               error={error} type={'number'} label={''}
                                               name={"OtpCode"}/>

                                        {/*<Code error={error || ResendLoginRegisterOtpCodeError} getValue={(value) => {*/}
                                        {/*    formikProps.setFieldValue('otpCode', value)*/}
                                        {/*}}/>*/}

                                        {error && error?.status > 400 ?
                                            <div className={"error"}>{error?.response.data}</div> : ""}
                                        <AutoSubmitToken/>
                                    </div>
                                    <Button
                                        type={"submit"} loading={isPending} text={"ادامه"}
                                        className=""/>
                                </>
                            </Form>
                        )
                    }}
                </Formik>
                <div className="sms-confirm--bottom">
                    {minutes === '00' && seconds == '00' ?
                        <button type="button" className="sms-confirm--retrieve" onClick={handleResendCode}>
                            ارسال مجدد کد تأیید برای شما
                        </button> :
                        <div className="sms-confirm--timer-holder">
                            ارسال مجدد کد تا :
                            <span className="sms-confirm---code-counter " id="stm-counter"> {minutes}:{seconds} </span>
                        </div>
                    }
                </div>
            </ModalBody>
        </>
    );
};

export default Otp;