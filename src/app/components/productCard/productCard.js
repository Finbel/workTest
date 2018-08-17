import React, { Component } from 'react';
import './productCard.scss';

class ProductCard extends Component {

    render() {
        return (
            <div className="product-card">
                {JSON.stringify(this.props)}
            </div>
        );
    }
}

export default ProductCard;
