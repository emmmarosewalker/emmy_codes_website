import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { white } from '../design/colors';
import { gridUnitPx } from '../design/measurements';
import { boxshadowSmall } from '../design/shadow';
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
          <P weight="bold">Emmy Codes</P>
        </Link>
        <Menu>
          <MenuItem>
            Link 1
          </MenuItem>
          <MenuItem>
            Link 2
          </MenuItem>
          <MenuItem>
            Link 3
          </MenuItem>
        </Menu>
      </NavBar>
    </Header>
  );
}
