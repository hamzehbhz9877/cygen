import React from 'react';
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetLicenseLogosQuery} from "@/services/LicenseLogo";
import {GetAllActivePluginsQuery} from "@/services/Plugin";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";

const LicenseLogo = () => {
    const {data} = useSuspenseQuery(GetLicenseLogosQuery)
    const {data: widget} = useSuspenseQuery(GetAllActivePluginsQuery)
    return (
        widget.includes('Widgets.LicenseLogo') ?
            <div className="foot-box enmads">
                {data.map((link, index: number) => {
                    if (link.Script)
                        return (<div key={index}>
                            {parse(link.Script)}
                        </div>)
                    else
                        return <Link href={link.Url ?? ''} key={index}>
                            <Image src={link.Picture?.ImageUrl ?? null} alt={link.Picture?.AlternateText ?? null}
                                   className={"cursor-pointer"}
                                   title={link.Picture?.Title ?? null} width={60} height={60}/>
                        </Link>
                })}
            </div> : null
    );
};

export default LicenseLogo;