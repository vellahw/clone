import styled from 'styled-components';
import {InfoSection, InfoTitle} from '../InfoStyle'

export const Section = styled(InfoSection)`
    height: auto;
    padding-top: 100px;
    padding-bottom: 50px;
`
export const Header = styled(InfoTitle)`
    font-size: 40px;
    padding: 0 16px 0 16px;
    margin-bottom: 80px;

    @media screen and (max-width: 767px) {
        padding: 0;
        font-size: 28px;
        margin-top: 0;
        margin-bottom: 0;
    }
`

export const BuildingInfoContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding: 0 16px 0 16px;

    @media screen and (max-width: 767px) {
        padding: 0;
        margin-top: 20px;
    }
`

export const BuildingInfoWrapper = styled.div`
    cursor: pointer;
    border: 1px solid #E8E8EC;
    height: 502px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 40px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: normal;
        height: auto;
    }
`
export const ImgContainer = styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;

    .building-img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 767px) {
            height: calc(50vh - 50px);
        }
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        height: 50%;
    }
`
export const InfoContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 0%;

    @media screen and (max-width: 767px) {
        width: 100%;
        height: 50%;
    }
`

export const LabelContainer = styled.div`
    margin: 40px;
    margin-bottom: 24px;

    @media screen and (max-width: 767px) {
        margin: 10px 0;
    }
`

export const Label = styled.div`
    color: ${(props)=> (props.status === '상장' ? '#fff' : '#627AF5')};
    background-color: ${(props)=> (props.status === '상장' ? '#627AF5' : '#F6F6F9')};
    display: inline-block;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    line-height: 39px;
    text-align: center;
    padding: 0px 20px;
    border-radius: 20px;
    
    @media screen and (max-width: 767px) {
        scale: 0.75;
    }
`


export const BuildingName = styled.h1`
    font-size: 40px;
    margin: 40px 40px 4px 40px;

    @media screen and (max-width: 767px) {
        margin: 0 16px 0 16px;
        font-size: 28px;
    }
`

export const BuildingAddress = styled.address`
    margin: 0 40px 0 40px;
    font-size: 16px;
    font-weight: 600;
    color: #555555;
    display: flex;
    align-items: center;

    .location-icon {
        font-size: 20px;
        margin-right: 4px;
    }

    @media screen and (max-width: 767px) {
        margin: 10px 16px 0 16px;
        font-size: 14px;
    }
`

export const DetailInfoContainer = styled.div`
    margin: 0 40px 40px 40px;

    .first {
        border-top: 1px solid #E8E8EC;
        padding-top: 23px;

        @media screen and (max-width: 767px) {
            padding-top: 10px;
            border: none;
        }
    }

    @media screen and (max-width: 767px) {
        margin: 0 16px 16px 16px;
    }
`

export const DetailInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 18px;

    @media screen and (max-width: 767px) {
        margin-top: 10px;
    }
`

export const DetailTitle = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #555555;

    @media screen and (max-width: 767px) {
        font-size: 14px;
    }
`

export const DetailText = styled.div`
    font-size: 18px;
    font-weight: 600;

    @media screen and (max-width: 767px) {
        font-size: 14px;
    }
`

export const HelpContainer = styled.div`
    margin-bottom: 20px;

    @media screen and (max-width: 767px) {
        margin-bottom: 0;
    }
`

export const HelpHeader = styled(Header)`
    margin-bottom: 16px;
    font-size: 28px;

    @media screen and (max-width: 767px) {
        font-size: 20px;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 16px 0 16px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        padding: 0;
    }
`

export const LeftCard = styled.div`
    background-color: #EF9083;
    display: flex;
    height: 160px;
    width: 472px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 767px) {
        width: 100%;
        height: 90px;
        margin-bottom: 16px;
    }
`

export const RightCard = styled(LeftCard)`
    background-color: #85A2EB;
    
`

export const CardText = styled.div`
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    margin-left: 30px;
    width: 50%;

    @media screen and (max-width: 767px) {
        margin-left: 16px;
        font-size: 16px;
    }
`

export const CardImg = styled.div`
    width: 50%;
    height: 100%;
`