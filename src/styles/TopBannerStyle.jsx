import styled from 'styled-components';

export const TopBannerSection = styled.section`
  height: 100vh;
  position: relative;

  .slider {
    height: 100vh;
  }

  @media (max-width:767px) {
    width: 100vw;
    max-width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`

export const HeaderContainer = styled.div`
  position: absolute;
  left: 24%;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
    position: absolute;
    /* top: 340px; */
  }
`

export const HeaderWrapper = styled.div`
  color: #fff;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 767px) {
    align-items: center;
    text-align: center;
  }
`

export const Header = styled.h1`

  font-size: 54px;
  margin: 0;

  @media (max-width: 767px) {

    font-size: 28px;
  }
`

export const HeaderTextContainer = styled.div`

  font-size: 22px;
  font-weight: 600;
  margin-top: 18px;

  .text{
    margin: 0;
  }

  @media (max-width: 767px) {
    
    width: 200px;
    font-size: 16px;
    font-weight: 400;

  }
`
export const HeaderButton = styled.button`
  background-color: #627AF5;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  width: 146px;
  height: 48px;
  margin-top: 28px;

  @media (max-width: 767px) {
    display: none;
  }
`

export const CoverImgContainer = styled.div`
  width: 100%;
  height: 852px;
  overflow: hidden;
`