import * as b from '../styles/BannerSectionStyle';

function BottomBanner() {
    return (
        <b.BottomBannerSection>
            <b.BottomBannerContainer>
                <b.ImgContainer>
                    <b.BottomBannerImg>
                    </b.BottomBannerImg>
                </b.ImgContainer>
                <b.BottomBannerHeaderDiv>
                    <b.BottomBannerHeader>
                        지금 바로 직투에서 <br/>
                        건물주주가 되어보세요.
                    </b.BottomBannerHeader>
                    <b.BottomBannerButton>건물 투자 시작하기</b.BottomBannerButton>
                    <b.BottomBannerInfo>
                        건물 이름과 거래 화면 등은 이해를 돕기 위한 설정으로 실재 건물이 아니며 이후 변경될 수 있습니다.
                    </b.BottomBannerInfo>
                </b.BottomBannerHeaderDiv>
            </b.BottomBannerContainer>    
        </b.BottomBannerSection>
    )
}

export default BottomBanner;