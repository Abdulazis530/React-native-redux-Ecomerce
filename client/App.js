import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import Home from './src/components/Home';
import Header from './src/components/Header';
import rootReducer from './src/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/chat';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle:()=><Header/>
    }
  },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#459DDE', height: 120 },
  }
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
