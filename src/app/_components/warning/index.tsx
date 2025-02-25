import React from 'react';

const Warnings = ({data}) => {
    return (
        <div
            className="warnings">
            <ul className={"flex flex-col gap-[15px]"}>
                {data?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Warnings;