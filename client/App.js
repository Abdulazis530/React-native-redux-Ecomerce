import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import Home from './src/components/Home';
import DetailProduct from './src/components/DetailProduct';
import AddForm from './src/containers/AddForm';
import LoginForm from './src/containers/LoginForm';
import SignUpForm from './src/containers/SignUpForm';
import rootReducer from './src/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/ecomerce';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Add: {
    screen: AddForm,
    navigationOptions: {
      headerShown: false,
    },
  },
  Detail: {
    screen: DetailProduct,
    navigationOptions: {
      headerShown: false,
    },
  },
  LogIn: {
    screen: LoginForm,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignUp: {
    screen: SignUpForm,
    navigationOptions: {
      headerShown: false,
    },
  },

}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#459DDE' },
  },
});

const AppContainer = createAppContainer(RootStack);



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
