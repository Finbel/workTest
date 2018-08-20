import React, { Component } from 'react';
import './productImage.scss';

function fallbackSrc(ev) {
    ev.target.src = 'http://placekitten.com/75/75';
}

function ProductImage(props) {
    return <img className='product-image' src={props.url} onError={fallbackSrc} />;
}

export default ProductImage;
