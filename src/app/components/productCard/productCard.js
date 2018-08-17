import React, { Component } from 'react';
import './productCard.scss';

class ProductCard extends Component {

    numberWithSpaces(x) {
        return Math.round(parseInt(x,10)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    render() {
        const { name, info, retailerCount, minPrice, stars} = this.props;
        return (
            <div className="product-card">
                <img className='product-image' src="http://placekitten.com/60/50"/>
                <div className='product-stars'>{stars}</div>
                <div className='product-name'>{name}</div>
                <div className='consumer-info'>
                    fr. 
                    <span className='amount'>
                        {this.numberWithSpaces(minPrice)} kr
                    </span>
                    <span className='retailer-count'>
                        {retailerCount} butiker
                    </span>
                </div>
            </div>
        );
    }
}

export default ProductCard;
