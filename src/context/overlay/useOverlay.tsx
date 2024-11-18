'use client'
import { useContext as context } from "react";
import {OverlayProvider} from "@/context/overlay";

const UseModalContext = () => {
    return context(OverlayProvider);
};

export default UseModalContext;