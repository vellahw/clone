import styled from 'styled-components';
import {HeaderButton} from './TopBannerStyle';


export const InfoSection = styled.section`
  height: 690px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 100px 0;

  overflow-y: hidden;
  overflow-x: hidden;

  @media (max-width: 767px) {
    padding: 80px 0;
    margin: 0 16px;
    position: relative;
    height: 760px;
  }
`

export const InfoTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
`

export const InfoHeaderWrapper = styled.div`
  margin: 38px 0 0 80px;

  @media(max-width: 1024px) {
    padding: 28px 0 0 80px;
  }
  
  @media(max-width: 767px) {
    padding: 0;
    margin: 0;
    padding-top: 10px;
  }
`

export const InfoHeader = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 46px;

  @media(max-width: 767px) {
    font-size: 20px;
    line-height: 30px;
  }
`

export const InfoCardDiv = styled.div`
  margin-top: 40px;
  padding: 28px 0 0 80px;
  display: flex;
  position: relative;

  @media (max-width:767px) {
    padding: 0;
    flex-direction: column;
    width: 100%;
  }
`

export const InfoCard = styled.div`
  background-color: #F6F6F9;
  width: 390px;
  height: auto;
  padding: 32px;
  border-radius: 18px;

  .partner-logo {
    width: 280px;
    float: right;
    margin-top: 32px;
  }

  @media(max-width:767px){
    position: absolute;
    width: calc(100% - 48px);
    height: 180px;
  }
`

export const PartersLogo = styled.div`
  width: 100%;
  color: #fff;

  .partners {
    font-size: 36px;
    padding: 0 0 15px 22px;
    float: right;
  }

  @media(max-width: 767px) {
    float: none;

    .partners {
      padding-left: 0;
      padding-right: 22px;
      font-size: 32px;
      float: none;
    }
  }
`

export const InfoCardR = styled(InfoCard)`
  background-color: #E7EBFA;
  height: auto;
  position: absolute;
  top: 70px;
  left: 558px;

  .partner-logo {
    width: 244px;
    float: right;
  }
  
  @media(max-width:767px){
    top: 252px;
    left: 0;
    width: calc(100% - 48px);
    height: 236px;
  }
`

export const PartersLogoR = styled(PartersLogo)`
  width: 304px;
  float: right;

  .partners {
    float: none;
    padding-left: 40px;
    padding-bottom: 16px;
  }
  
  .b2 {
    padding-left: 20px;
    font-size: 36px;
  }

  .rec {
    width: 76px;
    padding-left: 20px;
    padding-bottom: 16px;
  }

  @media(max-width: 767px) {
    width: 300px;
    float: none;
  
    .partners {
      padding: 0 37px 16px 0;
      float: none;
    }

    .b1 {
      padding-right: 15px;
    }

    .b2 {
      padding-right: 37px;
      font-size: 32px;
    }
    
    .b3 {
      padding-right: 12px;
    }
    
    .rec {
      width: 76px;
      padding: 0 15px 16px 0;
    }
  }
`

export const InfoCardTitle = styled(InfoTitle)`
  margin: 0;
  margin-bottom: 24px;

  @media(max-width: 767px) {
    font-size: 12px;
  }
`

export const InfoCardText = styled(InfoHeader)`
  font-size: 22px;
  line-height: 36px;

  @media(max-width: 767px) {
    font-size: 16px;
    line-height: 26px;
  }
`

// 법인회원 section
export const CorpSection = styled(InfoSection)`
  height: auto;
`

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;

  @media(max-width: 767px) {
    flex-direction: column-reverse;
    align-items: start;
  }
`

export const HelpText = styled(InfoHeader)`
  font-size: 22px;
  line-height: 36px;

  @media(max-width: 767px) {
    font-size: 16px;
    line-height: 26px;
    width: 310px;
  }
`

export const HelpButton = styled(HeaderButton)`
  width: 107px;
  margin-top: 0;
  margin-right: 30px;

  @media(max-width: 767px) {
    display: block;
    bottom: 10px;
    width: 100%;
    margin: 32px 0 0 0;
  }
`
export const DownloadFileText = styled.p`
  color: #fff;

  /* color: #A1A0A8; */
  text-decoration: underline;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
`