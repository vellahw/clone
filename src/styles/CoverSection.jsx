import styled from 'styled-components';

export const CoverSection = styled.section`
  /* position: absolute; */
  top: 0;

  .cover-img {
    width: 100%;
    height: 852px;
    object-fit: cover;
    /* position: relative; */
  }
`

export const CoverHeaderDiv = styled.div`
  color: #fff;
  position: absolute;
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