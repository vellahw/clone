import styled from 'styled-components';

export const Navigation = styled.nav`
    width: 100%;
    height: 64px;
    align-items: center;
    position: fixed;
    z-index: 999;
    background-color: #fff;

  @media (max-width: 767px) {
    /* width: 100%; */
  }
`

export const NavigationWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-logo {
    width: 80px;
  }

  .hamburger-icon {
    display: none;
  }

  @media(max-width: 767px) {
    max-width: 100%;

    .header-logo {
      width: 90px;
    }

    .hamburger-icon {
      display: block;
      font-size: 32px;
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
  cursor: pointer;
  margin: 0 12px;
`

export const AppDownloadBtn = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 16px;
  width: 138px;
  height: 40px;
`