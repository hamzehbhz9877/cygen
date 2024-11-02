import React, {useEffect} from 'react';

// css
import "./index.scss"
import {getErrorFromServer} from "@/helpers/client";


type Props = {
    getValue: (value: string) => void
    error: any
}

const Code = ({getValue, error}: Props) => {

    // useEffect(() => {
    //     const inputs: any = document.querySelectorAll('.otp-input input');
    //
    //     inputs.forEach((input: any, index: number) => {
    //         input.addEventListener('input', (e: any) => {
    //             if (e.target.value.length > 1) {
    //                 e.target.value = e.target.value.slice(0, 1);
    //             }
    //             if (e.target.value.length === 1) {
    //                 if (index < inputs.length - 1) {
    //                     inputs[index + 1].focus();
    //                 } else {
    //                     // const otp=Array.from(inputs).map((input:any) => input.value).join('');
    //                 }
    //             }
    //             const otp = Array.from(inputs).map((input: any) => input.value).join('');
    //             getValue(otp)
    //         });
    //
    //         input.addEventListener('keydown', (e: any) => {
    //             if (e.key === 'Backspace' && !e.target.value) {
    //                 if (index > 0) {
    //                     inputs[index - 1].focus();
    //                 }
    //             }
    //             if (e.key === 'e') {
    //                 e.preventDefault();
    //             }
    //         });
    //     });
    // }, [])

    return (
        <div className="code-input">
            {/*<div className="otp-input">*/}
            {/*    <input type="number" min="0" max="9" autoFocus/>*/}
            {/*    <input type="number" min="0" max="9"/>*/}
            {/*    <input type="number" min="0" max="9"/>*/}
            {/*    <input type="number" min="0" max="9"/>*/}
            {/*    <input type="number" min="0" max="9"/>*/}
            {/*</div>*/}

            {/*{*/}
            {/*    error && error.status === 400 ?*/}
            {/*        <ul>*/}
            {/*            {getErrorFromServer(error?.response?.data, 'OtpCode').map((d, index) => {*/}
            {/*                return <li key={index}>{d}</li>*/}
            {/*            })}*/}
            {/*        </ul> : ''*/}
            {/*}*/}
        </div>
    );
};

export default Code;