import * as Yup from "yup";


const initialValues = {
    OtpCode: ''
}
const validationSchema = Yup.object({
    OtpCode: Yup.string().min(5, "").required('لطفا کد ارسال شده را وارد کنید')
});

const initialValuesRegister = {
    OtpCode: '',
    firstName:'',
    lastName:''
}
const validationSchemaRegister = Yup.object({
    OtpCode: Yup.string().min(5, "کد تایید باید ۵ رقمی باشد").required('مقدار وارد شده باید فقط شامل عدد باشد.'),
    firstName: Yup.string().required('لطفا نام را وارد کنید'),
    lastName: Yup.string().required('لطفا نام خانوادگی را وارد کنید'),
});

export {initialValues,validationSchema,initialValuesRegister,validationSchemaRegister}
