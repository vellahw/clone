import styled from 'styled-components';
import {HeaderButton} from './main/BannerSectionStyle';


export const InfoSection = styled.section`
  height: 690px;
  max-width: 992px;
  margin: 0 auto;
  padding: 100px 16px 100px 16px;
  overflow-y: hidden;
  overflow-x: hidden;

  @media (max-width: 767px) {
    padding: 80px 0 80px 0;
    margin: 0 16px;
    position: relative;
    height: 760px;
  }

  @media (max-width: 1049px) {
    margin: 0 16px;
  }
`

export const InfoTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
`

export const InfoHeaderWrapper = styled.div`
  margin: 38px 0 0 80px;

  @media(max-width: 767px) {
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
  width: 384px;
  height: auto;
  padding: 32px 32px 18px 32px;
  border-radius: 18px;
  
  @media(max-width:767px){
    position: absolute;
    width: calc(100% - 48px);
    height: auto;
    padding: 24px 24px 10px 24px;
  }
`

export const PartersLogoContainer = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  margin-top: 32px;

  .partners {
    width: auto;
    height: 34px;
    padding: 0 0 14px 22px;
  }

  @media(max-width: 767px) {
    justify-content: normal;

    .partners {
      padding-left: 0;
      padding-right: 22px;
      width: 32px;
    }
  }
`

export const InfoCardR = styled(InfoCard)`
  background-color: #E7EBFA;
  height: auto;
  position: absolute;
  top: 70px;
  left: 552px;

  @media(max-width:767px){
    top: 264px;
    left: 0;
    height: 236px;
    padding-bottom: 24px;
  }
`

export const PartersLogoR = styled(PartersLogoContainer)`
  width: 294px;
  float: right;

  .partners {
    padding: 0 0 14px 24px;
  }

  .partners-hana {
    width: 32px;
    padding: 0 6px 14px 0;
  }

  .partners-bottom-left {
    padding: 0 8px 14px 24px;
    width: 32px;
  }
  
  .partners-kakao {
    width: auto;
    height: 25px;
    padding: 2px 0 14px 16px;
  }

  .partners-bottom {
    width: auto;
    height: 33px;
    padding: 0px 7px 14px 20px;
  }

  @media(max-width: 767px) {
    width: 310px;
    float: none;
    justify-content: left;
  
    .partners-hana {
      padding: 0 33px 14px 0;
    }
  
    .partners {
      padding: 0 25px 16px 0;
      width: auto;
      height: 33px;
    }

    .partners-bottom-left {
      padding: 0 28px 14px 0;
    }

    .partners-kakao {
      width: auto;
      height: 24px;
      padding: 4px 0 14px 0;
    }

    .partners-bottom {
      padding: 0 8px 14px 22px;
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

  .help-btn {
    color: #fff;
  }

  @media(max-width: 767px) {
    display: block;
    bottom: 10px;
    width: 100%;
    margin: 32px 0 0 0;
  }
`
export const DownloadFileText = styled.p`
  color: #A1A0A8;
  text-decoration: underline;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
`