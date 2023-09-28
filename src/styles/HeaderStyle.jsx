import styled from 'styled-components';

export const NavSection = styled.nav`
  min-width: 360px;

  .white-nav {
    background-color: white;
    border-bottom: 1px solid #E8E8EC;
    color: #171717;
    transition: background-color 0.2s linear 0s;
  }

  .color-btn {
    background-color: #627AF5;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    width: 138px;
    height: 40px;
  }

  @media screen and (max-width: 782px) {
    transition: none;
    
    .white-nav {
      transition: none;
    }
  }
`

export const Navigation = styled.div`
  min-width: 360px;
  width: 100vw;
  height: 64px;
  align-items: center;
  position: fixed;
  z-index: 999;
  display: flex;
  color: #fff;
  transition: background-color 0.2s linear 0s;

  @media screen and (max-width: 782px) {
    width: 100vw;
    max-width:100%;
    height: 56px;
    transition: none;
  }
`

export const NavigationContainer = styled.div`
  padding: 0 16px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-logo {
    width: 80px;
    padding: 10px;
    padding-left: 0;
    display: flex;
  }

  @media(max-width: 782px) {
    .hamburger-menu {
      font-size: 20px;
      display: flex;
    }
  }
`
export const HamburgerWrapper = styled.div`
  display: none;
  font-size: 20px;

  @media(max-width: 782px) {
    display: block;
  }
`

export const CategoryWrapper = styled.div`

  @media (max-width: 782px) {
    display: none;
  }
`

export const CategoryDiv = styled.div`
  cursor: pointer;
  margin: 0 5px;
  padding: 0 10px;
`

export const CategoryList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 16px;

  margin: 0;
  padding: 0;

  .download-btn {
    padding: 0;
    margin: 0;
  }

  .active {
    color: #627AF5;
  }
`

export const CategoryItem = styled.li`
  font-weight: 500;

  @media (max-width: 782px) {
    line-height: 48px;
  }
`

export const AppDownloadBtn = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 16px;
  width: 138px;
  height: 40px;
  margin-left: 5px;
  
  @media (max-width: 782px) {
      display: none;
      border: none;
  }
`

// 오버레이
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  opacity: 0.4;
  background-color: rgb(0, 0, 0);
  z-index: 5;
  
  display: ${(props) => (!props.open ? 'block' : 'none')};
  `

// 모바일 사이드 메뉴바
export const NavContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 325px;
  padding-left: 16px;
  z-index: 999;
  position: fixed;
  top: 57px;
  display: none;

  @media screen and (max-width: 782px){
    padding-left: 0;
    display: ${(props) => (!props.open ? 'block' : 'none')};
  }
`

export const MenuList = styled.ul`
  padding: 0;
`

export const MenuItem = styled.li`
  height: 48px;
  width: 100%;
`