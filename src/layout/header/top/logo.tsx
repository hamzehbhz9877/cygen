import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="logo">
            <Link href={"/"}>
                <Image alt={"image"} width={135} height={61}
                       src={"https://pars.parskalas.com/wp-content/uploads/2022/08/parskala-oringtype.png"}/>
            </Link>

        </div>
    );
};

export default Logo;