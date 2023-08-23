import * as c from '../../../styles/BannerSectionStyle';
import bg from '../../../image/bottom-bg.png';

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
                            지금 바로 직투에서 <br/>
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

        // <b.BottomBannerSection>
        //     <b.BottomBannerContainer>
        //         <b.ImgContainer>
        //             <b.BottomBannerImg>
        //             </b.BottomBannerImg>
        //         </b.ImgContainer>
        //         <b.BottomBannerHeaderDiv>
        //             <b.BottomBannerHeader>
        //                 지금 바로 직투에서 <br/>
        //                 건물주주가 되어보세요.
        //             </b.BottomBannerHeader>
        //             <b.BottomBannerButton>건물 투자 시작하기</b.BottomBannerButton>
        //             <b.BottomBannerInfo>
        //                 건물 이름과 거래 화면 등은 이해를 돕기 위한 설정으로 실재 건물이 아니며 이후 변경될 수 있습니다.
        //             </b.BottomBannerInfo>
        //         </b.BottomBannerHeaderDiv>
        //     </b.BottomBannerContainer>    
        // </b.BottomBannerSection>
    )
}

export default BottomBanner;