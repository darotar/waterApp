import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { AddButton, CancelButton, GoalButton } from '../index';
import moment from 'moment';

class Buttonsbar extends PureComponent {
  render() {
    console.log(moment().format('DD-MM-YY'));
    return (
      <ButtonsbarWrapper>
        <AddButton />
        <CancelButton />
        <GoalButton />
      </ButtonsbarWrapper>
    );
  }
}

const ButtonsbarWrapper = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export default Buttonsbar;
