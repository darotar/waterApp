import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { RoundButton } from '../../layout';
import { connect } from '../../utils/connect';

class GoalButton extends Component {
  state = {
    chosen: false
  }

  onPress = (value) => {
    return () => {
      if (this.state.chosen) {
        this.setState({ chosen: false });
        return value.changeGoal(2000);
      }
      
      this.setState({ chosen: true });
      return value.changeGoal(3000);
    }
  }
  
  render() {
    return (
      <TouchableOpacity onPress={this.onPress(this.props.store)}>
        <RoundButton>
          <Text>G</Text>
        </RoundButton>
      </TouchableOpacity>
    );
  }
}

export default connect()(GoalButton);
