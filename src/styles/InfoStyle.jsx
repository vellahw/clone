import styled from 'styled-components';
import {CoverButton} from './TopBannerStyle';


export const InfoSection = styled.section`
  background-color: #F6F6F9;
  height: 690px;

  max-width: 1024px;
  margin: 0 auto;
  padding: 100px 0;
  
  @media (max-width: 767px) {
    padding: 40px;
  }
`

export const InfoTitle = styled.h2`
  background-color: #E1E1E5;

  font-size: 16px;
  font-weight: 600;
`

export const InfoHeaderDiv = styled.div`
  background-color: #E1E1E5;

padding: 28px 0 0 80px;
`

export const InfoHeaderText = styled.p`
  background-color: #C1C2CB;

  margin: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 46px;
`

export const InfoCardDiv = styled.div`
  background-color: #E1E1E5;

  margin-top: 50px;
  padding: 28px 0 0 80px;
  display: flex;
  position: relative;

  @media (max-width:767px) {
  }
`

export const InfoCard = styled.div`
  background-color: #C1C2CB;

  /* background-color: #F6F6F9; */
  width: 400px;
  height: 222px;
  padding: 28px;
  border-radius: 18px;

  .partner-logo {
    width: 280px;
    float: right;
    margin-top: 24px;
  }

  @media(max-width:767px){

  }
`

export const PartersLogo = styled.div`
  color: #fff;
  float: right;

  .partners {
    font-size: 36px;
    padding-left: 22px;
  }
`

export const InfoCardR = styled(InfoCard)`
  background-color: #C1C2CB;

  /* background-color: #E7EBFA; */
  height: 284px;
  position: absolute;
  top: 70px;
  left: 568px;

  .partner-logo {
    width: 244px;
  }
  
  @media(max-width:767px){
    top: 0;
    left: 0;
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
`

export const InfoCardTitle = styled(InfoTitle)`
  background-color: transparent;

  margin: 0;
  padding-bottom: 20px;
`

export const InfoCardText = styled(InfoHeaderText)`
  background-color: transparent;

  font-size: 22px;
  line-height: 36px;
  padding-bottom: 28px;
`

// 법인회원 section
export const CorpSection = styled(InfoSection)`
  height: auto;
`

export const HelpText = styled(InfoHeaderText)`
  font-size: 22px;
  line-height: 36px;
`

export const HelpButton = styled(CoverButton)`
  width: 107px;
  margin-top: 0;
  margin-right: 30px;
`
export const DownloadFileText = styled.p`
  color: #fff;

  /* color: #A1A0A8; */
  text-decoration: underline;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
`

export const ButtonDiv = styled.div`
  background-color: #C1C2CB;

  display: flex;
  align-items: center;
  margin-top: 32px;
`