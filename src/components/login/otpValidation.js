import * as Yup from "yup";


const initialValues = {
    otpCode: ''
}
const validationSchema = Yup.object({
    otpCode: Yup.string().min(5, "کد ورودی را بررسی کنید").required('لطفا کد ارسال شده را وارد کنید')
});

export {initialValues,validationSchema}
