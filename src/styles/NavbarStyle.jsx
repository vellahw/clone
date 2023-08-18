import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  height: 64px;
  align-items: center;
  position: fixed;
  z-index: 999;
  background-color: #fff;

  @media (max-width: 767px) {
    width: 100vw;
    max-width:100%;
    height: 56px;
    overflow-x: hidden;
    border-bottom: 1px solid #E8E8EC;
 }
`

export const NavigationWrap = styled.div`
  background-color: #F6F6F9;

  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-logo {
    width: 80px;
    background-color: #D2D2D9;
  }
  
  .hamburger-menu {
    display: none;
  }

  @media(min-width: 767px) {
    padding: 0 16px;

    .header-logo {
      margin-top: 4px;
      background-color: #E8E8EC;
    }

    .hamburger-menu {
      background-color: #E8E8EC;
      display: inline;
      font-size: 20px;
    }
  }
`

export const CategoryDiv = styled.div`
  display: flex;

  @media (max-width: 767px) {
    display: none;
  }
`

export const CategoryList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 16px;
`

export const CategoryItem = styled.li`
  background-color: #D2D2D9;

  cursor: pointer;
  margin: 0 12px;
`

export const AppDownloadBtn = styled.button`
  background-color: #627AF5;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 16px;
  width: 138px;
  height: 40px;
`