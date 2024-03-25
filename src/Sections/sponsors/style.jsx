import styled from '@emotion/styled';
import theme from '../../theme-config';
const SponsorSectionWrapper = styled('section')`
  label: sponsor-section;
  padding: 80px 0;
`;
const SponsorHeadingWrapper = styled('div')`
  label: sponsor-heading-wrapper;
  text-align: center;
  margin-bottom: 60px;
`;
const SponsorDesc = styled('p')`
  label: sponsor-desc;
  color: ${theme.gray};
`;
const Img = styled('img')`
  label: sponsor-img;
  width: 100%;
`;
export { SponsorSectionWrapper, SponsorHeadingWrapper, SponsorDesc, Img };
