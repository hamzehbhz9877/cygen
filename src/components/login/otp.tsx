import {ModalBody} from "@/components/modal";
import Logo from "@/layout/header/top/logo";
import {ErrorMessage, Form, Formik} from "formik";
import Button from "@/components/button/simple";
import {FaArrowRight} from "react-icons/fa6";

// css
import "./index.scss"
import useModal from "@/context/modal/useModal";
import Login from "@/components/login/index";
import useTimer from "@/hooks/useTimer";
import Code from "@/components/input/code/code";
import {useMutation} from "@tanstack/react-query";
import {LoginRegisterVerification} from "@/services/shortLink";
import {showToast} from "@/helpers/react-toastify";
import useAuth from "@/context/authentication/useAuth";
import {initialValues, validationSchema} from "@/components/login/otpValidation";


type Props = {
    AuthenticationToken: string,
    MobileNumber: string,
    OtpExpireDateTotalSeconds: number,
    RegisterRequired: boolean
    resendCode: () => void
}

const Otp = ({MobileNumber, OtpExpireDateTotalSeconds, resendCode, AuthenticationToken}: Props) => {


    const {openModal,closeModal} = useModal()

    const {setCookie} = useAuth()


    const {mutate, isPending, error} = useMutation<any,any,any,any>({
        mutationFn: LoginRegisterVerification, onSuccess: (data) => {
            setCookie(data)
            closeModal()
            showToast("success", 'عملیات با موفقیت انجام شد')
        }
    });


    const handleSubmit = (values: any) => mutate({...values, authenticationToken: AuthenticationToken, firstName: "", lastName: ''})

    const handleBackToPrevStep = () => openModal(<Login/>, {className: "login"})


    const {minutes, seconds} = useTimer({sec:OtpExpireDateTotalSeconds})

    const handleResendCode = () => resendCode()




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
                    {(formikProps) => {
                        return (
                            <Form>
                                <>
                                    <div>
                                        <div className="label">
                                            کد تایید را وارد کنید
                                            <span className="phone-number">{MobileNumber}</span>
                                        </div>

                                        <Code getValue={(value) => {
                                            formikProps.setFieldValue('otpCode', value)
                                            if (value.length === 5)
                                                mutate({
                                                    otpCode: value,
                                                    authenticationToken: AuthenticationToken,
                                                    firstName: "",
                                                    lastName: ''
                                                })
                                        }}/>
                                        <ul>
                                            {error && error.response.data ?
                                                typeof error?.response?.data === 'string' ?
                                                    <li className="error">{error?.response?.data}</li> :
                                                    Object.values(error?.response?.data).map((err:any, index) =>
                                                        <li key={index} className="error">{err}</li>
                                                    ) : ""}
                                        </ul>
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
                            <span className="sms-confirm---code-counter " id="stm-counter"
                                  data-countdown-seconds="120"> {minutes}:{seconds} </span>
                        </div>
                    }
                </div>
            </ModalBody>
        </>
    );
};

export default Otp;