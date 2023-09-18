import React from 'react';
import cover1 from '../../../image/cover1.png';
import cover2 from '../../../image/cover2.png';
import cover3 from '../../../image/cover3.png';
import cover4 from '../../../image/cover4.png';
import * as c from '../../../styles/main/BannerSectionStyle';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TopBanner(){
    const openQr = () => {
        alert("QR");
    }
    
    return(
        <c.TopBannerSection>
            <div className='section-container'>
                <c.HeaderContainer>
                    <c.HeaderWrapper>
                        <c.Header>압구정 커머스빌딩</c.Header>
                        <c.HeaderTextContainer>
                            <p className='text'>
                            부동산금융 명가 대신그룹의 노하우를 담은 첫 번째 건물
                            </p>
                            <p className='text'>
                            9월 6일 공모가 시작됩니다!
                            </p>
                        </c.HeaderTextContainer>
                        <c.HeaderButton onClick={openQr}>지금 시작하기</c.HeaderButton>
                    </c.HeaderWrapper>
                </c.HeaderContainer>
            </div>

            <Carousel className='slider'
                showArrows={false}
                centerMode={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                autoPlay={true}
                infiniteLoop={true}
                transitionTime={1000}
                preventMovementUntilSwipeScrollTolerance={true}
            >
                <img src={cover1} className='cover-img' alt='커버 이미지'></img>
                <img src={cover2} className='cover-img' alt='커버 이미지'></img>
                <img src={cover3} className='cover-img' alt='커버 이미지'></img>
                <img src={cover4} className='cover-img' alt='커버 이미지'></img>
            </Carousel>
        </c.TopBannerSection>
    )
}

export default TopBanner;