import { React } from 'react';
import { NavLink } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { whiteNav, navOpen } from "../../recoil/atom";
import * as n from '../../styles/HeaderStyle';
import data from '../../data.json'

export function NavbarMenu() {
  const menuItems = data.menuItems;
  const [isWhiteNav, setIsWhiteNav] = useRecoilState(whiteNav);
  const [isNavOpen, setIsNavOpen] = useRecoilState(navOpen);

  const handleItemClick = () => {
    setIsWhiteNav(1);
    setIsNavOpen(false);
  };

  return (
    <>
      { menuItems.map(i=>{
        return (
          <n.CategoryDiv key={i.no}>
            <NavLink
              to={i.path}
              onClick={() => handleItemClick()}
            >
              <n.CategoryItem>
                {i.title}
              </n.CategoryItem>
            </NavLink>
          </n.CategoryDiv>
        )
      })}
    </>
  )
}