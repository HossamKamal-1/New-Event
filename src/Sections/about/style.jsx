import styled from '@emotion/styled';
import theme from '../../theme-config';
const AboutWrapper = styled('section')`
  label: about-wrapper;
  padding: 80px 0;
`;
const AboutContent = styled('div')`
  label: about-content;
  display: flex;
  gap: 2rem;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
const AboutDescWrapper = styled('div')`
  label: about-desc;
  color: ${theme.gray};
  font-size: 18px;
  flex: 1;
`;
const AboutImgWrapper = styled('div')`
  label: about-desc;
  flex: 1;
`;
const AboutTitle = styled('span')`
  label: about-title;
  font-weight: bold;
`;

export {
  AboutContent,
  AboutTitle,
  AboutDescWrapper,
  AboutImgWrapper,
  AboutWrapper,
};
