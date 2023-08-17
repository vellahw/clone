import React from 'react';
import banner from '../image/banner.jpg';
import * as b from '../styles/BannerSection';

function MiddleBanner(){
    return (
        <b.MiddleBannerSection>
            <b.MiddleBannerHeaderDiv>
                <b.BannerHeader>
                    세상에 없던 <br/>
                    새로운 부동산 투자
                </b.BannerHeader>
            </b.MiddleBannerHeaderDiv>
            <img src={banner} className='middle-banner-img' alt='중간 배너 이미지'></img>
        </b.MiddleBannerSection>
    )
}

export default MiddleBanner;