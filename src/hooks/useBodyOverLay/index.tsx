
import React, {useEffect} from 'react';

const useBodyOverLay = (isActive:boolean) => {
    useEffect(() => {
        const overlay = document.querySelector('.overlay')
        if (isActive)
            overlay.classList.add('active')
        else
            overlay.classList.remove('active')
    }, [isActive])
};

export default useBodyOverLay;