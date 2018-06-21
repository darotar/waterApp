import React, { Component } from 'react';
import { Animated } from 'react-native';

const Context = React.createContext();

export class AppProvider extends Component {
  state = {
    goal: 2000,
    result: 0,
    volume: 200,
    data: [],
    filling: new Animated.Value(0)
  }

  _animateFilling = (options) => {
    const {
      result,
      volume,
      filling,
      goal
    } = this.state;

    const currentRes = options.cancel ? result - volume : options.goalChanged ? result : result + volume;

    return Animated.sequence([
      Animated.timing(filling, {
        duration: 250,
        toValue: (currentRes) / (options.goal || goal) * 100,
      }),
    ]).start();
  }

  _setVolume = (volume) => this.setState({ volume });

  _setResult = (options = {}) => {
    const {
      result,
      volume,
      filling,
      goal
    } = this.state;

    if (options.cancel) {
      if (result) {
        this._animateFilling(options);
    
        return this.setState({ result: (result < volume) ? 0 : result - volume });
      }
      
      return null;
    }

    this._animateFilling(options);

    return this.setState({ result: result + volume });
  }

  _setGoal = (goal) => {
    this.setState({ goal });

    return this._animateFilling({ goalChanged: true, goal });
  }

  render() {
    const {
      goal,
      result,
      volume,
      filling
    } = this.state;

    const contextValue = {
      goal,
      result,
      volume,
      filling,
      changeVolume: this._setVolume,
      changeResult: this._setResult,
      changeGoal: this._setGoal,
    };

    return (
      <Context.Provider value={contextValue}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const AppConsumer = Context.Consumer;
