import * as Yup from "yup";


const initialValues = {
    otpCode: ''
}
const validationSchema = Yup.object({
    otpCode: Yup.string().min(5, "کد ورودی را بررسی کنید").required('لطفا کد ارسال شده را وارد کنید')
});

const initialValuesRegister = {
    otpCode: '',
    firstName:'',
    lastName:''
}
const validationSchemaRegister = Yup.object({
    otpCode: Yup.string().min(5, "کد ورودی را بررسی کنید").required('لطفا کد ارسال شده را وارد کنید'),
    firstName: Yup.string().required('لطفا نام را وارد کنید'),
    lastName: Yup.string().required('لطفا نام خانوادگی را وارد کنید'),
});

export {initialValues,validationSchema,initialValuesRegister,validationSchemaRegister}
