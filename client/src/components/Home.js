import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProductList from '../containers/ProductList';
import CustomHeader from './CustomHeader';
import { Footer, FooterTab, Button } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpForm';

export default class Home extends Component {
  render() {
    return (

      <View style={styles.productBox}>
        <CustomHeader />
        <View style={styles.content}>
          {/* <ProductList navigation={this.props.navigation} /> */}
          {/* <LoginForm /> */}
          <SignUpForm />
        </View>

        <Footer style={styles.footerParent}>
          <FooterTab style={styles.footer}>
            <Button vertical>
              <MaterialIcons name={'add'} color="gold" size={30} onPress={() => this.props.navigation.navigate('Add')} />
              <Text style={styles.whiteColor}>Add Product</Text>
            </Button>
            <Button vertical>
              <MaterialIcons name={'home'} color="gold" size={30} />
              <Text style={styles.whiteColor}>Home</Text>
            </Button>
            <Button vertical>
              <AntDesign name={'logout'} color="gold" size={25} />
              <Text style={styles.whiteColor}>Log Out</Text>
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
    backgroundColor: '#a2d5f2',
  },
  content: {
    flex: 1,
  },
  footerParent: {
    backgroundColor: 'gold',
    borderTopRightRadius: 20,
    elevation: 5,
  },
  footer: {
    backgroundColor: '#51adcf',
    paddingTop: 5,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  whiteColor: {
    color: 'white',
  },
  button: {
    width: '100%',
  },
  body: {
    flex: 1,
    paddingBottom: 10,
  },
  containerInput: {
    flexDirection: 'row',
    flex: 1,
  },
  containerAddImage: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 30,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    height: 40,
    width: '100%',
    paddingLeft: 15,
    borderRadius: 10,
    marginTop: 30,
    fontSize: 18,
    flex: 1,
  },
  label: {
    position: 'absolute',
    top: 5,
    left: 0,
    fontSize: 18,
  },
  textIcon: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },

});
