import styled from '@emotion/styled';
import RegisterBg from '../../assets/images/register-bg.jpg';
import theme from '../../theme-config';
const RegisterWrapper = styled('section')`
  label: register-section;
  padding: 60px 0 80px 0;
  background-image: url(${RegisterBg});
  background-attachment: fixed;
  background-size: cover;
  background-position-y: center;
`;
const RegisterContent = styled('div')`
  label: register-content;
  display: flex;
  gap: 15px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const IntroWrapper = styled('div')`
  label: intro-wrapper;
  flex: 1;
`;
const RegisterFormWrapper = styled('div')`
  label: register-form-wrapper;
  flex: 0.6;
`;
const IntroHeading = styled('h3')`
  label: intro-heading;
  color: ${theme.white};
  font-size: 26px;
  span {
    color: ${theme.primary};
  }
`;
const IntroDesc1 = styled('p')`
  label: intro-desc-1;
  color: ${theme.white};
  line-height: 1.6;
  font-weight: bold;
  font-size: 18px;
`;
const IntroDesc2 = styled('p')`
  label: intro-desc-2;
  color: ${theme.gray};
  line-height: 1.6;
`;
const Input = styled('input')`
  label: input-field;
  display: block;
  width: 100%;
  margin-bottom: 15px;
  border: 2px solid ${theme.white};
  padding: 10px;
  border-radius: 6px;
  background-color: transparent;
`;
const SubmitBtn = styled('button')`
  label: submit-btn;
  background-color: ${theme.primary};
  color: ${theme.white};
  border-radius: 20px;
  padding: 10px 20px;

  font-weight: bold;
  cursor: pointer;
  font-size: 20px;
  width: fit-content;
  display: block;
  margin-left: auto;
  margin-right: 5px;
`;
export {
  RegisterWrapper,
  RegisterContent,
  IntroWrapper,
  RegisterFormWrapper,
  IntroHeading,
  IntroDesc1,
  IntroDesc2,
  Input,
  SubmitBtn,
};
