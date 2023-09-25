import {React, useState} from 'react';
import { NavLink } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { whiteNav, navOpen, isScroll } from "../../recoil/atom";
import * as n from '../../styles/HeaderStyle';
import data from '../../data.json'

export function NavbarMenu() {
  const menuItems = data.menuItems;
  const [scrollPosition] = useRecoilState(isScroll);
  const [isWhiteNav, setIsWhiteNav] = useRecoilState(whiteNav);
  const [isNavOpen, setIsNavOpen] = useRecoilState(navOpen);
  const [isClick, setIsClick] = useState(false);
  const isWhite = isWhiteNav;

  const openQr = () => {
    alert("QR");
  }

  const handleItemClick = () => {
    setIsClick(true);
    setIsWhiteNav(1);
    setIsNavOpen(false);
  };

  return (
    <>
      { menuItems.map(i=>{
          return (
            <n.CategoryDiv>
              <NavLink
                key={i.no}
                to={i.path}
                onClick={() => handleItemClick()}
              >
                <n.CategoryItem className='item'>
                  {i.title}
                </n.CategoryItem>
              </NavLink>
            </n.CategoryDiv>
          )
      })}

      <n.CategoryItem> 
        <n.AppDownloadBtn
          className={
            scrollPosition < 100 && isWhite === 0
            ? ""
            : "color-btn"
          }
          onClick={openQr}>
          카사 앱 다운로드
        </n.AppDownloadBtn>
      </n.CategoryItem>
    </>
  )
}