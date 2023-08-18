import styled from 'styled-components';

export const MiddleBannerSection = styled.section`
  background-color: #F6F6F9;

  /* margin-top: 130px; */
  /* margin-bottom: 20px; */
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
  /* background-color: #E8E8EC; */

  position: absolute;
  top: 35%;
  left: 38%;
`

export const BannerHeader = styled.h1`
  background-color: #E8E8EC;
  color: #000;
  position: absolute;
  width: 100vw;
  top: 25%;
  
  /* color: #fff; */
  font-size: 54px;
  /* margin: 0; */

  @media(max-width: 767px) {
    font-size: 36px;
    top: 40%;
  }
`

export const BottomBannerSection = styled.section`
  background-color: #F6F6F9;
  height: 540px;

  @media(max-width: 767px) {
    height: 1000px;
  }
  
  /* background-color: #627AF5; */
`

export const BottomBannerContainer = styled.div`
  position: relative;
  background-color: #E8E8EC;
  max-width: 1300px;
  margin: 0 auto;
  height: 100%;

  @media(max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`

export const ImgContainer = styled.div`
  width: 100vw;

  @media(max-width: 767px) {
    position: absolute;
    height: 100%; 
  }
`  

export const BottomBannerImg = styled.div`
`

export const BottomBannerHeaderDiv = styled.div`
  background-color: #D2D2D9;
  padding-top: 136px;
  width: 1024px;
  margin: 0 auto;

  @media(max-width: 767px) {
    width: 100%;
    text-align: center;
    padding-top: 40px;
    position: absolute;
  }
`

export const BottomBannerHeader = styled.h1`
  background-color: #BABBC3;
  margin: 0;
  font-size: 54px;

  @media(max-width: 767px) {
    font-size: 28px;
  }
`

export const BottomBannerButton = styled.button`
  border: none;
  background-color: #627AF5;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  width: 200px;
  height: 48px;
  border-radius: 4px;
  margin-top: 32px;

  @media(max-width: 767px) {
    display: none;
  }
`

export const BottomBannerInfo = styled.p`
  background-color: #BABBC3;

  color: #fff;
  font-size: 12px;
  padding: 28px 0 0 4px;

  @media(max-width: 767px) {
    width: 270px;
    padding: 24px 0 0 0;
    margin: 0 auto;
  }
`
