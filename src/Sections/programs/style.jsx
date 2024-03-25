import styled from '@emotion/styled';
import theme from '../../theme-config';

const ProgramsWrapper = styled('section')`
  label: programs-section;
  padding: 80px 0;
`;
const ProgramsContent = styled('div')`
  label: programs-content;
  max-width: 940px;
`
const ProgramsDesc = styled('p')`
  label: programs-desc;
  color: ${theme.gray};
`;
const TabsButtons = styled('div')`
  label: tabs-buttons;
  display: flex;
  border-bottom: 2px solid ${theme.gray};
  margin-bottom: 30px;
`;
const TabSpan = styled('span')`
  label: tab-btn;
  padding: 20px 6px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  font-weight: bold;
  transition: 0.3s;
  &.active,
  &:hover {
    color: ${theme.primary};
    border-bottom: 2px solid ${theme.black};
  }
`;
export { ProgramsWrapper, ProgramsContent, ProgramsDesc, TabsButtons, TabSpan };
