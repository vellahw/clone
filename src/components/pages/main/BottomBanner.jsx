import * as c from '../../../styles/main/BannerSectionStyle';

function BottomBanner() {
    return (
        <c.BottomBannerSection>
            <c.ImgContainer>
                {/* <img src={bg} className='bg-img'></img> */}
            </c.ImgContainer>
            <div className='b section-container'>
                <c.BottomHeaderContainer>
                    <c.HeaderWrapper>
                        <c.Header>
                            지금 바로 카사에서 <br/>
                            건물주주가 되어보세요.
                        </c.Header>
                        <c.InfoContainer>
                            <c.BottomBannerButton>건물 투자 시작하기</c.BottomBannerButton>
                                <c.BottomBannerInfo>
                                    건물 이름과 거래 화면 등은 이해를 돕기 위한 설정으로 실재 건물이 아니며 이후 변경될 수 있습니다.
                                </c.BottomBannerInfo>
                        </c.InfoContainer>
                    </c.HeaderWrapper>
                </c.BottomHeaderContainer>
            </div>
        </c.BottomBannerSection>
    )
}

export default BottomBanner;