import React from 'react';
import Root from '../components/root/root';

export default function RootContainer() {
    return (
        <div>
            <header className="header">
                <strong className="header__pricerunner">
                    PriceRunner
                </strong>
                <span className="header__codetest">code test</span>
            </header>
            <div className="container">
                <div className="content">
                    <Root />
                </div>
            </div>
        </div>
    );
}
