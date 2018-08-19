import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategory } from '../../actions/categoryActions';
import ProductCard from '../productCard/productCard';
import { getProductImageLink } from '../../utils/product';
import './root.scss';

class Root extends Component {
    componentDidMount() {
        this.props.dispatch(loadCategory());
    }

    render() {
        /*
         * You can get the category data from the category prop:
         * const { category } = this.props;
         */
        const { category } = this.props;
        let productCards = null;
        if (category.get('products')) {
            productCards = category.get('products').map((product,i) => 
                    <ProductCard 
                        key={i}
                        link={product.get('comparePricesLink')}
                        imageURL={getProductImageLink(product)}
                        name={product.get('name')} 
                        info={product.get('shortDescription')}
                        retailerCount={product.get('retailerCount')}
                        minPrice={product.get('localMinPrice').get("value")}
                        stars={product.get('avgRating')}/>
                );
        }
        return (
            <div className="root">
                {productCards}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { categoryReducers } = state;

    return {
        category: categoryReducers.get('category')
    };
}

export default connect(mapStateToProps)(Root);
