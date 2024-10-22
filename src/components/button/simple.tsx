import React from 'react';
import Image from "next/image";

//css
import "./index.scss"
import Loader from "@/components/loading/loader";

type button=Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,"className">
type buttonType = {
    text: string
    icon?: React.ReactElement | null
    size?: 'small' | 'medium' | 'large';
    className?:string,
    loading?:boolean
} & button

const Button = ({icon=null, text,size="medium",className,loading, ...rest}: buttonType) => {
    return (
        <button className={['button', `button--${size}`,className].join(' ')} {...rest} disabled={loading||rest.disabled}>
            {icon? <span className="button__icon">
                {icon}
            </span>:""
            }
            {loading?<Loader/>:text}
        </button>
    );
};

export default Button;