import styled from 'styled-components';
import {InfoSection, InfoCardDiv, InfoCard, InfoCardR, InfoCardText} from './InfoStyle';

export const FlatformSection = styled(InfoSection)`
    height: 1000px;

    @media(max-width: 767px) {
        height: auto ;
    }
`

export const FlatformInfoCardDiv = styled(InfoCardDiv)`
    margin-top: 20px;

    @media(max-width: 767px) {
        padding: 0;
        flex-direction: column;
        width: 100%;
    }
`

export const FlatformInfoCard = styled(InfoCard)`
    background-color: #D2D2D9;

    width: 225px;
    height: 500px;
    border-radius: 15px;
    padding: 30px;
    margin-right: 15px;
    /* background-color: #E7EBFA; */

    @media(max-width: 767px) {
        position: relative;
        width: calc(100% - 48px);
        height: 415px;
        margin: 0 0 20px 0;
        padding: 24px;
    }
`

export const FlatformInfoCardText = styled(InfoCardText)`
    line-height: 34px;
    word-break: keep-all;
    width: 152px;

    @media(max-width: 767px) {
        width: 120px;
        line-height: 28px;

    }
` 
export const FlatformInfoCardB = styled(InfoCardR)`
    background-color: #D2D2D9;

    /* background-color: #627AF5; */
    border-radius: 15px;
    width: 229px;
    height: 206px;
    top: 600px;
    left: 80px;

    @media(max-width: 767px) {
        position: relative;
        width: calc(100% - 60px);
        margin: 0 0 28px 0;
        top: 0;
        left: 0;
        height: 180px;
    }
`

export const FlatformInfoCardTextB = styled(FlatformInfoCardText)`
    color: #fff;
`  

export const FlatformInfoCardBR = styled(InfoCardR)`
    background-color: #D2D2D9;

    /* background-color: #414551; */
    border-radius: 15px;
    width: 529px;
    height: 206px;
    top: 600px;
    left: 380px;

    @media(max-width: 767px) {
        position: relative;
        width: calc(100% - 60px);
        margin: 0;
        top: 0;
        left: 0;
    }
`