import styled from 'styled-components';
import {NewsSection} from './NewsListStyle'; 
import {InfoSection} from './InfoStyle'; 

export const FooterSection = styled(NewsSection)`
    margin-top: 48px;
    height: auto;

    @media(max-width: 767px) {
        margin-top: 0;
        font-size: 14px;
    }
`

export const FooterContainer = styled(InfoSection)`
    height: 100%;
    position: relative;
    padding: 40px 0 80px 0;

    @media(max-width: 767px) {
        padding-bottom: 100px;
    }
`

export const AddressDiv = styled.div`
    display: flex;
    color: #414551;
    padding-top: 6px;
    font-weight: 600;
    margin-bottom: 10px;

    @media(max-width: 767px) {
        padding-top: 0;
        flex-direction: column;
    }
`

export const AddressArticle = styled.address`
    @media(max-width: 767px) {
        margin-top: 3px;
    }
`

export const AddressHeader = styled.span`
    margin-right: 4px;
`

export const Address = styled.address`
    margin-right: 12px;
    font-weight: normal;
    color: #414551;
    display: inline;
`

export const Line = styled.span`
    margin-right: 12px;
    font-weight: 300;

    @media(max-width: 767px) {
        display: none;
    }
`

export const Copyright = styled.p`
    font-weight: normal;
    color: #414551;
    margin-top: 10px;
    margin-bottom: 0;
`

export const SocialLogoDiv = styled.div`
    display: flex;
    position: absolute;
    top:53px;
    right: 38px;

    .sns-link {
        margin: 0 12px 0 12px;
    }

    .sns-logo {
        font-size: 32px;
        color: #373B41;
    }

    .fb {
        margin-left: 0;
    }

    .youtube {
        font-size: 38px;
        bottom: 4px;
        position: absolute;
    }

    .blog {
        width: 36px;
    }

    @media(max-width: 767px) {
        right: 0;
        position: static;
        margin-top: 40px;

        .youtube {
            bottom: 320px;
        }
    }
`

export const ArticleDiv = styled.div`
    color: #414551;
    font-weight: 600;
    padding-top: 20px;

    .service {
        padding-right: 18px;
    }

    .business-info{
        display: flex;
        align-items: center;
        padding-top: 0;

        @media(max-width: 767px) {
            flex-direction: column;
            align-items: start;
            margin-bottom: 4px;
        }
    }
`

export const ArticleText = styled.span`
    margin-right: 12px;
    font-weight: normal;
    color: #414551;

    @media(max-width: 767px) {
        padding-bottom: 3px;
    }
`

export const ArticleLine = styled.div`
    width: 1px;
    height: 13px;
    margin-right: 12px;

    @media(max-width: 767px) {
        display: none;
    }
`

export const CompanyInfoDiv = styled(ArticleDiv)`
    margin-top: 12px;
`

export const CompanyHeader = styled.p`
    margin-bottom: 5px;
`
export const LogoContainer = styled.div`
    margin-top: 48px;
    display: flex;

    @media(max-width: 767px) {
        flex-direction: column;

        .sw-area {
            margin-left: 11px;
        }
    }
`

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;

    .footer-logo {
        margin-right: 16px;
    }

    @media(max-width: 767px) {
        font-size: 12px;
        margin-top: 16px;
    }
`

export const LastLine = styled.span`
    width: 1px;
    height: 32px;
    background-color: #AFB0B6;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 24px;
    margin-left: 12px;

    @media(max-width: 767px) {
        display: none;
    }
`