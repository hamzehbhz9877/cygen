
import React from 'react';
import "./cart.scss"
import CartHeader from "./layout/header";

export default async function CartLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="cart">
            <CartHeader/>
            {children}

        </div>
    );
};
