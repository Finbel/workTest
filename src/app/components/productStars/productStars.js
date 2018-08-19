import React, { Component } from 'react';
import './productStars.scss';

class ProductStars extends Component {

    generateStars(stars) {
        const starSource = 'https://image.flaticon.com/icons/svg/1040/1040230.svg';
        const numStars = Math.round(parseFloat(stars,10));
        let starList = [];
        for (var i = 1; i <= numStars; i++) {
            starList.push(<img src={starSource} key={i} height='10' width='10' />);
         }
        return starList;
    }

    render() {
        return (
            <div className='product-stars'>
                {this.generateStars(this.props.stars)}
            </div>
        );
    }

}

export default ProductStars;
