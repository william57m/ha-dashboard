import styled from '@emotion/styled';

export const CardTitle = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: ${props => props.theme.card.background.colorActive};
  color: ${props => props.theme.colors.textDark};
  padding-left: 10px;
  box-sizing: border-box;
  font-size: ${props => props.theme.card.name.size};
  font-weight: ${props => props.theme.card.name.weight};
`;
