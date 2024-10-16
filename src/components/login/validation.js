import * as Yup from "yup";

const initialValues = {
    phone: ''
}

const validationSchema = Yup.object({
    phone: Yup.string()
        .required("شماره موبایل یا ایمیل الزامی است")
        .test('test-name', 'شماره موبایل یا ایمیل نامعتبر است',
            function (value) {
                var emailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

                const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change this regex based on requirement
                let isValidEmail = emailRegex.test(value);
                let isValidPhone = phoneRegex.test(value);
                if (!isValidEmail && !isValidPhone) {
                    return false;
                }
                return true;
            })
});

export {initialValues, validationSchema}