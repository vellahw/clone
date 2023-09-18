import styled from 'styled-components';
import {InfoSection, InfoCardDiv, InfoCard, InfoCardR, InfoCardText} from '../InfoStyle';

export const FlatformSection = styled(InfoSection)`
    height: 1000px;
    overflow-y: visible;
    overflow-x: auto;

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
    background-color: #E7EBFA;
    overflow-y: hidden;

    width: 225px;
    height: 500px;
    border-radius: 15px;
    padding: 30px;
    margin-right: 15px;

    @media(max-width: 767px) {
        position: relative;
        width: calc(100% - 48px);
        height: 415px;
        margin: 0 0 20px 0;
        padding: 24px;
        padding-bottom: 0;
    }
`

export const FlatformInfoCardText = styled(InfoCardText)`
    line-height: 34px;
    word-break: keep-all;
    width: 152px;

    @media(max-width: 767px) {
        width: 120px;
        line-height: 28px;
        margin-bottom: 22px;
    }
` 

export const FlatformCardImgContainer = styled.div`
    @media(max-width: 767px) {
        display: flex;
        justify-content: center;
        height: auto;
        overflow-y: hidden;
    }
`
export const FlatformCardImg = styled.div`
    @media(max-width: 767px) {
        background-color: #fff;
        width: 177px;
        height: 370px;
        border-radius: 22px 22px 0 0;
    }
`

export const FlatformInfoCardB = styled(InfoCardR)`
    background-color: #627AF5;
    border-radius: 15px;
    width: 221px;
    height: 206px;
    top: 600px;
    left: 80px;

    .br-card-text {
        color: #fff
    }

    @media(max-width: 767px) {
        position: relative;
        width: calc(100% - 48px);
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
    background-color: #414551;
    overflow-y: hidden;
    border-radius: 15px;
    width: 529px;
    height: 206px;
    top: 600px;
    left: 380px;

    .br-card-text {
        color: #fff
    }

    @media(max-width: 767px) {
        position: relative;
        width: calc(100% - 48px);
        height: 330px;
        margin: 0;
        top: 0;
        left: 0;
    }
`

export const FlatformCardImgContainerBR = styled(FlatformCardImgContainer)`
    bottom: 50px;
    margin-top: 70px;
`

export const FlatformCardImgBR = styled(FlatformCardImg)`
    border-radius: 0;
    width: 200px;
    height: 200px;
`