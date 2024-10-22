import React from 'react';
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import useAuth from "@/context/authentication/useAuth";

const DashboardMenu = () => {
    const {resetCookie}=useAuth()

    return (
        <div className="dashboard">
            <ul>
                <li>
                    <Link href="/">
                        <FaRegCircleUser size={30} color={"#767676"}/>
                        پیگیری سفارش
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <FaRegCircleUser size={30} color={"#767676"}/>
                        پیشخوان
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <FaRegCircleUser size={30} color={"#767676"}/>
                        سفارش ها
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <FaRegCircleUser size={30} color={"#767676"}/>
                        علاقه مندی ها
                    </Link>
                </li>
                <li className="log-out" onClick={resetCookie}>
                    <Link href="/">
                        <TbLogout2 size={30} color={"#767676"}/>
                        Log out
                    </Link>
                </li>
            </ul>

        </div>
    );
};

export default DashboardMenu;