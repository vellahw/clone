import styled from 'styled-components';
import {NewsSection} from './NewsListStyle'; 
import {InfoSection} from './InfoStyle'; 

export const FooterSection = styled(NewsSection)`
    margin-top: 48px;
    height: auto;
`

export const FooterContainer = styled(InfoSection)`
    height: 100%;
    position: relative;
    padding: 40px 0 80px 0;
`

export const AddressDiv = styled.div`
    background-color: #E1E1E5;

    display: flex;
    color: #414551;
    padding-top: 6px;
    font-weight: 600;
    margin-bottom: 10px;
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
`

export const Copyright = styled.p`
    background-color: #E1E1E5;

    font-weight: normal;
    color: #414551;
    margin-top: 10px;
    margin-bottom: 0;
`

export const SocialLogoDiv = styled.div`
    background-color: #C1C2CB;

    display: flex;
    position: absolute;
    right: 0;
    top:53px;

    .sns-logo {
        font-size: 32px;
        color: #373B41;
        margin-right: 14px;
        margin-left: 14px;
        cursor: pointer;
    }
`

export const ArticleDiv = styled.div`
    background-color: #E1E1E5;

    color: #414551;
    font-weight: 600;
    padding-top: 18px;
`

export const ArticleText = styled.span`
    margin-right: 12px;
    font-weight: normal;
    color: #414551;
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
`

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;

    .footer-logo {
        margin-right: 16px;
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
`