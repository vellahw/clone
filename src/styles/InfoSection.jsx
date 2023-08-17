import styled from 'styled-components';
import {CoverButton} from './TopBanner';


export const InfoSection = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 76px;
  
  @media (max-width: 767px) {
    padding: 40px;
  }
`

export const InfoTitle = styled.p`
  font-weight: 600;
`

export const InfoHeaderDiv = styled.div`
  padding: 28px 0 0 80px;
`

export const InfoHeaderText = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 46px;
`

export const InfoCardDiv = styled.div`
  margin-top: 50px;
  padding: 28px 0 0 80px;
  display: flex;
  position: relative;

  @media (max-width:767px) {
  }
`

export const InfoCard = styled.div`
  background-color: #F6F6F9;
  width: 378px;
  height: 222px;
  padding: 47px;
  border-radius: 22px;

  .partner-logo {
    width: 280px;
    float: right;
    margin-top: 24px;
  }

  @media(max-width:767px){

  }
`

export const InfoCardR = styled(InfoCard)`
  background-color: #E7EBFA;
  height: 280px;
  position: absolute;
  top: 70px;
  left: 586px;

  .partner-logo {
    width: 244px;
  }

  @media(max-width:767px){
    top: 0;
    left: 0;
  }
`

export const InfoCardTitle = styled(InfoTitle)`
  margin: 0;
  padding-bottom: 20px;
`

export const InfoCardText = styled(InfoHeaderText)`
  font-size: 22px;
  line-height: 40px;
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
  color: #A1A0A8;
  text-decoration: underline;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
`

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`