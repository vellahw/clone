import styled from 'styled-components';

export const CoverSection = styled.section`
  background-color: #F6F6F9;
  height: 100vh;

  @media (max-width:767px) {
    width: 100vw;
    max-width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`

export const HeaderContainer = styled.div`
  @media (min-width: 1024px) {
    background-color: #E8E8EC;
    
    max-width: 1024px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 767px) {
    width: 100%;
    position: absolute;
    top: 340px;
  }
`

export const CoverHeaderDiv = styled.div`
  background-color: #D2D2D9;

  color: #fff;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    background-color: #E8E8EC;
    text-align: center;
  }
`

export const CoverHeader = styled.h1`
  background-color: #BABBC3;

  font-size: 54px;
  margin: 0;

  @media (max-width: 767px) {
    background-color: #D2D2D9;

    font-size: 28px;
  }
`

export const CoverHeaderTextDiv = styled.div`
  background-color: #BABBC3;

  font-size: 22px;
  font-weight: 600;
  margin-top: 18px;

  .text{
    margin: 0;
  }

  @media (max-width: 767px) {
    background-color: #D2D2D9;
    
    width: 200px;
    font-size: 16px;
    font-weight: 400;

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