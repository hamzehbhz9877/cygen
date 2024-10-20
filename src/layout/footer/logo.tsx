import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="logo-box">
            <Link href="https://pars.parskalas.com"><Image width={100} height={100}
                src="https://pars.parskalas.com/wp-content/uploads/2022/07/parskala-types.png"
                alt="پارس کالا"/></Link>
        </div>

    );
};

export default Logo;