import * as n from '../../styles/HeaderStyle';

function SideMenu(props) {
    return(
        <>
        <n.NavContainer open={props.isOpen}>
            <n.MenuList>
                    <n.MenuItem>직투 소식</n.MenuItem>
                    <n.MenuItem>빌딩 정보</n.MenuItem>
                    <n.MenuItem>공시</n.MenuItem>
                    <n.MenuItem>이벤트</n.MenuItem>
                    <n.MenuItem>채용</n.MenuItem>
                    <n.MenuItem>FAQ</n.MenuItem>
            </n.MenuList>
        </n.NavContainer>

        <n.Overlay open={props.isOpen}/>
        </>
    )
}

export default SideMenu;