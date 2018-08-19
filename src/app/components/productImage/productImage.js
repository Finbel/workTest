import React, { Component } from 'react';
import './productImage.scss';

class ProductImage extends Component {

    fallbackSrc(ev) {
        ev.target.src = "http://placekitten.com/60/50";
    }

    render() {
        return <img className="product-image" src={this.props.url} onError={this.fallbackSrc} />;
    }

}

export default ProductImage;
