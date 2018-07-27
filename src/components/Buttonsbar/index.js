import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { AddButton, CancelButton, GoalButton } from '../index';

class Buttonsbar extends PureComponent {
  render() {
    console.log(toSource);
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
