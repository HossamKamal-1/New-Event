import {
  ButtonsContainer,
  IntroContent,
  IntroDate,
  IntroSubject,
  IntroWrapper,
  LearnLink,
  RegisterLink,
} from './style';

function IntroSection() {
  return (
    <IntroWrapper id="intro">
      <IntroContent>
        <IntroDate>July 22 - 26 In San Francisco, CA</IntroDate>
        <IntroSubject>Web Design Conference</IntroSubject>
        <ButtonsContainer>
          <LearnLink href="#home" className="learn-link">
            LEARN MORE
          </LearnLink>
          <RegisterLink href="#home" className="register-link">
            REGISTER NOW
          </RegisterLink>
        </ButtonsContainer>
      </IntroContent>
    </IntroWrapper>
  );
}
export default IntroSection;
