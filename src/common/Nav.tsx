import styled from 'styled-components';
import { tertiary, white } from '../design/colors';
import { gridUnitPx } from '../design/measurements';
import { boxshadowSmall } from '../design/shadow';
import { P } from '../design/typography';

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
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
`;

export function Nav() {
  return (
    <Header>
      <NavBar>
        <P weight="bold">Emmy Codes</P>
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
