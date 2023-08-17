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
`
export const MiddleBannerHeaderDiv = styled.div`
  /* background-color: #E1E1E5; */

  position: absolute;
  top: 35%;
  left: 38%;
`

export const BannerHeader = styled.h1`
  background-color: #E1E1E5;
  color: #000;
  position: absolute;
  width: 100vw;
  top: 25%;
  
  /* color: #fff; */
  font-size: 54px;
  /* margin: 0; */
`

export const BottomBannerSection = styled.section`
  background-color: #F6F6F9;
  height: 540px;
  
  /* background-color: #627AF5; */
`

export const BottomBannerContainer = styled.div`
  position: relative;
  background-color: #E1E1E5;
  max-width: 1300px;
  margin: 0 auto;
  height: 100%;
`

export const ImgContainer = styled.div`
`  

export const BottomBannerImg = styled.div`
  width: 100%;
  height: 100%;
`

export const BottomBannerHeaderDiv = styled.div`
  background-color: #C1C2CB;
  padding-top: 136px;
  width: 1024px;
  margin: 0 auto;
`

export const BottomBannerHeader = styled.h1`
  background-color: #9B9CA6;
  margin: 0;
  font-size: 54px;
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
`

export const BottomBannerInfo = styled.p`
  background-color: #9B9CA6;

  color: #fff;
  font-size: 12px;
  padding: 28px 0 0 4px;
`
