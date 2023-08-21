import React from 'react';
import * as f from '../styles/FlatformStyle';
import * as i from '../styles/InfoStyle';

function FlatformInfo() {
    const card = [
        {
            no: 1,
            title: "선착순 공모로 쉽고 빠르게 청약"
        },
        {
            no: 2,
            title: "3개월마다 받는 임대배당수익"
        },
        {
            no: 3,
            title: "건물 지분을 주식처럼 거래"
        }
    ]

    return (
        <f.FlatformSection>
            <i.InfoTitle>플랫폼 소개</i.InfoTitle>
            <i.InfoHeaderWrapper>
                <i.InfoHeader>상업용 부동산 투자,</i.InfoHeader>
                <i.InfoHeader>직투에서 누구나 쉽고 간편하게.</i.InfoHeader>
            </i.InfoHeaderWrapper>
            <f.FlatformInfoCardDiv>
                { card.map(i=>{
                    return (
                        <f.FlatformInfoCard key={i.no}>
                            <f.FlatformInfoCardText>
                                {i.title}
                            </f.FlatformInfoCardText>
                            <f.FlatformCardImgContainer>
                                <f.FlatformCardImg></f.FlatformCardImg>
                            </f.FlatformCardImgContainer>
                        </f.FlatformInfoCard>
                    )
                })}

                <f.FlatformInfoCardB>
                    <f.FlatformInfoCardText>건물 매각에 따른 투자수익까지</f.FlatformInfoCardText>
                </f.FlatformInfoCardB>
                <f.FlatformInfoCardBR>
                    <f.FlatformInfoCardText>부동산 세금<br/>걱정없는 투자</f.FlatformInfoCardText>
                    <f.FlatformCardImgContainerBR>
                        <f.FlatformCardImgBR></f.FlatformCardImgBR>
                    </f.FlatformCardImgContainerBR>
                </f.FlatformInfoCardBR>
            </f.FlatformInfoCardDiv>
        </f.FlatformSection>
    )
}

export default FlatformInfo;