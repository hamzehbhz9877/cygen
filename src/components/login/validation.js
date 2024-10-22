import * as Yup from "yup";

const initialValues = {
    phone: ''
}

const validationSchema = Yup.object({
    phone: Yup.string()
        .required("شماره همراه الزامی است")
        .test('test-name', 'شماره همراه نامعتبر است',
            function (value) {
                // var emailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

                const phoneRegex = /^(\+9|0)?9\d{9}$/ // Change this regex based on requirement
                // let isValidEmail = emailRegex.test(value);
                let isValidPhone = phoneRegex.test(value);
                if (!isValidPhone) {
                    return false;
                }
                return true;
            })
});

export {initialValues, validationSchema}