import {useEffect, useState} from "react";


type Props = {
    min: number,
    sec: number
}

const useTimer = ({min,sec}:Props) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        setMinutes(min)
        setSeconds(seconds)
    },[min,sec])

    useEffect(() => {
        const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });
    const format = (num: number): string => {
        return num < 10 ? '0' + num : num.toString();
    };

    return {
        minutes: format(minutes),
        seconds: format(seconds),
    }
}

export default useTimer;