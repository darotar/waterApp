import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { RoundButton } from '../../layout';
import { ResetIcon } from '../../icons';
import { connect } from '../../utils/connect';

class CancelButton extends PureComponent {
  onPress = (value) => {
    return () => {
      return value.changeResult({ cancel: true });
    }
  }
  
  render() {
    return (
      <TouchableOpacity onPress={this.onPress(this.props.store)}>
        <RoundButton>
          <ResetIcon />
        </RoundButton>
      </TouchableOpacity>
    );
  }
}

export default connect()(CancelButton);
