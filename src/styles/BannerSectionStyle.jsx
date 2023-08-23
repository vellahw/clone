import styled from 'styled-components';

// 최상단 배너
export const TopBannerSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  min-width: 360px;
  display: flex;
  justify-content: center;

  .section-container {
    padding-left: 16px;
    position: absolute;
    display: flex;
    min-width: 1024px;
    height: 100vh;
    width: 100%;
    max-width: 1024px;
  }

  .b {
    height: 100%;
  }

  .slider {
    height: 100vh;
    width: 100%;
  }
  
  .cover-img {
    height: 100vh;
    object-fit: cover;
  }

  @media (max-width:767px) {
    width: 100vw;
    max-width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
`

export const HeaderContainer = styled.div`
  position: absolute;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
    left: 0;
    position: absolute;
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
  width: 168px;
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

// 중간 배너영역
export const MiddleBannerSection = styled.section`
  height: 500px;
  overflow: hidden;
  text-align: center;
  position: relative;

  .middle-banner-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media(max-width: 767px) {
    height: 100vh;
  }
`
export const MiddleBannerHeaderDiv = styled.div`
  position: absolute;
  top: 35%;
  left: 38%;
`

export const BannerHeader = styled.h1`
  position: absolute;
  width: 100vw;
  top: 25%;
  min-width: 360px;
  
  color: #fff;
  font-size: 54px;
  /* margin: 0; */

  @media(max-width: 767px) {
    font-size: 36px;
    top: 40%;
  }
`

// 마지막 배너
export const BottomBannerSection = styled(TopBannerSection)`
  background-color: #627AF5;
  height: 540px;

  @media(max-width: 767px) {
    height: 1000px;
  }
  
`
export const BottomBannerContainer = styled.div`
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  height: 100%;
  overflow-x: hidden;

  @media(max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`

export const ImgContainer = styled.div`
  position: absolute;

  .bg-img {
    width: 100%;
  }

  @media(max-width: 767px) {
    position: absolute;
    height: 100%; 
  }
`  

export const BottomHeaderContainer = styled(HeaderContainer)`

  @media(max-width: 767px) {
    padding-top: 136px;
    justify-content: flex-start;
  }
`

export const BottomBannerHeader = styled.h1`
  margin: 0;
  font-size: 54px;
  color: #fff;

  @media(max-width: 767px) {
    font-size: 28px;
  }
`

export const InfoContainer = styled(HeaderTextContainer)`
  margin-top: 0;

  @media screen and (max-width: 767px) {
    width: auto;
  }
`

export const BottomBannerButton = styled(HeaderButton)`
  background-color: #fff;
  color: #627AF5;
  width: 200px;
  margin-top: 32px;
`

export const BottomBannerInfo = styled.p`
  color: #c1c1c1;
  font-size: 12px;
  padding: 28px 0 0 4px;

  @media(max-width: 767px) {
    width: 270px;
    padding: 24px 0 0 0;
    margin: 0 auto;
  }
`
