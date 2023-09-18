import {useScrollFadeIn} from '../../../hooks/useScrollFadeIn';
import * as i from '../../../styles/InfoStyle';

export function CompanyInfo(){
    const headerFadeIn = useScrollFadeIn(0);
    const leftCardFadeIn = useScrollFadeIn(0.1);
    const rightCardFadeIn = useScrollFadeIn(0.15);

    const logoLoop = (start, length, className) => {
        const newArr = [];
        for (let i = start; i <= length; i++) { 
          newArr.push(<img src={'/partners/logo-partner-'+i+'.png'} className={className} key={i} alt='파트너 로고' />);
        }
        return newArr;
      };

    return (
        <i.InfoSection>
            <i.InfoTitle>회사 소개</i.InfoTitle>
            <i.InfoHeaderWrapper {...headerFadeIn}>
                <i.InfoHeader>
                    카사는 누구나 쉽게 부동산에 투자하고<br/>
                    그 권리를 사고 팔 수 있는<br/>
                    부동산 조각 투자 플랫폼입니다.<br/>
                </i.InfoHeader>
            </i.InfoHeaderWrapper>
            <i.InfoCardDiv>
                <i.InfoCard {...leftCardFadeIn}>
                    <i.InfoCardTitle>안심하세요</i.InfoCardTitle>
                    <i.InfoCardText>
                        고객님의 모든 소중한 자산은<br/>
                        대한민국 최고의 은행과 신탁사에<br/>
                        안전하게 보관됩니다.
                    </i.InfoCardText>

                    <i.PartersLogoContainer>
                        { logoLoop(1, 5, 'partners') }
                    </i.PartersLogoContainer>

                </i.InfoCard>
                <i.InfoCardR {...rightCardFadeIn}>
                    <i.InfoCardTitle>기대하세요</i.InfoCardTitle>
                    <i.InfoCardText>
                        빌딩 상장 시대를 만들어 나갈<br/>
                        카사에 국내외 대표 투자사,<br/>
                        금융기관이 투자 하였습니다.<br/>
                    </i.InfoCardText>

                    <i.PartersLogoR>
                        <img src={'/partners/logo-partner-1.png'} className='partners-hana' alt='파트너 로고2'></img>
                        { logoLoop(6, 8, 'partners')}
                        <img src={'/partners/logo-partner-10.png'} className='partners-bottom-left' alt='파트너 로고2'></img>
                        <img src={'/partners/logo-partner-9.png'} className='partners-kakao' alt='파트너 로고2'></img>
                        { logoLoop(11, 12, 'partners-bottom')}
                    </i.PartersLogoR>
                </i.InfoCardR>
            </i.InfoCardDiv>
        </i.InfoSection>
    )
}

export function CorpInfo() {
    return (
        <i.CorpSection>
            <i.InfoTitle>법인 회원</i.InfoTitle>
            <i.InfoHeaderWrapper>
                <i.HelpText>
                법인회원으로 가입을 원하시는 경우, <br/>
                법인 고객 상담팀(support@kaka.com)으로 요청 주시면 도움 드리겠습니다.
                </i.HelpText>
                <i.ButtonDiv>
                    <i.HelpButton>
                        <a className="help-btn" href='mailto:"support@test.com"'>
                            문의하기
                        </a>
                    </i.HelpButton>
                    <a href='https://static.kr.kasa.exchange/corp/%EB%B2%95%EC%9D%B8%EC%83%81%ED%92%88%EC%84%A4%EB%AA%85%EC%84%9C.pdf' target="_blank" rel="noreferrer">
                    <i.DownloadFileText>법인 상품설명서 다운로드</i.DownloadFileText>
                    </a>
                </i.ButtonDiv>
            </i.InfoHeaderWrapper>
      </i.CorpSection>
    )
}