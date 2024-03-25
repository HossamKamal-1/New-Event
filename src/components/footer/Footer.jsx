import { socialLinksIconsList } from '../../constants/data';
import { Copyrights, FooterWrapper, SocialLink, SocialList } from './style';

function Footer() {
  return (
    <FooterWrapper id="footer">
      <div className="container">
        <div className="footer-content">
          <Copyrights>
            Copyrights &copy; 2018 Your Company | Developed By{' '}
            <span>Hossam Kamal</span>
          </Copyrights>
          <SocialList>
            {socialLinksIconsList.map((socialLink) => (
              <li className="social-item" key={socialLink.id}>
                <SocialLink href="#home">{socialLink.icon}</SocialLink>
              </li>
            ))}
          </SocialList>
        </div>
      </div>
    </FooterWrapper>
  );
}
export default Footer;
