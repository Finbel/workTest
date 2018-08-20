import React, { Component } from 'react';
import './productCard.scss';
import ProductImage from '../productImage/productImage';
import ProductStars from '../productStars/productStars';
import ProductInfo from '../productInfo/productInfo';
import CompareButton from '../compareButton/compareButton';

/*
    A wrapper for productCard that handles whether the card should be a link in itself or not.
*/
function ProductCardWrapper(props) {
    let wrapper = null;
    if (props.width<768) {
        wrapper = <a className='product-card' href={props.link}>{props.children}</a>;
    } else {
        wrapper = <div className='product-card' href={props.link}>{props.children}</div>;
    }
    return wrapper;
}

class ProductCard extends Component {

    /*
        Need state to manage window dimensions in order to decide whether the card should be a link in itself or have the link as a button. The following 18 lines come from:
        https://stackoverflow.com/a/42141641/4136445
    */
    constructor(props) {
        super(props);
        this.state = { width: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth});
    }

    render() {

        const {width} = this.state;

        const { name,
                imageURL,
                info,
                retailerCount,
                minPrice,
                stars,
                link
            } = this.props;

        const compareUrl = 'https://pricerunner.se'+link;
        const compareButton = width<768 ? null : <CompareButton link={compareUrl} />;

        return (
            <ProductCardWrapper width={width} link={compareUrl}>
                <div className='image-rating-container'>
                    <ProductImage url={imageURL} />
                    <ProductStars stars={stars} />
                </div>
                <ProductInfo
                    name={name}
                    info={info}
                    minPrice={minPrice}
                    retailerCount={retailerCount} />
                <div className='button-container'>
                    {compareButton}
                </div>
            </ProductCardWrapper>
        );
    }
}

export default ProductCard;
