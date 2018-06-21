import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, View, Animated } from 'react-native';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Flex } from '../../layout';
import { connect } from '../../utils/connect';

class Progressbar extends PureComponent {
  onPress = (value) => {
    return () => {
      const { result, volume, goal } = value;

      value.changeResult();
    }
  }

  render() {
    const { store } = this.props;

    const animatedStyle = {
      backgroundColor: theme.color.aqua,
      height: 80,
      position: 'absolute',
      top: 0,
      width: store.filling.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%']
      })
    };
    

    return (
      <TouchableWithoutFeedback style={{width: '100%'}} onPress={this.onPress(store)}>
        <View style={{width: '100%' }}>
          <ProgressbarWrapper />
          <Animated.View style={animatedStyle} />
          <Flex row absolute>
            <ProgressbarResult>{store.result}</ProgressbarResult>
            <ProgressbarSlash>/</ProgressbarSlash>
            <ProgressbarGoal>{store.goal}</ProgressbarGoal>
          </Flex>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect()(Progressbar);

const ProgressbarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  background-color: ${theme.color.lightGray}
`;

const ProgressbarResult = styled.Text`
  font-size: 35px;
  font-weight: bold;
`;

const ProgressbarSlash = styled.Text`
  font-size: 30px;
`;

const ProgressbarGoal = styled.Text`
  font-size: 25px;
`;

