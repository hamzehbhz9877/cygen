import React from 'react';
import Image from "next/image";

//css
import "./index.scss"

type button=Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,"className">
type buttonType = {
    text: string
    icon?: React.ReactElement | null
    size?: 'small' | 'medium' | 'large';
    className?:string
} & button

const Button = ({icon=null, text,size="medium",className, ...rest}: buttonType) => {
    return (
        <button className={['button', `button--${size}`,className].join(' ')} {...rest}>
            {icon? <span className="button__icon">
                {icon}
            </span>:""
            }
            {text}
        </button>
    );
};

export default Button;