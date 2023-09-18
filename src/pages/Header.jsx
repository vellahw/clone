import {React, useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { whiteNav, navOpen, isScroll } from "../recoil/atom";
import SideMenu from '../components/ui/SideMenu';
import { NavbarMenu } from '../components/ui/NavbarMenu';
import * as n from '../styles/HeaderStyle';

function Navbar() {
    const [isWhiteNav] = useRecoilState(whiteNav);
    const [isNavOpen, setIsNavOpen] = useRecoilState(navOpen);
    const [scrollPosition, setScrollPosition] = useRecoilState(isScroll);
    const isWhite = isWhiteNav;
    const sideMenuOpen = isNavOpen;

    const openMenu = () => {
        setIsNavOpen(true);
    }

    const closeMenu = () => {
        setIsNavOpen(false);
    }

    const handleScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
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
            <SideMenu sideMenuOpen={sideMenuOpen ? 0 : 1} setIsNavOpen={setIsNavOpen} />

            <n.Navigation className={scrollPosition < 100 && !sideMenuOpen && isWhite === 0 ? "" : "white-nav"}>
                <n.NavigationContainer>
                    <a href='/' rel="noreferrer">
                        <img src={scrollPosition < 100 && !sideMenuOpen && isWhite === 0 ? '/logos/logo-white.png' : '/logos/logo.png'} className='header-logo' alt='로고 이미지'></img>
                    </a>
                    
                    <n.HamburgerWrapper>
                        { sideMenuOpen ? 
                            <AiOutlineClose onClick={closeMenu} className='hamburger-menu'/>
                            :
                            <AiOutlineMenu onClick={openMenu} className='hamburger-menu'/>
                        }
                    </n.HamburgerWrapper>
        
                    <n.CategoryWrapper>
                        <n.CategoryList>
                            <NavbarMenu />
                        </n.CategoryList>
                    </n.CategoryWrapper>

                </n.NavigationContainer>
        </n.Navigation>
      </n.NavSection>
    )
}

export default Navbar;