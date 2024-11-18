'use client'

import { useContext } from "react";
import { Popup } from "./index";

const usePopUp = () => {
    return useContext(Popup);
};

export default usePopUp;