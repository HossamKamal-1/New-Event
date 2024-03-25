import styled from '@emotion/styled';
import IntroBg from '../../assets/images/intro-bg.jpg';
import theme from '../../theme-config';
const IntroWrapper = styled('section')`
  label: intro-section;
  min-height: calc(100vh - 86.4px);
  position: relative;
  background-image: url(${IntroBg});
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 1199px) {
    & {
      min-height: calc(100vh - 54.4px);
    }
  }
`;
const IntroContent = styled('div')`
  label: intro-content;
  position: absolute;
  padding: 10px;
  width: 520px;
  max-width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.white};
`;
const IntroDate = styled('p')`
  font-size: 30px;
`
const IntroSubject = styled('h1')`
  font-size: 40px;
`
const ButtonsContainer = styled('div')`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const LearnLink = styled('a')`
  display: block;
  color: ${theme.white};
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid ${theme.white};
  transition: 0.3s;
  &:hover {
    color: #000;
    background-color: ${theme.white};
  }
`;
const RegisterLink = styled('a')`
  display: block;
  color: ${theme.white};
  font-weight: bold;
  padding: 10px 20px;
  background-color: ${theme.primary};
  border: 2px solid ${theme.primary};
`;

export {
  IntroWrapper,
  IntroContent,
  ButtonsContainer,
  LearnLink,
  RegisterLink,
  IntroDate,
  IntroSubject
};
