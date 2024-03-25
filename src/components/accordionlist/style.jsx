import styled from '@emotion/styled';
import theme from '../../theme-config';

const AccordionItem = styled('div')`
  label: accordion-item;
  margin-bottom: 10px;
  box-shadow: 0 2px 1px 0px ${theme.primary};
`;
const AccordionHeader = styled('div')`
  label: accordion-header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  cursor: pointer;
  background-color: ${theme.whiteSmoke};
`;
const AccordionContent = styled('div')`
  label: accordion-content;
  padding: 0 30px;
  background-color: ${theme.white};
  max-height: 0;
  overflow: hidden;
  transition: 0.5s all cubic-bezier(0, 1, 0, 1);
  &.show {
    transition: 0.5s all cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 9999px;
  }
`;
export { AccordionItem, AccordionHeader, AccordionContent };
