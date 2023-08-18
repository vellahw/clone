import styled from 'styled-components';
import {CoverButton} from './TopBannerStyle';


export const InfoSection = styled.section`
  background-color: #F6F6F9;
  height: 690px;

  max-width: 1024px;
  margin: 0 auto;
  padding: 100px 0;
  
  @media (max-width: 767px) {
    background-color: #F6F6F9;
    padding: 80px 0;
    margin: 0 16px;
    position: relative;
    height: 760px;
  }
`

export const InfoTitle = styled.h2`
  background-color: #E8E8EC;

  font-size: 16px;
  font-weight: 600;
`

export const InfoHeaderDiv = styled.div`
  background-color: #E8E8EC;

  @media(max-width: 1024px) {
    padding: 28px 0 0 80px;
  }
  
  @media(max-width: 767px) {
    padding: 0;
    padding-top: 10px;
  }
`

export const InfoHeaderText = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 46px;

  @media(max-width: 767px) {
    font-size: 20px;
    line-height: 30px;
    background-color: #E8E8EC;
  }
`

export const InfoCardDiv = styled.div`
  background-color: #E8E8EC;

  margin-top: 60px;
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
  background-color: #D2D2D9;

  /* background-color: #F6F6F9; */
  width: 400px;
  height: 222px;
  padding: 24px;
  border-radius: 18px;

  .partner-logo {
    width: 280px;
    float: right;
    margin-top: 24px;
  }

  @media(max-width:767px){
    position: absolute;
    width: calc(100% - 48px);
    height: 180px;
  }
`

export const PartersLogo = styled.div`
  color: #fff;
  float: right;

  .partners {
    font-size: 36px;
    padding-left: 22px;
  }

  @media(max-width: 767px) {
    float: left;

    .partners {
      padding-left: 0;
      padding-right: 22px;
      font-size: 32px;
    }
  }
`

export const InfoCardR = styled(InfoCard)`
  background-color: #D2D2D9;

  /* background-color: #E7EBFA; */
  height: 284px;
  position: absolute;
  top: 70px;
  left: 568px;

  .partner-logo {
    width: 244px;
  }
  
  @media(max-width:767px){
    top: 252px;
    left: 0;
    width: calc(100% - 48px);
    height: 236px;
  }
`

export const PartersLogoR = styled(PartersLogo)`
  width: 84%;

  .partners {
    padding-left: 40px;
    padding-bottom: 16px;
  }
  
  .b {
    padding-left: 20px;
    font-size: 36px;
  }

  .rec {
    width: 76px;
    padding-left: 20px;
    padding-bottom: 16px;
  }

  @media(max-width: 767px) {
    width: 280px;
  
    .partners {
      padding: 0 32px 16px 0;
    }

    .b1 {
      padding-right: 12px;
    }

    .b {
      padding-right: 32px;
      font-size: 32px;
    }

    .rec {
      width: 76px;
      padding: 0 8px 16px 0;
    }
  }
`

export const InfoCardTitle = styled(InfoTitle)`
  background-color: transparent;

  margin: 0;
  padding-bottom: 20px;

  @media(max-width: 767px) {
    font-size: 12px;
  }
`

export const InfoCardText = styled(InfoHeaderText)`
  background-color: transparent;

  font-size: 22px;
  line-height: 36px;
  padding-bottom: 28px;

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
  background-color: #D2D2D9;

  display: flex;
  align-items: center;
  margin-top: 32px;

  @media(max-width: 767px) {
    flex-direction: column-reverse;
    align-items: start;
  }
`

export const HelpText = styled(InfoHeaderText)`
  font-size: 22px;
  line-height: 36px;

  @media(max-width: 767px) {
    font-size: 16px;
    line-height: 26px;
    width: 310px;
  }
`

export const HelpButton = styled(CoverButton)`
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