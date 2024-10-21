import {ModalBody, ModalFooter, ModalHeader} from "@/components/modal";
import Logo from "@/layout/header/top/logo";
import {Form, Formik} from "formik";
import {initialValues, validationSchema} from "@/components/login/validation";
import Button from "@/components/button/simple";
import {FaArrowRight} from "react-icons/fa6";


// css
import "./index.scss"
import useModal from "@/context/modal/useModal";
import Login from "@/components/login/index";
import React, {useState} from "react";
import useTimer from "@/hooks/useTimer";
import Code from "@/components/input/code/code";


type Props = {
    phone: string
}

const SubMissionCode = ({phone}: Props) => {


    const {openModal} = useModal()

    const handleSubmit = (values: any) => {
        console.log(values)
    }


    const handleBackToPrevStep = () => openModal(<Login/>, {className: "login"})



    const [timer,setTimer]=useState({sec: 0, min: 2})

    const {minutes, seconds} = useTimer({...timer})

    const handleTimer=()=>setTimer({sec: 0, min: 2})


    return (
        <>
            <ModalBody>
                <Logo/>
                <div className="back-prev-step" onClick={handleBackToPrevStep}>
                    <FaArrowRight size={25} color={"#424750"}/>
                </div>
                <div className="login__title">
                    <span>کد تایید را وارد کنید</span>
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
                                    <div>
                                        <div className="label">
                                            کد تایید را وارد کنید
                                            <span className="phone-number">{phone}</span>
                                        </div>

                                    <Code/>

                                    </div>
                                    <ModalFooter align={"center"}>
                                        <Button onClick={close} text={"ادامه"}
                                                className=""/>
                                    </ModalFooter>
                                </>
                            </Form>
                        )
                    }}

                </Formik>


                <div className="sms-confirm--bottom">

                    {minutes === '00' ? <button type="button" className="sms-confirm--retrieve" onClick={handleTimer}>
                            ارسال مجدد کد تأیید برای شما
                        </button> :
                        <div className="sms-confirm--timer-holder">
                            ارسال مجدد کد تا :
                            <span className="sms-confirm---code-counter " id="stm-counter"
                                  data-countdown-seconds="120"> {minutes}:{seconds} </span>
                        </div>
                    }
                </div>
            </ModalBody>
        </>
    );
};

export default SubMissionCode;