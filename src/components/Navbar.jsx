import React from 'react';
import headerLogo from '../image/logo/ziktu-logo.png';
import {AiOutlineMenu} from 'react-icons/ai';
import * as n from '../styles/NavbarStyle';

function Navbar() {
    return (
        <n.Navigation>
            <n.NavigationWrap>
                <a href='http://localhost:3000/' rel="noreferrer">
                    <img src={headerLogo} className='header-logo' alt='로고 이미지'></img>
                </a>
                <AiOutlineMenu className='hamburger-menu'/>

                <n.CategoryDiv>
                    <n.CategoryList>
                        <n.CategoryItem>직투 소식</n.CategoryItem>
                        <n.CategoryItem>빌딩 정보</n.CategoryItem>
                        <n.CategoryItem>공시</n.CategoryItem>
                        <n.CategoryItem>이벤트</n.CategoryItem>
                        <n.CategoryItem>채용</n.CategoryItem>
                        <n.CategoryItem>FAQ</n.CategoryItem>
                        <n.CategoryItem>
                            <n.AppDownloadBtn>직투 앱 다운로드</n.AppDownloadBtn>
                        </n.CategoryItem>
                    </n.CategoryList>
                </n.CategoryDiv>
            </n.NavigationWrap>
      </n.Navigation>
    )
}

export default Navbar;