'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const NProgressProviders = ({ children }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="2px"
                color="#4859f9"
                options={{ showSpinner: false }}
                shallowRouting
                disableSameURL
            />
        </>
    );
};

export default NProgressProviders;