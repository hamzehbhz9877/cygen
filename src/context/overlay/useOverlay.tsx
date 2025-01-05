'use client'
import { useContext as context } from "react";
import {OverlayProvider} from "@/context/overlay/index";

const UseModalContext = () => {
    return context(OverlayProvider);
};

export default UseModalContext;