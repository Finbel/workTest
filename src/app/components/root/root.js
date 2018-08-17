import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategory } from '../../actions/categoryActions';
import ProductCard from '../productCard/productCard';
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
        return (
            <ProductCard/>
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
