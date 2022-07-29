import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { white } from '../design/colors';
import { gridUnitPx } from '../design/measurements';
import { boxshadowSmall } from '../design/shadow';
import Spacing from '../design/Spacing';
import { P } from '../design/typography';

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: ${gridUnitPx(275)};
`;

const Header = styled.header`
  background: ${white};
  height: ${gridUnitPx(12)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  ${boxshadowSmall};
  //color:;
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  padding: ${gridUnitPx(1)};
`;

export function Nav() {
  return (
    <Header>
      <NavBar>
        <Link to="/">
          <P weight="bold">EmmyCodes.</P>
        </Link>
        <Menu>
          <MenuItem>
            <Link to="/blog">
              Blog
            </Link>
          </MenuItem>
          <Spacing right="large" left="large">
            <MenuItem>
              <Link to="/about">
                About me
              </Link>
            </MenuItem>
          </Spacing>
          <MenuItem>
            Link 3
          </MenuItem>
        </Menu>
      </NavBar>
    </Header>
  );
}
