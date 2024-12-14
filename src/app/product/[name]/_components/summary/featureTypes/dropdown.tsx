import React, {useEffect, useState} from 'react';

const DropdownList = ({data}) => {

    const [value, setValue] = React.useState(data.DefaultValue??'');

    useEffect(() => {
        const preSelected = data.Values.find(d => d.IsPreSelected)
        if (preSelected) {
            setValue(preSelected.Id);
        }
    }, []);

    return (
        <div>
            <label className={"mb-[5px] inline-block"}>{data.TextPrompt ? data.TextPrompt : data.Name}</label>
            <div className="max-w-sm w-[200px]">
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2"
                         stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 left-2 text-slate-700">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"/>
                    </svg>
                    <select value={value} onChange={(e) => setValue(e.target.value)}
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700
                             text-sm border border-slate-200 pl-1 pr-3 py-2 transition duration-300 ease
                             focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md
                             appearance-none cursor-pointer">
                        {data.Values.map((d, i) => {
                            return (
                                <option className="hover:bg-dynamic-color-from" key={i}
                                        value={d.Id}>{d.Name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default DropdownList;