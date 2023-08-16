import styled from 'styled-components';

export const Navigation = styled.nav`
  max-width: 1024px;
  margin: 0 auto;
  height: 64px;
  background-color: #fff;
`

export const NavigationWrap = styled.div`
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: fixed;

  .header-logo {
    width: 80px;
  }
`

export const CategoryDiv = styled.div`
  display: flex;
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