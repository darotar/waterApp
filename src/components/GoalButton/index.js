import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { RoundButton } from '../../layout';
import { connect } from 'react-redux';
import { setGoal } from '../../../store/actions';

const mapDispatchToProps = dispatch => ({ setGoal: () => dispatch(setGoal()) });

class GoalButton extends Component {
  state = {
    chosen: false
  }

  onPress = (value) => {
    this.props.setGoal();
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <RoundButton>
          <Text>G</Text>
        </RoundButton>
      </TouchableOpacity>
    );
  }
}

export default connect(null, mapDispatchToProps)(GoalButton);
