import styled from '@emotion/styled';
import ContactBg from '../../assets/images/contact.jpg';
import theme from '../../theme-config';
const ContactSectionWrapper = styled('section')`
  label: contact-section;
  padding: 80px 0;
  background-image: url(${ContactBg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center bottom;
  background-size: cover;
`;
const ContactContent = styled('div')`
  label: contact-content;
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 991px) {
    text-align: center;
    flex-direction: column;
    align-items: stretch;
    gap: 30px;
  }
`;
const ContactInfoWrapper = styled('div')`
  label: contact-info;
  flex: 1.4;
`;
const ContactDesc = styled('p')`
  label: contact-desc;
  color: ${theme.gray};
  line-height: 1.5;
`;
const DownloadLink = styled('a')`
  label: download-link;
  padding: 10px 35px;
  color: ${theme.white};
  background-color: ${theme.primary};
  border-radius: 15px;
  transition: 0.3s;
  font-size: 20px;
  font-weight: bold;
  width: fit-content;
  display: block;
  margin-top: 30px;
  :hover {
    background-color: ${theme.white};
    color: ${theme.primary};
  }
  @media (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
const ContactFormWrapper = styled('div')`
  label: contact-form-wrapper;
  flex: 1;
  padding: 60px 40px;
  background-color: ${theme.white};
  border-radius: 45px;
`;
const ContactTitle = styled('h2')`
  label: contact-title;
  color: ${theme.black};
  font-size: 36px;
  span {
    color: ${theme.primary};
  }
`;
const ContactInput = styled('input')`
  label: contact-input;
  display: block;
  width: 100%;
  border: none;
  padding: 10px;
  background-color: transparent;
  margin-bottom: 20px;
  ::placeholder {
    font-size: 18px;
    color: ${theme.gray};
    font-weight: bold;
  }
`;
const ContactTextArea = styled('textarea')`
  label: contact-text-area;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  height: 100px;
  border: none;
  resize: none;
  ::placeholder {
    font-size: 18px;
    color: ${theme.gray};
    font-weight: bold;
  }
`;
const SubmitFormBtn = styled('button')`
  label: submit-btn;
  background-color: ${theme.secondary};
  color: ${theme.white};
  padding: 10px 30px;
  font-size: 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: ${theme.secondary};
    background-color: ${theme.white};
  }
`;
export {
  ContactSectionWrapper,
  ContactContent,
  ContactInfoWrapper,
  ContactDesc,
  DownloadLink,
  ContactFormWrapper,
  ContactTitle,
  ContactInput,
  ContactTextArea,
  SubmitFormBtn,
};
