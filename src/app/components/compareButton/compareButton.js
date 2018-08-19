import React, { Component } from 'react';
import './compareButton.scss';

class CompareButton extends Component {

    render() {
        return (
            <a className='compare-button' href={'https://pricerunner.se'+this.props.link}>
                Jämför pris
            </a>);
    }

}

export default CompareButton;
