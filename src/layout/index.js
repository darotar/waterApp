import styled from 'styled-components';
import theme from '../utils/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white}
`;

export const Flex = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  position: ${props => props.absolute ? 'absolute' : 'relative'};
  height: 100%;
`;

export const RoundButton = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${theme.color.snowWhite};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-horizontal: 10px;
`;
