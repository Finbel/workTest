import React, { Component } from 'react';
import './productInfo.scss';

class ProductInfo extends Component {
    numberWithSpaces(price) {
        return Math.round(parseInt(price,10)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    makeEllipsis(name) {
        const limit = 50;
        if (name.length > limit) {
            const visibleName = name.substring(0,limit+1);
            const lastVisibleWord = visibleName.lastIndexOf(' ');
            return visibleName.substring(0,lastVisibleWord) + ' ...';
        } else {
            return name;
        }
    }

    render() {

        const { name,
            info,
            retailerCount,
            minPrice,
        } = this.props;

        return (
            <div className='info-container'>
                <div className='product-name'>{this.makeEllipsis(name)}</div>
                <div className='product-info'>{info}</div>
                <div className='consumer-info'>
                    <span>fr.
                        <span className='amount'>
                            {this.numberWithSpaces(minPrice) + ' kr'}
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

export default ProductInfo;
