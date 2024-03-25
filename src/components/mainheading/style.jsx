import styled from '@emotion/styled';
import theme from '../../theme-config';

const MainTitle = styled('div')`
  label: main-title;
  color: ${theme.secondary};
  font-size: 40px;
  font-weight: bold;
  & span {
    color: ${theme.primary};
  }
`;

export { MainTitle };
