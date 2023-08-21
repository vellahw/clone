import styled from 'styled-components';
import {InfoSection, InfoTitle, InfoHeader} from './InfoStyle'; 

export const NewsSection = styled.section`
    background-color: #F6F6F9;
    height: auto;
`

export const NewsWrapper = styled(InfoSection)`
    height: auto;
    padding-top: 28px;

    @media(max-width: 767px) {
        height: auto;
    }
`
export const SectionTitle = styled(InfoTitle)`
    
`
export const NewsContainer = styled.div`
    margin-top: 44px;
    margin-left: 90px;
    
    @media(max-width: 767px) {
        margin-left: 0;
    }
`

export const NewsHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

export const NewsHeader = styled(InfoHeader)`
`

export const ViewAllTextDiv = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    .arrow-icon{
        font-size: 18px;
        padding-left: 3px;
        
        @media(max-width: 767px) {
            font-size: 17px;
            padding-top: 1px;
        }
    }

`
export const ViewAllText = styled.div`
    font-size: 20px;

    @media(max-width: 767px) {
        font-size: 15px;
    }
`

export const NewsList = styled.ul`
    margin: 0;
    padding: 0;
`

export const NewsItem = styled.li`
    /* padding-left: 40px; */
    /* margin: 14px 0 40px 40px; */
    cursor: pointer;
    border-bottom: 1px solid #dadee3;
`

export const NewsTitle = styled.h2`
    font-weight: normal;
    font-size: 26px;
    margin: 40px 0 12px 0;

    @media(max-width: 767px) {
        font-size: 16px;
        margin: 26px 0 12px 0;
    }
`

export const NewsInfo = styled.div`
    color: #626870;
    padding: 0 0 34px 5px;

    @media(max-width: 767px) {
        padding: 0 0 24px 0;
        font-size: 14px;
    }
`

export const NewsPress = styled.span`
    font-weight: 600;
    color: #000;
`
export const Line = styled.span`
    padding: 0 10px 0 10px;
`

export const NewsDate = styled.span`

`