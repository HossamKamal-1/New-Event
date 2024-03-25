import styled from '@emotion/styled';
import theme from '../../theme-config';

const OverviewWrapper = styled('div')`
  label: overview-wrapper;
  text-align: center;
`;
const Title = styled('h2')`
  label: overview-title;
  color: #d4d4d4;
`;
const Description = styled('p')`
  label: overview-desc;
  line-height: 1.6;
  color: ${theme.gray};
`;
export { OverviewWrapper, Title, Description };
