import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100vw;
  height: 64px;
  align-items: center;
  position: fixed;
  z-index: 999;
  display: flex;
  background-color: #F6F6F9;

  @media (max-width: 767px) {
    width: 100vw;
    max-width:100%;
    height: 56px;
    overflow-x: hidden;
    border-bottom: 1px solid #E8E8EC;
 }
`

export const NavigationWrap = styled.div`
  background-color: #E8E8EC;
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
    background-color: #D2D2D9;

    @media(min-width: 767px) {
      margin-top: 4px;
      background-color: #D2D2D9;
    }
  }

  @media(min-width: 767px) {
    .hamburger-menu {
      background-color: #D2D2D9;
      font-size: 20px;
    }
  }
`
export const HamburgerDiv = styled.div`
  display: none;
  background-color: #D2D2D9;
  font-size: 20px;

  @media(max-width: 767px) {
    display: block;
  }
`

export const CategoryDiv = styled.div`
  background-color: #D2D2D9;

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
  background-color: #BABBC3;

  cursor: pointer;
  margin: 0 12px;
`

export const AppDownloadBtn = styled.button`
  background-color: #627AF5;
  color: #fff;
  border: none;
  /* border: 1px solid #fff; */
  border-radius: 4px;
  font-size: 16px;
  width: 138px;
  height: 40px;

  @media (max-width: 767px) {
    border: none;
  }
`