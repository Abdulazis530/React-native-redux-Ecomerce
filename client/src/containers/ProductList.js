import React, { Component } from 'react';
import { loadProducts, resetProducts } from '../actions';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, View } from 'react-native';
import Product from '../components/Product';


class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            hasMore: true,
            limit: 3,
        };
    }
    componentDidMount() {
        this.props.loadProducts(this.state.page,this.state.limit);
    }

    componentWillUnmount() {
        this.props.resetProducts();
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <FlatList
                    data={this.props.products}
                    renderItem={({ item }) => <Product
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        brand={item.brand}
                        detail={item.detail}
                        image={item.image}
                        rate={item.rate}
                    />}
                    keyExtractor={item => item.id.toString()}
                /> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => ({
    products: state.products.data,
    totalPage: state.products.totalPage,

});

const mapDispatchToProps = (dispatch) => ({
    LoadProducts: (page, limit) => dispatch(loadProducts(page, limit)),
    resetProducts: () => dispatch(resetProducts()),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
