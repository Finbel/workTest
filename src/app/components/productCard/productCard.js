import React, { Component } from 'react';
import './productCard.scss';

class ProductCard extends Component {

    numberWithSpaces(x) {
        return Math.round(parseInt(x,10)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    makeEllipsis(s) {
        if (s.length > 36) {
            const visibleName = s.substring(0,37);
            const lastVisibleWord = visibleName.lastIndexOf(" "); 
            return visibleName.substring(0,lastVisibleWord) + " ...";
        } else {
            return s;
        }
    }

    render() {
        const { name, info, retailerCount, minPrice, stars} = this.props;
        return (
            <div className="product-card">
                <img className='product-image' src="http://placekitten.com/60/50"/>
                <div className='product-stars'>{stars}</div>
                <div className='product-name'>{this.makeEllipsis(name)}</div>
                <div className='consumer-info'>
                    <span>fr. 
                        <span className='amount'>
                            {this.numberWithSpaces(minPrice) + " kr"}
                        </span>
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
