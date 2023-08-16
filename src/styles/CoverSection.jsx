import styled from 'styled-components';

export const CoverSection = styled.section`
  position: relative;
  /* top: 0; */

  .cover-img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
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
  z-index: 999;
`

export const CoverHeader = styled.h1`
  font-size: 54px;
  margin: 0;

`

export const CoverHeaderTextDiv = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 18px;

  .text{
    margin: 0;
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
`

export const CoverImgContainer = styled.div`
  width: 100%;
  height: 852px;
  overflow: hidden;
`