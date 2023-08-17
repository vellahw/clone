import styled from 'styled-components';
import {InfoSection, InfoCardDiv, InfoCard, InfoCardR, InfoCardText} from './InfoSection';

export const FlatformSection = styled(InfoSection)`
    height: 1160px;
`

export const FlatformInfoCardDiv = styled(InfoCardDiv)`
    margin-top: 20px;
`

export const FlatformInfoCard = styled(InfoCard)`
    width: 300px;
    height: 510px;
    border-radius: 15px;
    padding: 30px;
    margin-right: 15px;
    background-color: #E7EBFA;
`

export const FlatformInfoCardText = styled(InfoCardText)`
    line-height: 34px;
    word-break: keep-all;
    width: 152px;
` 
export const FlatformInfoCardB = styled(InfoCardR)`
    background-color: #627AF5;
    border-radius: 15px;
    width: 207px;
    height: 206px;
    top: 612px;
    left: 80px;
`

export const FlatformInfoCardTextB = styled(FlatformInfoCardText)`
    color: #fff;
`

export const FlatformInfoCardBR = styled(InfoCardR)`
    background-color: #414551;
    border-radius: 15px;
    width: 522px;
    height: 206px;
    top: 612px;
    left: 395px;
`