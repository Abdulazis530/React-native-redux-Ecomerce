import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ProductList from '../containers/ProductList';
import CustomHeader from './CustomHeader';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
                        <MaterialIcons name={'photo'} color='white' size={30}/>
                            <Text style={styles.whiteColor}>Feed</Text>
                        </Button>
                        <Button vertical>
                            <MaterialIcons name={'home'} color='white' size={30}/>
                            <Text style={styles.whiteColor}>Home</Text>
                        </Button>
                        <Button vertical>
                            <AntDesign name={'login'} color='white' size={30}/>
                            <Text style={styles.whiteColor}>Log In</Text>
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
    whiteColor:{
        color:'white',
    }

});
