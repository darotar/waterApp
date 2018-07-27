import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { resetResult } from '../../../store/actions';
import { RoundButton } from '../../layout';
import { ResetIcon } from '../../icons';

const mapDispatchToProps = dispatch => ({ resetResult: () => dispatch(resetResult()) });

class CancelButton extends PureComponent {
  render() {
    return (
      <TouchableOpacity onPress={this.props.resetResult}>
        <RoundButton>
          <ResetIcon />
        </RoundButton>
      </TouchableOpacity>
    );
  }
}

export default connect(null, mapDispatchToProps)(CancelButton);
