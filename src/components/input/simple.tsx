import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {ErrorMessage, Field, useField} from "formik";


// css
import "./index.scss"

type propsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>;

interface Props extends propsType {
    type: "text" | "number" | "email" | "password" | 'hidden';
    label: string | React.ReactNode;
    name?: string;
    icon?: React.ReactNode
}


const Input = ({type, label, name, icon, ...rest}: Props) => {


    const [field, meta] = useField(name as string);

    return (
        <div className="input simple">

            <label className="simple__label">{label}</label>

            <div className="relative">
                <Field
                    name={name}
                    type={type}
                    className={`input-field ${meta.error ? 'input-field--error' : ""}
                 ${rest.className ?? ""}`}
                    {...rest}
                />

                {icon?
                <div className="input__icon">
                    {icon}
                </div>:""}
            </div>

            {name && <ErrorMessage name={name} className="error" component="div"/>}
        </div>
    );
};

export default Input;