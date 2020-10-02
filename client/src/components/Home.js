import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProductList from '../containers/ProductList';
import CustomHeader from './CustomHeader';
import { Footer, FooterTab, Button } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LoginForm from '../containers/LoginForm';
import SignUpForm from '../containers/SignUpForm';
import { getData } from '../helpers/asyncStorageHelper'
import { connect } from 'react-redux'
import { logOut } from '../actions';



class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: ''

    }
  }
  async componentWillMount() {
    console.log('trigered')
    const data = await getData();
    this.setState({ token: data })
  }
  handleLogOut = async () => {

    this.props.logOut(this.state.token, () => {
      this.setState((state) => ({
        token: '',
      }))
    });
  }

  //if cannot navigation into the see detail you need to add super above
  render() {

    console.log('token inside render home:', this.props.token);
    return (

      <View style={styles.productBox}>
        <CustomHeader />
        <View style={styles.content}>
          <ProductList navigation={this.props.navigation} />
          {/* <LoginForm navigation={this.props.navigation} /> */}
          {/* <SignUpForm /> */}
        </View>

        <Footer style={styles.footerParent}>
          {this.state.token ?
            <FooterTab style={styles.footer}>
              <Button vertical onPress={() => this.props.navigation.navigate('Add')}>
                <MaterialIcons name={'add'} color="gold" size={30} />
                <Text style={styles.whiteColor}>Add Product</Text>
              </Button>
              <Button vertical>
                <MaterialIcons name={'home'} color="gold" size={30} />
                <Text style={styles.whiteColor}>Home</Text>
              </Button>
              <Button vertical onPress={this.handleLogOut}>
                <AntDesign name={'logout'} color="gold" size={25} />
                <Text style={styles.whiteColor}>Log Out</Text>
              </Button>
            </FooterTab>
            :
            <FooterTab style={styles.footer}>
              <Button vertical>
                <Entypo name={'images'} color="gold" size={25} />
                <Text style={styles.whiteColor}>Feed</Text>
              </Button>
              <Button vertical>
                <MaterialIcons name={'home'} color="gold" size={30} />
                <Text style={styles.whiteColor}>Home</Text>
              </Button>
              <Button vertical onPress={() => this.props.navigation.replace('LogIn')}>
                <AntDesign name={'login'} color="gold" size={25} />
                <Text style={styles.whiteColor}>Log In</Text>
              </Button>
            </FooterTab>

          }
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



const mapDispatchToProps = (dispatch) => ({
  logOut: (token, cb) => dispatch(logOut(token, cb)),

});

export default connect(
  null,
  mapDispatchToProps
)(Home);
