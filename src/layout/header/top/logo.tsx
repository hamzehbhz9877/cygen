import React from 'react';
import Image from "next/image";

const Logo = () => {
    return (
        <div className="logo">
            <Image alt={"image"} width={135} height={61}
                   src={"https://pars.parskalas.com/wp-content/uploads/2022/08/parskala-oringtype.png"}/>
        </div>
    );
};

export default Logo;