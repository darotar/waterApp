

import React, { PureComponent } from 'react';
import { Container } from './src/layout';
import {
  Progressbar,
  AppProvider,
  Buttonsbar
} from './src/components';

export default class App extends PureComponent {
  render() {
    return (
      <Container>
        <AppProvider>
          <Progressbar />
          <Buttonsbar />
        </AppProvider>
      </Container>
    );
  }
}
