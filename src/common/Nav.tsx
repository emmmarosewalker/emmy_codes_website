import styled from 'styled-components';
import { tertiary, white } from '../design/colors';
import { gridUnitPx } from '../design/measurements';
import { boxshadowSmall } from '../design/shadow';

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${gridUnitPx(300)};
`;

const Header = styled.header`
  background: ${tertiary};
  height: ${gridUnitPx(12)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  ${boxshadowSmall};
  color: ${white};
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  padding: ${gridUnitPx(1)};
  text-transform: lowercase;
`;

export function Nav() {
  return (
    <Header>
      <NavBar>
        <Menu>
          <MenuItem>
            Home
          </MenuItem>
          <MenuItem>
            Projects
          </MenuItem>
          <MenuItem>
            Contact
          </MenuItem>
        </Menu>
      </NavBar>
    </Header>
  );
}
