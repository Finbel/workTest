import React from 'react';
import './productInfo.scss';

function numberWithSpaces(price) {
    return Math.round(parseInt(price,10)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function makeEllipsis(name) {
    const limit = 50;
    if (name.length > limit) {
        const visibleName = name.substring(0,limit+1);
        const lastVisibleWord = visibleName.lastIndexOf(' ');
        return visibleName.substring(0,lastVisibleWord) + ' ...';
    } else {
        return name;
    }
}

function ProductInfo(props) {
    return (
        <div className='info-container'>
            <div className='product-name'>{makeEllipsis(props.name)}</div>
            <div className='product-info'>{props.info}</div>
            <div className='consumer-info'>
                <span>fr.
                    <span className='amount'>
                        {numberWithSpaces(props.minPrice) + ' kr'}
                    </span>
                </span>
                <span className='retailer-count'>
                    {props.retailerCount} butiker
                </span>
            </div>
        </div>
    );
}

export default ProductInfo;
