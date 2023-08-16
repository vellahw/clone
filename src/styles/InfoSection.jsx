import styled from 'styled-components';

export const InfoSection = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 76px;
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
`

export const InfoCard = styled.div`
  background-color: #F3F4F5;
  width: 378px;
  height: 222px;
  padding: 47px;
  border-radius: 22px;

  .partner-logo {
    width: 280px;
    float: right;
    margin-top: 24px;
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
`

export const InfoCardTitle = styled(InfoTitle)`
  margin: 0;
  padding-bottom: 20px;
`

export const InfoCardText = styled(InfoHeaderText)`
  font-size: 22px;
  line-height: 40px;
`