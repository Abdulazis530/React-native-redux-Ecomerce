import React, {Component} from 'react';
import {  StyleSheet, View } from 'react-native';
import ProductList from '../containers/ProductList';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.commentBox}>
                <ProductList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    commentBox: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 0,
        margin:2 ,
        borderColor: 'grey',
        backgroundColor: 'white',
    },
    headerBox: {
        fontSize: 20,
        color:'black',
    },
});
