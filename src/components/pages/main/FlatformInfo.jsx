import React from 'react';
import * as f from '../../../styles/main/FlatformStyle';
import * as i from '../../../styles/InfoStyle';
import { useScrollFadeIn } from '../../../hooks/useScrollFadeIn'

function FlatformInfo() {
    const fadeInHeader = useScrollFadeIn();

    const card = [
        {
            no: 1,
            title: "선착순 공모로 쉽고 빠르게 청약",
            delay: '0.1'
        },
        {
            no: 2,
            title: "3개월마다 받는 임대배당수익",
            delay: '0.15'
        },
        {
            no: 3,
            title: "건물 지분을 주식처럼 거래",
            delay: '0.2'
        }
    ]

    return (
        <f.FlatformSection>
            <i.InfoTitle>플랫폼 소개</i.InfoTitle>
            <i.InfoHeaderWrapper {...fadeInHeader}>
                <i.InfoHeader>상업용 부동산 투자,</i.InfoHeader>
                <i.InfoHeader>카사에서 누구나 쉽고 간편하게.</i.InfoHeader>
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
                    <f.FlatformInfoCardText className='br-card-text'>건물 매각에 따른 투자수익까지</f.FlatformInfoCardText>
                </f.FlatformInfoCardB>
                <f.FlatformInfoCardBR>
                    <f.FlatformInfoCardText className='br-card-text'>부동산 세금<br/>걱정없는 투자</f.FlatformInfoCardText>
                    <f.FlatformCardImgContainerBR>
                        <f.FlatformCardImgBR></f.FlatformCardImgBR>
                    </f.FlatformCardImgContainerBR>
                </f.FlatformInfoCardBR>
            </f.FlatformInfoCardDiv>
        </f.FlatformSection>
    )
}

export default FlatformInfo;