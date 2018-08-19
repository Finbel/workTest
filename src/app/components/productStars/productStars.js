import React, { Component } from 'react';
import './productStars.scss';

class ProductStars extends Component {

    generateStars(stars) {
        const starSource = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg';
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
