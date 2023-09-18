import MetaTags from './MetaTags'
import * as b from '../styles/buliding/BuildingPageStyle';
import { useState } from "react";
import {BuildingInfo} from '../components/pages/building/BuildingInfo';
import data from '../data.json';

function Building() {
    const [meta] = useState({ 
        title: '카사 - 빌딩 정보 페이지', 
        description: '빌딩 정보 목록 페이지입니다.',
        ogUrl: "https://i.ibb.co/fSnXz66/og-image.png"
    })

    const goBlog = ()=>{
        alert("블로그로 이동")
    }

    return (
        <>
            <MetaTags meta={meta} />

            <b.Section>
                <b.Header>빌딩 정보</b.Header>
                <b.BuildingInfoContainer>
                    <BuildingInfo data={data.buildings}></BuildingInfo>
                </b.BuildingInfoContainer>

                <b.HelpContainer>
                    <b.HelpHeader>거래 방법 알아보기</b.HelpHeader>
                    <b.CardWrapper>
                        <b.LeftCard onClick={goBlog}>
                            <b.CardText>
                                DABS 거래는
                                <br/>
                                어떻게 하는건가요?
                            </b.CardText>
                            <b.CardImg></b.CardImg>
                        </b.LeftCard>
                        <b.RightCard onClick={goBlog}>
                            <b.CardText>
                                왜 카사에서
                                <br/>
                                거래해야 할까요?
                            </b.CardText>
                            <b.CardImg></b.CardImg>
                        </b.RightCard>
                    </b.CardWrapper>
                </b.HelpContainer>
            </b.Section>
        </>
    )
}

export default Building;