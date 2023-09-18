import MetaTags from './MetaTags'
import * as b from '../styles/buliding/BuildingPageStyle';
import * as e from '../styles/event/EventPageStyle';
import { useState } from "react";
import data from '../data.json';

function Event() {
    const [meta] = useState({ 
        title: '카사 - 이벤트 페이지', 
        description: '이벤트 목록 페이지입니다.',
        ogUrl: "https://i.ibb.co/fSnXz66/og-image.png"
    })

    const goDetail = ()=>{
        alert("상세페이지로 이동")
    }

    return(
        <>
            <MetaTags meta={[meta]} />

            <b.Section>
                <b.Header>이벤트</b.Header>
                
                <e.ContentsList>
                    {data.events.map(i=>{
                        return(
                            <e.ContentsItem key={i.no} onClick={goDetail}>
                                <e.ItemContainer>
                                    <e.ThumnailContainer>
                                        <img src={i.src} className='event-thumnail' alt="썸네일 이미지"></img>
                                    </e.ThumnailContainer>
                                    <e.EventTitle>{i.title}</e.EventTitle>
                                    <e.EventStatus status={i.status}>{i.status}</e.EventStatus>
                                </e.ItemContainer>
                            </e.ContentsItem>
                        )
                    })}
                </e.ContentsList>
            </b.Section>
        </>
    )
}

export default Event;