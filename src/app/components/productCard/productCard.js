import React, { Component } from 'react';
import './productCard.scss';
import ProductImage from '../productImage/productImage';
import ProductStars from '../productStars/productStars';
import ProductInfo from '../productInfo/productInfo';
import CompareButton from '../compareButton/compareButton';

class ProductCard extends Component {

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
                <div className='image-rating-container'>
                    <ProductImage url={imageURL} />
                    <ProductStars stars={stars} />
                </div>
                <ProductInfo
                    name={name}
                    info={info}
                    minPrice={minPrice}
                    retailerCount={retailerCount} />
                <div className="button-container">
                    <CompareButton link={link} />
                </div>
            </div>
        );
    }
}

export default ProductCard;
