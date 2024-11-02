import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {ErrorMessage, Field, useField} from "formik";


// css
import "./index.scss"
import {getErrorFromServer} from "@/helpers/client";

type propsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>;

interface Props extends propsType {
    type: "text" | "number" | "email" | "password" | 'hidden';
    label?: string | React.ReactNode;
    name?: string;
    icon?: React.ReactNode
    error?: any
}


const Input = ({type, label, name, error, icon, className,...rest}: Props) => {


    const [field, meta] = useField(name as string);

    return (
        <div className="input simple">
            {
                label ? <label className="simple__label">{label}</label> : ""
            }


            <div className="relative">
                <Field
                    name={name}
                    type={type}
                    className={`input-field ${meta.error ? 'input-field--error' : ""} ${className ?? ""}`}
                    {...rest}
                />

                {icon ?
                    <div className="input__icon">
                        {icon}
                    </div> : ""}
            </div>

            {error && error.status===400 ?
                <ul>
                    {getErrorFromServer(error?.response?.data, name).map((d, index) => {
                        return <li key={index} className="error">{d}</li>
                    })}
                </ul>
                : name ? <ErrorMessage name={name} className="error" component="div"/> : ""
            }
        </div>
    );
};

export default Input;