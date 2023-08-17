import styled from 'styled-components';

export const CoverSection = styled.section`

  @media (max-width: 1024px) {
    position: relative;
    /* top: 0; */
    margin: 0 auto;

    /* .cover-img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    } */
  }

  @media (max-width:767px) {
    position: relative;
    margin: 0 auto;

    /* .cover-img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    } */
  }
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export const CoverHeaderDiv = styled.div`
  color: #fff;
  position: absolute;
  top: 35%;
  z-index: 1;

  @media (max-width: 767px) {
    text-align: center;
    left: 24%;
  }
`

export const CoverHeader = styled.h1`
  font-size: 54px;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 28px;
  }
`

export const CoverHeaderTextDiv = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 18px;

  .text{
    margin: 0;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`
export const CoverButton = styled.button`
  background-color: #627AF5;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  width: 146px;
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