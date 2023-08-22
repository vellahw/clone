import styled from 'styled-components';

export const NavSection = styled.nav`

  .white-nav {
    background-color: white;
    border-bottom: 1px solid #E8E8EC;
    color: #171717;
    transition: 0.3s ease-out;
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
`

export const Navigation = styled.div`
  width: 100vw;
  height: 64px;
  align-items: center;
  position: fixed;
  z-index: 999;
  display: flex;
  color: #fff;
  transition: 0.3s ease-out;

  @media (max-width: 767px) {
    width: 100vw;
    max-width:100%;
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

    @media(min-width: 767px) {
      margin-top: 4px;
    }
  }

  @media(min-width: 767px) {
    .hamburger-menu {
      font-size: 20px;
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
`

export const CategoryItem = styled.li`

  cursor: pointer;
  margin: 0 4px;
  padding: 12px;
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
  
  @media (max-width: 767px) {
    border: none;
  }
`