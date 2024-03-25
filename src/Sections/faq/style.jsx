import theme from '../../theme-config';
import styled from '@emotion/styled';

const FAQSectionWrapper = styled('section')`
  label: faq-section;
  padding: 80px 0;
`;
const FAQHeadingWrapper = styled('div')`
  label: heading-wrapper;
  text-align: center;
  margin-bottom: 60px;
`;
const HeadingTitle = styled('h2')`
  label: heading-title;
  font-size: 30px;
  span {
    color: ${theme.primary};
  }
`;
const HeadingDesc = styled('p')`
  label: heading-desc;
  font-weight: 500;
  color: ${theme.gray};
`;
const FaqContent = styled('div')`
  label: faq-content;
  max-width: 850px;
  margin: 0 auto;
`;
export {
  FAQSectionWrapper,
  FAQHeadingWrapper,
  HeadingTitle,
  HeadingDesc,
  FaqContent,
};
