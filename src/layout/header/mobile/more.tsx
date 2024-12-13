import React from 'react';
import Link from "next/link";
import {PiPlayLight} from "react-icons/pi";

const More = () => {
    return (
        <div className="more">
            <ul>
                <li>
                    <Link rel="nofollow"
                          href="/">
                        <PiPlayLight size={22} className="me-[15px]" color={"#4b4f58"} />
                        <span>ویدیو محصول</span>
                    </Link>
                </li><li>
                    <Link rel="nofollow"
                          href="/">
                        <PiPlayLight size={22} className="me-[15px]" color={"#4b4f58"} />
                        <span>ویدیو محصول</span>
                    </Link>
                </li><li>
                    <Link rel="nofollow"
                          href="/">
                        <PiPlayLight size={22} className="me-[15px]" color={"#4b4f58"} />
                        <span>ویدیو محصول</span>
                    </Link>
                </li>
            </ul>

        </div>
    );
};

export default More;