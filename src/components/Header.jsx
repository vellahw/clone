import {React, useEffect, useState} from 'react';
import headerLogo from '../image/logo/ziktu-logo.png';
import headerLogoW from '../image/logo/ziktu-logo-w.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import * as n from '../styles/HeaderStyle';
import SideMenu from './SideMenu';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClick, setIsClick] = useState();
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const openMenu = () => {
        setIsOpen(true);
    }
    const closeMenu = () => {
        setIsOpen(false);
    }

    const handleScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => { 
        const timer = setInterval(() => {
          window.addEventListener("scroll", handleScroll);
        }, 100);
        
        return () => {
            clearInterval(timer);
            window.removeEventListener("scroll", handleScroll);
            document.documentElement.scrollTo(0, 0)
        };
    }, []);
    
    return (
        <n.NavSection>
            <SideMenu isOpen={isOpen ? 0 : 1} setIsOpen={setIsOpen} />

            <n.Navigation className={scrollPosition < 100 && !isOpen ? "" : "white-nav"}>
                <n.NavigationContainer>
                    <a href='http://localhost:3000/' rel="noreferrer">
                        <img src={scrollPosition < 100 && !isOpen ? headerLogoW : headerLogo} className='header-logo' alt='로고 이미지'></img>
                    </a>
                    
                    <n.HamburgerWrapper>
                        { isOpen ? 
                            <AiOutlineClose onClick={closeMenu} className='hamburger-menu'/>
                            :
                            <AiOutlineMenu onClick={openMenu} className='hamburger-menu'/>
                        }
                    </n.HamburgerWrapper>
        
                    <n.CategoryWrapper>
                        <n.CategoryList>
                            <n.CategoryItem>직투 소식</n.CategoryItem>
                            <n.CategoryItem>빌딩 정보</n.CategoryItem>
                            <n.CategoryItem>공시</n.CategoryItem>
                            <n.CategoryItem>이벤트</n.CategoryItem>
                            <n.CategoryItem>채용</n.CategoryItem>
                            <n.CategoryItem>FAQ</n.CategoryItem>
                            <n.CategoryItem>
                                <n.AppDownloadBtn className={scrollPosition < 100 ? "" : "color-btn"}>직투 앱 다운로드</n.AppDownloadBtn>
                            </n.CategoryItem>
                        </n.CategoryList>
                    </n.CategoryWrapper>
                </n.NavigationContainer>
        </n.Navigation>
      </n.NavSection>
    )
}

export default Navbar;