import styled from '@emotion/styled';
import theme from '../../theme-config';

const CreativeSpeakersWrapper = styled('section')`
  label: creativespeakers-wrapper;
  background-color: ${theme.whiteSmoke};
  padding: 60px 0;
`;
const SpeakersIntro = styled('div')`
  label: speakers-intro;
  text-align: center;
  margin-bottom: 30px;
`;
const SpeakersDesc = styled('p')`
  label: speakers-desc;
  color: ${theme.gray};
`;
export { CreativeSpeakersWrapper, SpeakersIntro, SpeakersDesc };
