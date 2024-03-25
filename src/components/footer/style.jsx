import styled from '@emotion/styled';
import theme from '../../theme-config';

const FooterWrapper = styled('footer')`
  label: footer;
  padding: 80px 0;
  background-color: ${theme.white};
  text-align: center;
`;
const Copyrights = styled('p')`
  label: copyrights;
  color: ${theme.gray};
  font-weight: bold;
  margin-bottom: 20px;
  span {
    color: ${theme.primary};
  }
`;
const SocialList = styled('ul')`
  label: social-list;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 1.2rem;
`;
const SocialLink = styled('a')`
  label: social-item-link;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: ${theme.secondary};
  background-color: transparent;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
`;
export { FooterWrapper, Copyrights, SocialList, SocialLink };
