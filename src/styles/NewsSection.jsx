import styled from 'styled-components';
import {InfoHeaderDiv} from './InfoSection'; 

export const NewsSection = styled.section`
    background-color: #F6F6F9;
    height: auto;
`

export const NewsHeaderDiv = styled(InfoHeaderDiv)`
    display: flex;
    justify-content: space-between;
`
export const ViewAllTextDiv = styled.div`
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
`

export const NewsItem = styled.li`
    /* padding-left: 40px; */
    margin: 14px 0 40px 40px;
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