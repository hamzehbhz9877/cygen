import React from 'react';
import {findKey} from "@/helpers/client";
import Link from "next/link";
import Image from "next/image";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetAllActivePluginsQuery} from "@/services/Plugin";
import {GetDynamicLinkPositionsQuery} from "@/services/DynamicLink";

const DynamicLink = () => {
    const {data: widget} = useSuspenseQuery(GetAllActivePluginsQuery)
    const {data} = useSuspenseQuery(GetDynamicLinkPositionsQuery)

    if (widget.includes('Widgets.DynamicLink'))
        return (
            <div className="page-promotes">
                <ul>
                    {
                        findKey(11, data)?.map(d => {
                            return (
                                <li key={d.Id}>
                                    <Link href={d.Url} target={d.OpenInNewPage ? "_blank" : "_self"}>
                                        {d.Icon ?
                                            <Image className={""} alt={d.Name} src={d.Name} width={18}
                                                   height={18}/> : ""}
                                        {d.Name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    else return null
};

export default DynamicLink;