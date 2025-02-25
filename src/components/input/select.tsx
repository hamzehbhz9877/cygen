import React, {useEffect, useState} from 'react';
import {FaAngleDown} from "react-icons/fa6";

import "./index.scss"
import {ErrorMessage, Field, useField} from "formik";

type Props = {
    label: string|React.ReactNode
    children: React.ReactNode
    getValue?: (data: any) => void
    name?:string
}

const Select = ({label, children, getValue,name}: Props) => {


    const [field, meta] = useField(name as string);

    useEffect(() => {
        if (getValue)
            getValue(meta.value)
    }, [meta]);

    return (
        <div className={"input select"}>
            <label className={"mb-[5px] simple__label inline-block"}>{label}</label>
            <div className="">
                <div className="relative">
                    <FaAngleDown size={15} stroke="currentColor"
                                 className="h-[24px] w-[24px] ml-1 absolute top-3.5 left-2 text-slate-700"/>
                    <Field as="select"
                           name={name}
                            className={`input-field ${meta.touched && meta.error ? 'input-field--error' : ""} w-full bg-transparent placeholder:text-slate-400 text-slate-700
                                text-sm  rounded-[11px] border-[2px]  p-[13px] transition duration-300 ease
                                focus:outline-none focus:border-slate-400  shadow-sm focus:shadow-md
                                appearance-none cursor-pointer`}>
                        {children}
                    </Field>
                </div>
                {name ? <ErrorMessage name={name} className="error" component="div"/> : ""}
            </div>

        </div>
    );
};

export default Select;