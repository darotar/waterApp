import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Realm from 'realm';
import theme from '../../utils/theme';
import { Flex } from '../../layout';

const mapStateToProps = ({
  result,
  volume,
  goal,
  filling
  }) => ({
    result,
    volume,
    goal,
    filling
  });

class Progressbar extends Component {

  state = {
    filling: new Animated.Value(0),
    realm: null
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
    const { filling } = this.state;
    const { result, goal } = this.props;

    return Animated.sequence([
      Animated.timing(filling, {
        duration: 250,
        toValue: nextProps.filling,
      }),
    ]).start();
  }

  onPress = (value) => {
    return () => {
      const { result, volume, goal } = value;

      value.changeResult();
    }
  }

  render() {
    const { result, goal} = this.props;
    const { filling } = this.state;

    const animatedStyle = {
      backgroundColor: theme.color.aqua,
      height: 80,
      position: 'absolute',
      top: 0,
      width: filling.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%']
      })
    };

    return (
        <View style={{width: '100%' }}>
          <ProgressbarWrapper />
          <Animated.View style={animatedStyle} />
          <Flex row absolute>
            <ProgressbarResult>{result}</ProgressbarResult>
            <ProgressbarSlash>/</ProgressbarSlash>
            <ProgressbarGoal>{goal}</ProgressbarGoal>
          </Flex>
        </View>
    );
  }
}

export default connect(mapStateToProps)(Progressbar);

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
