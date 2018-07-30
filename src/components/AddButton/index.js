import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { RoundButton } from '../../layout';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { setResult } from '../../store/actions';

const mapDispatchToProps = dispatch => ({ setResult: (result) => dispatch(setResult(result)) });
const mapStateToProps = (store) => ({ store });

class AddButton extends PureComponent {
  onPress = () => {
    const { result } = this.props.store;
    const { setResult } = this.props;

    setResult(result);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <RoundButton>
          <Text>+</Text>
        </RoundButton>
      </TouchableOpacity>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
