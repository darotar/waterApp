import React, { PureComponent } from 'react';
import { Svg, Path } from 'react-native-svg';
import theme from '../utils/theme';

export default class ResetIcon extends PureComponent {
  render() {
    return (
      <Svg
        width="50"
        height="50"
      >
        <Path
          fill={theme.color.blue}
          x="9"
          y="8"
          d="M16 2c-4.418 0-8.418 1.791-11.313 4.687l-4.686-4.687v12h12l-4.485-4.485c2.172-2.172
          5.172-3.515 8.485-3.515 6.627 0 12 5.373 12 12 0 3.584-1.572 6.801-4.063 9l2.646 3c3.322-2.932 5.417-7.221
          5.417-12 0-8.837-7.163-16-16-16z"
        />
      </Svg>
    );
  }
}