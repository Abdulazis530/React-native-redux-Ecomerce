import React, { Component } from 'react';
import { loadProducts, resetProducts } from '../actions';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Product from '../components/Product';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            hasMore: true,
            limit:5,
        };
    }
    componentDidMount() {
        console.log('here inside did mount');
        this.props.loadProducts(this.state.page, this.state.limit);
    }

    componentWillUnmount() {
        this.props.resetProducts();
    }
    render() {
        console.log('here inside render productlist component');
        console.log(this.props.products);
        return (
            <View >
                <FlatList
                    data={this.props.products}
                    renderItem={({ item }) => <Product
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        brand={item.brand}
                        detail={item.detail}
                        images={item.images}
                        rate={item.rate}
                    />}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}


const mapStateToProps = (state) => ({
    products: state.products.data,
    totalPage: state.products.totalPage,

});

const mapDispatchToProps = (dispatch) => ({
    loadProducts: (page, limit) => dispatch(loadProducts(page, limit)),
    resetProducts: () => dispatch(resetProducts()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
