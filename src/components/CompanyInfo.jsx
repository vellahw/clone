import React from 'react';
import logoPartner1 from '../image/logo/logo-partner1.png';
import logoPartner2 from '../image/logo/logo-partner2.png';
import * as i from '../styles/InfoSection';

export function CompanyInfo(){
    return (
        <i.InfoSection>
            <i.InfoTitle>회사 소개</i.InfoTitle>
            <i.InfoHeaderDiv>
            <i.InfoHeaderText>
                직투는 누구나 쉽게 부동산에 투자하고<br/>
                그 권리를 사고 팔 수 있는<br/>
                부동산 조각 투자 플랫폼입니다.<br/>
            </i.InfoHeaderText>
            </i.InfoHeaderDiv>
            <i.InfoCardDiv>
                <i.InfoCard>
                    <i.InfoCardTitle>안심하세요</i.InfoCardTitle>
                    <i.InfoCardText>
                        고객님의 모든 소중한 자산은<br/>
                        대한민국 최고의 은행과 신탁사에<br/>
                        안전하게 보관됩니다.
                    </i.InfoCardText>
                    <img src={logoPartner1} className='partner-logo' alt='파트너 로고1'></img>
                </i.InfoCard>
                <i.InfoCardR>
                    <i.InfoCardTitle>기대하세요</i.InfoCardTitle>
                    <i.InfoCardText>
                        빌딩 상장 시대를 만들어 나갈<br/>
                        직투에 국내외 대표 투자사,<br/>
                        금융기관이 투자 하였습니다.<br/>
                    </i.InfoCardText>
                    <img src={logoPartner2} className='partner-logo' alt='파트너 로고2'></img>
                </i.InfoCardR>
            </i.InfoCardDiv>
        </i.InfoSection>
    )
}

export function CorpInfo() {
    return (
        <i.InfoSection>
            <i.InfoTitle>법인 회원</i.InfoTitle>
            <i.InfoHeaderDiv>
                <i.HelpText>
                법인회원으로 가입을 원하시는 경우, <br/>
                법인 고객 상담팀(support@ziktu.com)으로 요청 주시면 도움 드리겠습니다.
                </i.HelpText>
                <i.ButtonDiv>
                    <i.HelpButton>문의하기</i.HelpButton>
                    <a href='https://static.kr.kasa.exchange/corp/%EB%B2%95%EC%9D%B8%EC%83%81%ED%92%88%EC%84%A4%EB%AA%85%EC%84%9C.pdf' target="_blank" rel="noreferrer">
                    <i.DownloadFileText>법인 상품설명서 다운로드</i.DownloadFileText>
                    </a>
                </i.ButtonDiv>
            </i.InfoHeaderDiv>
      </i.InfoSection>
    )
}

// export default CompanyInfo;