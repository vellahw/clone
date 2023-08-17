import styled from 'styled-components';

export const CoverSection = styled.section`
  background-color: #F6F6F9;
  height: 100vh;

  @media (max-width:767px) {
    margin: 0 auto;
  }
`

export const HeaderContainer = styled.div`
  @media (min-width: 1024px) {
    background-color: #E1E1E5;
    
    max-width: 1024px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const CoverHeaderDiv = styled.div`
  background-color: #C1C2CB;

  color: #fff;
  z-index: 1;

  @media (max-width: 767px) {
    text-align: center;
    left: 24%;
  }
`

export const CoverHeader = styled.h1`
  background-color: #9B9CA6;

  font-size: 54px;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 28px;
  }
`

export const CoverHeaderTextDiv = styled.div`
  background-color: #9B9CA6;

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