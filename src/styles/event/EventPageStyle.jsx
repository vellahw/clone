import styled from 'styled-components';

export const ContentsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 16px 0 16px;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        padding: 0;
    }
`

export const ContentsItem = styled.li`
    cursor: pointer;
    width: calc(50% - 20px);
    display: flex;
    margin-bottom: 40px;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`
export const ItemContainer = styled.div`
    border-radius: 4px;
`

export const ThumnailContainer = styled.div`
    overflow: hidden;
    
    .event-thumnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(${(props) => (!props.status === '종료' ? 'none' : '0.4')});
    }
`

export const EventTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
`

export const EventStatus = styled.div`
    font-size: 14px;
`