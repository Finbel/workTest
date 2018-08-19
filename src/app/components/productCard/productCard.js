import React, { Component } from 'react';
import './productCard.scss';
import ProductImage from '../productImage/productImage';
import ProductStars from '../productStars/productStars';


class ProductCard extends Component {

    numberWithSpaces(price) {
        return Math.round(parseInt(price,10)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    makeEllipsis(name) {
        if (name.length > 36) {
            const visibleName = name.substring(0,37);
            const lastVisibleWord = visibleName.lastIndexOf(" "); 
            return visibleName.substring(0,lastVisibleWord) + " ...";
        } else {
            return name;
        }
    }

    render() {

        const { name, 
                imageURL, 
                info, 
                retailerCount, 
                minPrice, 
                stars,
                link
            } = this.props;
        
        return (
            <div className="product-card">
                <div className='image-container'>
                    <ProductImage url={imageURL}/>
                    <ProductStars stars={stars} />
                </div>
                <div className="info-container">
                    <div className='product-name'>{this.makeEllipsis(name)}</div>
                    <div className='product-info'>{info}</div>
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
                <a className="compare-button" href={"https://pricerunner.se"+link}>
                    Jämför pris
                </a>
            </div>
        );
    }
}

export default ProductCard;
