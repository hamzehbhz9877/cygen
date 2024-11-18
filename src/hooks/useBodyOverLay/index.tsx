
import React, {useEffect} from 'react';
import useOverlay from "@/context/overlay/useOverlay";

const useBodyOverLay = (isActive:boolean) => {
    const {toggleOverlay}=useOverlay()
    useEffect(() => {

        if (isActive)
            toggleOverlay(true)
        else
            toggleOverlay(false)
    }, [isActive])
};

export default useBodyOverLay;