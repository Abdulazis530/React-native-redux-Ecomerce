import React, { Component } from 'react';
import { StyleSheet, View,Text,Image } from 'react-native';
import ProductList from '../containers/ProductList';
import CustomHeader from './CustomHeader';
import { Footer, FooterTab,Button,Icon } from 'native-base';
import add from '../assets/icons/add.png';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.productBox}>
               

                <CustomHeader />
                <View style={styles.content}>
                    <ProductList />
                </View>

                <Footer style={styles.footer}>
                    <FooterTab style={styles.footer}>
                        <Button vertical>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>

                            <Text>Camera</Text>
                        </Button>
                        <Button vertical>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    productBox: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    footer: {
        backgroundColor: '#459DDE',
    },
    addIcon:{
        position:'absolute',
        backgroundColor:'black',
        top:-100,
        left:0,
        width:100,
        height:100,
        zIndex:1
    }

});
