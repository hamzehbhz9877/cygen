'use client'

import {useEffect, useState} from "react";

const useCountdown = (deadline) => {
    // Time is in seconds
    const [time, setTime] = useState<number>(0);


    useEffect(() => {
        if (deadline)
            setTime(deadline)
    }, [deadline])


    const decrement = () =>
        setTime((prevTime) => {
            return prevTime === 0 ? 0 : prevTime - 1;
        });

    useEffect(() => {
        const id = setInterval(decrement, 1000);
        return () => clearInterval(id);
    }, []);

    const format = (num: number): string => {
        return num < 10 ? '0' + num : num.toString();
    };

    return {
        days: format(Math.floor(time / (3600 * 24))),
        hours: format(Math.floor((time / 3600) % 24)),
        minutes: format(Math.floor((time / 60) % 60)),
        seconds: format(time % 60),
    };
};
export default useCountdown