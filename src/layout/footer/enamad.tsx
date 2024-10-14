import React from 'react';
import Image from "next/image";

type Props={
    link:string
}
const Enamad = ({link}:Props) => {
    return (
        <article className="codes">
            <a href="#"><Image width={73} height={73}
                src={link}
                alt=""/></a></article>
    );
};

export default Enamad;