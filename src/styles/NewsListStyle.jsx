import styled from 'styled-components';
import {InfoHeaderDiv, InfoSection, InfoTitle, InfoHeaderText} from './InfoStyle'; 

export const NewsSection = styled.section`
    background-color: #F6F6F9;
    height: auto;
`

export const NewsWrapper = styled(InfoSection)`
    background-color: #E1E1E5;
    height: 560px;
`
export const SectionTitle = styled(InfoTitle)`
    background-color: #C1C2CB;
    
`
export const NewsContainer = styled.div`
    background-color: #C1C2CB;
    margin-top: 44px;
    margin-left: 90px;
`

export const NewsHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

export const NewsHeader = styled(InfoHeaderText)`
    background-color: #9B9CA6;
`

export const ViewAllTextDiv = styled.div`
    background-color: #9B9CA6;
    display: flex;
    align-items: center;
    cursor: pointer;

    .arrow-icon{
        font-size: 18px;
        padding-left: 3px;
    }
`
export const ViewAllText = styled.div`
    font-size: 20px;
`

export const NewsList = styled.ul`
    margin: 0;
    padding: 0;
`

export const NewsItem = styled.li`
    background-color: #9B9CA6;

    /* padding-left: 40px; */
    /* margin: 14px 0 40px 40px; */
    cursor: pointer;
    border-bottom: 1px solid #dadee3;
`

export const NewsTitle = styled.h2`
    font-weight: normal;
    font-size: 26px;
    margin: 40px 0 12px 0;
`

export const NewsInfo = styled.div`
    color: #626870;
    padding: 0 0 34px 5px;
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