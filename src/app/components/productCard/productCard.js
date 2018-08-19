import React, { Component } from 'react';
import './productCard.scss';
// import star from './star2.svg';

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
    
    generateStars(stars) {
        const starSource = "https://image.flaticon.com/icons/svg/1040/1040230.svg";
        const numStars = Math.round(parseFloat(stars,10));
        let starList = []; 
        for (var i = 1; i <= numStars; i++) {
            starList.push(<img src={starSource} key={i} height="10" width="10"/>);
         }
        return starList;
    }

    fallbackSrc(ev) {
        ev.target.src = "http://placekitten.com/60/50";
    }

    render() {

        const { name, 
                imageURL, 
                info, 
                retailerCount, 
                minPrice, 
                stars
            } = this.props;
        
        return (
            <a className="product-link" href="">
                <div className="product-card">
                    <img className="product-image" src={imageURL}
                        onError={this.fallbackSrc} />
                    <div className='product-stars'>
                        <div>
                            {this.generateStars(stars)}
                        </div>
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
                </div>
            </a>
        );
    }
}

export default ProductCard;
