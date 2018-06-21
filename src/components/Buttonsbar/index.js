import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { AddButton, CancelButton, GoalButton } from '../index';

export default class Buttonsbar extends PureComponent {
  render() {
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
`;
