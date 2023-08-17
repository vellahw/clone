import React from 'react';
import cover1 from '../image/cover1.jpg';
import cover2 from '../image/cover2.jpg';
import cover3 from '../image/cover3.jpg';
import * as c from '../styles/TopBanner';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TopBanner(){
    return(
        <c.CoverSection>
            <c.HeaderContainer>
                <c.CoverHeaderDiv>
                    <c.CoverHeader>압구정 커머스빌딩</c.CoverHeader>
                    <c.CoverHeaderTextDiv>
                        <p className='text'>
                        부동산금융 명가 대신그룹의 노하우를 담은 첫 번째 건물
                        </p>
                        <p className='text'>
                        9월 6일 공모가 시작됩니다!
                        </p>
                    </c.CoverHeaderTextDiv>
                    <c.CoverButton>지금 시작하기</c.CoverButton>
                </c.CoverHeaderDiv>
            </c.HeaderContainer>

            <Carousel
                showArrows={false}
                centerMode={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                autoPlay={true}
                infiniteLoop={true}
                transitionTime={1000}
            >
                <img src={cover1} className='cover-img' alt='커버 이미지'></img>
                <img src={cover2} className='cover-img' alt='커버 이미지'></img>
                <img src={cover3} className='cover-img' alt='커버 이미지'></img>
            </Carousel>
        </c.CoverSection>
    )
}

export default TopBanner;