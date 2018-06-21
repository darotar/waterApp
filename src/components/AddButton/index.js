import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { RoundButton } from '../../layout';
import { Text } from 'react-native';
import { connect } from '../../utils/connect';

class AddButton extends PureComponent {
  render() {
    return (
      <TouchableOpacity onPress={this.props.store.changeResult}>
        <RoundButton>
          <Text>+</Text>
        </RoundButton>
      </TouchableOpacity>
    );
  }
}

export default connect()(AddButton);