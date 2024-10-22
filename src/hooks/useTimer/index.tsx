import {useEffect, useState} from "react";


type Props = {
    sec: number
}

const useTimer = ({sec}:Props) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        console.log("sec",sec)
        const minutes = Math.floor(sec / 60);
        const seconds = sec - minutes * 60;

        setMinutes(minutes)
        setSeconds(seconds)
    },[sec])

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