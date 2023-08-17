import * as b from '../styles/BannerSection';
import * as i from '../styles/InfoSection';

function BottomBanner() {
    return (
        <b.BottomBannerSection>
            <i.InfoSection>
            <b.BottomBannerHeaderDiv>
            <b.BannerHeader>
                지금 바로 직투에서 <br/>
                건물주주가 되어보세요.
            </b.BannerHeader>
            </b.BottomBannerHeaderDiv>
            <b.BottomBannerButton>건물 투자 시작하기</b.BottomBannerButton>
            <b.BottomBannerInfo>
            건물 이름과 거래 화면 등은 이해를 돕기 위한 설정으로 실재 건물이 아니며 이후 변경될 수 있습니다.
            </b.BottomBannerInfo>
            </i.InfoSection>
        </b.BottomBannerSection>
    )
}

export default BottomBanner;