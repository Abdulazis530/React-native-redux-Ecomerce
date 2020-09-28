import React, { Component } from 'react';
import { loadProducts, resetProducts } from '../actions';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import Product from '../components/Product';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            limit:4,
        };
    }
    componentDidMount() {
        console.log('here inside did mount');

        this.props.loadProducts(this.state.page, this.state.limit);
    }

    componentWillUnmount() {
        console.log('here inside did UNmount');

        this.props.resetProducts();
    }
    fetchData = () => {
        if (this.state.page < this.props.totalPage) {
            this.setState(
                state => ({ page: state.page + 1 }),
                () => {
                    this.props.loadProducts(this.state.page, this.state.limit);
                });
        }
    }

    render() {
        console.log('inside the productList')
        console.log((this.props.navigation))
        return (
            <View >
                <FlatList
                    data={this.props.products}
                    onEndReached={this.fetchData}
                    ListFooterComponent={this.renderFooter}
                    renderItem={({ item }) => <Product
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        brand={item.brand}
                        detail={item.detail}
                        images={item.images}
                        rate={item.rate}
                        navigation={this.props.navigation}
                    />}
                    numColumns={2}
                    keyExtractor={item => item.id.toString()}
                    onEndReachedThreshold={1}
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
