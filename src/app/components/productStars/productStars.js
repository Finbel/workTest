import React from 'react';
import './productStars.scss';

function generateStars(stars) {
    const starSource = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg';
    const numStars = Math.round(parseFloat(stars,10));
    let starList = [];
    for (var i = 1; i <= numStars; i++) {
        starList.push(<img src={starSource} key={i} height='10' width='10' />);
     }
    return starList;
}

function ProductStars(props) {
    return (
        <div className='product-stars'>
            {generateStars(props.stars)}
        </div>
    );
}

export default ProductStars;
