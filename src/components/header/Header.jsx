import { useState } from 'react';
import { navlinkList } from '../../constants/data';
import {
  BrandLink,
  HeaderWrapper,
  LinksWrapper,
  Navbar,
  NavbarLink,
  NavbarList,
  ToggleMenuBtn,
} from './style';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../theme-config';

function Header() {
  const [activeLink, setActiveLink] = useState('intro');
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Navbar>
      <div className="container">
        <HeaderWrapper>
          <div className="brand">
            <BrandLink href="#home">
              New <span>Event</span>
            </BrandLink>
          </div>
          <ToggleMenuBtn onClick={() => setToggleMenu((prev) => !prev)}>
            <FontAwesomeIcon
              icon={faBars}
              style={{ transition: '0.3s' }}
              size="xl"
              color={toggleMenu ? theme.active : 'white'}
            />
          </ToggleMenuBtn>
          <LinksWrapper className={toggleMenu ? 'active' : ''}>
            <NavbarList>
              {navlinkList.map(({ navlink, id }) => (
                <li className="navbar-item" key={id}>
                  <NavbarLink
                    href={`#${navlink}`}
                    className={`${activeLink === navlink ? 'active' : ''}`}
                    onClick={() => {
                      setActiveLink(navlink);
                    }}
                  >
                    {navlink}
                  </NavbarLink>
                </li>
              ))}
            </NavbarList>
          </LinksWrapper>
        </HeaderWrapper>
      </div>
    </Navbar>
  );
}
export default Header;
