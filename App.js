

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import store from './store';
import { Container } from './src/layout';
import {
  Progressbar,
  Buttonsbar
} from './src/components';

window.STORE = store;

export default class App extends PureComponent {
  render() {
    return (
      <Container>
        <Provider store={store}>
          <View style={{width: '100%'}}>
            <Progressbar />
            <Buttonsbar />
          </View>
        </Provider>
      </Container>
    );
  }
}
