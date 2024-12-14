import React from 'react';
import Image from "next/image";

const App = () => {
    return (
        <div className="foot-dn-app">
            <div className="dn-box">
                <a href="https://www.rtl-theme.com/parskala-wordpress-theme/">
                    <div className="dn-link">
                        <Image width={200} height={200} src="https://pars.parskalas.com/wp-content/uploads/2022/10/icon-app.png"
                             alt="Download app"/>
                        <span className="name-app">دانلود اپلیکیشن سیژن</span>
                    </div>
                </a>
                <div className="imgs-dn">

                    <a href="https://www.rtl-theme.com/parskala-wordpress-theme/">
                        <div className="img-dn-link">
                            <Image width={200} height={200} src="https://pars.parskalas.com/wp-content/uploads/2022/10/dn-app1.svg"
                                 alt="Download app"/>
                        </div>
                    </a>

                    <a href="https://www.rtl-theme.com/parskala-wordpress-theme/">
                        <div className="img-dn-link">
                            <Image width={200} height={200} src="https://pars.parskalas.com/wp-content/uploads/2022/10/dn-app2.svg"
                                 alt="Download app"/>
                        </div>
                    </a>

                    <a href="https://www.rtl-theme.com/parskala-wordpress-theme/">
                        <div className="img-dn-link">
                            <Image width={200} height={200} src="https://pars.parskalas.com/wp-content/uploads/2022/10/dn-app3.png"
                                 alt="Download app"/>
                        </div>
                    </a>


                    <a href="https://www.rtl-theme.com/parskala-wordpress-theme/">
                        <div className="img-dn-link">
                            <Image width={200} height={200} src="https://pars.parskalas.com/wp-content/uploads/2022/10/dn-app4.svg"
                                 alt="Download app"/>
                        </div>
                    </a>


                </div>
            </div>
        </div>
    );
};

export default App;