import {React, useEffect, useState} from 'react';
import { useRecoilState } from 'recoil';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { whiteNav, navOpen } from "../recoil/atom";
import SideMenu from '../components/ui/SideMenu';
import { NavbarMenu } from '../components/ui/NavbarMenu';
import * as n from '../styles/HeaderStyle';

function Navbar() {
  const [isWhiteNav] = useRecoilState(whiteNav);
  const [isNavOpen, setIsNavOpen] = useRecoilState(navOpen);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isWhite = isWhiteNav === 1;
  const isSideNavOpen = isNavOpen === true;

  const openMenu = () => {
    setIsNavOpen(true);
  }

  const closeMenu = () => {
    setIsNavOpen(false);
  }

  const handleScroll = () => {
    setScrollPosition(
      window.scrollY
      ||
      document.documentElement.scrollTop
    );
  }

  const openQr = () => {
    alert("QR");
  }
  
  
  useEffect(() => { 
    window.removeEventListener("scroll", handleScroll);
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    
    return () => {
      document.documentElement.scrollTo(0, 0)
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <n.NavSection>
      <SideMenu
        sideMenuOpen={isNavOpen ? 0 : 1}
        setIsNavOpen={setIsNavOpen}
      />

      <n.Navigation
        className={
          scrollPosition < 100
          && !isWhite
          && !isSideNavOpen
          ? ""
          : "white-nav" }
      >
        <n.NavigationContainer>
          <a href='/' rel="noreferrer" className='logo'>
            <img
              src={
                scrollPosition < 100
                && !isWhite
                && !isSideNavOpen
                ? '/logos/logo-white.png'
                : '/logos/logo.png'
                }
              className='header-logo'
              alt='로고 이미지'>
            </img>
          </a>
          
          <n.HamburgerWrapper>
            { isNavOpen ? 
              <AiOutlineClose
                onClick={closeMenu}
                className='hamburger-menu'/>
              :
              <AiOutlineMenu 
                onClick={openMenu}
                className='hamburger-menu'/>
            }
          </n.HamburgerWrapper>
    
          <n.CategoryWrapper>
            <n.CategoryList>
              {/* 메뉴 */}
              <NavbarMenu />

              {/* 버튼 */}
              <n.CategoryItem> 
                <n.AppDownloadBtn
                  className={
                    scrollPosition < 100 
                    && !isWhite
                    ? ""
                    : "color-btn"
                   }
                  onClick={openQr}
                >
                  카사 앱 다운로드
                </n.AppDownloadBtn>
              </n.CategoryItem>
            </n.CategoryList>
          </n.CategoryWrapper>
        </n.NavigationContainer>
    </n.Navigation>
    </n.NavSection>
  )
}

export default Navbar;