import React from 'react';
import './compareButton.scss';

function CompareButton(props) {
    return (
        <a className='compare-button' href={'https://pricerunner.se'+props.link}>
            Jämför pris
        </a>);
}

export default CompareButton;
