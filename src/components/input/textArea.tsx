import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {ErrorMessage, Field, useField} from "formik";


// css
import "./index.scss"
import {getErrorFromServer} from "@/helpers/client";

type propsType = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement>;

interface Props extends propsType {
    label?: string | React.ReactNode;
    name?: string;
    icon?: React.ReactNode
    error?: any
}


const TextArea = ({label, name, error, icon, className, ...rest}: Props) => {


    const [field, meta] = useField(name as string);

    return (
        <div className="input simple">
            {
                label ? <label className="simple__label">{label}</label> : ""
            }


            <div className="relative">
                <textarea
                    name={name}
                    value={meta.value}
                    onChange={field.onChange}
                    className={`input-field w-full p-4 h-28 resize-none rounded-lg border border-gray-300 caret-primary-200 ${meta.touched && meta.error ? 'input-field--error' : ""} ${className ?? ""}`}
                    {...rest}
                >

                </textarea>
            </div>

            {error && error.status === 400 ?
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

export default TextArea;