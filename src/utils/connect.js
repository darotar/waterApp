import React, { PureComponent } from 'react';
import { AppConsumer } from '../components/AppProvider';


export const connect = () => (Component) => {
  return class extends PureComponent {
    render() {
      return (
        <AppConsumer>
          {(value) => (
            <Component store={value} />
          )}
        </AppConsumer>
      )
    }
  }
}