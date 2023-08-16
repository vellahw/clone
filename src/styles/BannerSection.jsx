import styled from 'styled-components';

export const MiddleBannerSection = styled.section`
  margin-top: 130px;
  margin-bottom: 20px;
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
  position: absolute;
  top: 35%;
  left: 38%;
`

export const BannerHeader = styled.h1`
  color: #fff;
  font-size: 54px;
  margin: 0;
`

export const BottomBannerSection = styled.section`
  background-color: #627AF5;
`

export const BottomBannerHeaderDiv = styled.div`
  padding-top: 64px;
`

export const BottomBannerButton = styled.button`
  border: none;
  background-color: #fff;
  color: #627AF5;
  font-size: 20px;
  font-weight: 600;
  width: 200px;
  height: 48px;
  margin: 28px 0 0 4px;
  border-radius: 4px;
`

export const BottomBannerInfo = styled.p`
  color: #B5B3CD;
  font-size: 12px;
  padding: 28px 0 0 4px;
`
