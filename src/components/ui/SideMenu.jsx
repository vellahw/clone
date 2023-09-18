import * as n from '../../styles/HeaderStyle';
import { NavbarMenu } from './NavbarMenu';

function SideMenu(props) {
    return(
        <>
            <n.NavContainer open={props.sideMenuOpen}>
                <n.MenuList>
                    <NavbarMenu />
                </n.MenuList>
            </n.NavContainer>

            <n.Overlay open={props.sideMenuOpen}/>
        </>
    )
}

export default SideMenu;