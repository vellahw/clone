import logoPartner1 from '../image/logo/logo-partner1.png';
import logoPartner2 from '../image/logo/logo-partner2.png';
import Rectangle from '../image/logo/Rectangle.svg';
import {FaCircle} from 'react-icons/fa';
import * as i from '../styles/InfoStyle';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn'

export function CompanyInfo(){
    const logos = [
        {
            no: 1,
            src: {Rectangle}
        },
        {
            no: 2,
            src: {Rectangle}
        },
        {
            no: 3,
            src: {Rectangle}
        },
        {
            no: 4,
            src: {Rectangle}
        }
    ]

    const logoLoop = (length) => {
        const newArr = [];
        for (let i = 1; i <= length; i++) {
          newArr.push(<img src={'/logo-partner-'+{i}+'.png'} className='partners' key={i}/>);
        }
        return newArr;
      };

    const fadeInHeader = useScrollFadeIn();
    const fadeLeftCard = useScrollFadeIn();
    const fadeRightCard = useScrollFadeIn(0.1);

    return (
        <i.InfoSection>
            <i.InfoTitle>회사 소개</i.InfoTitle>
            <i.InfoHeaderWrapper {...fadeInHeader}>
                <i.InfoHeader>
                    직투는 누구나 쉽게 부동산에 투자하고<br/>
                    그 권리를 사고 팔 수 있는<br/>
                    부동산 조각 투자 플랫폼입니다.<br/>
                </i.InfoHeader>
            </i.InfoHeaderWrapper>
            <i.InfoCardDiv>
                <i.InfoCard {...fadeLeftCard}>
                    <i.InfoCardTitle>안심하세요</i.InfoCardTitle>
                    <i.InfoCardText>
                        고객님의 모든 소중한 자산은<br/>
                        대한민국 최고의 은행과 신탁사에<br/>
                        안전하게 보관됩니다.
                    </i.InfoCardText>

                    <i.PartersLogoContainer>
                        {/* { logoLoop(5) } */}
                        <img src={logoPartner1} className='partner-logo' alt='파트너 로고1'></img>
                    </i.PartersLogoContainer>

                </i.InfoCard>
                <i.InfoCardR {...fadeRightCard}>
                    <i.InfoCardTitle>기대하세요</i.InfoCardTitle>
                    <i.InfoCardText>
                        빌딩 상장 시대를 만들어 나갈<br/>
                        직투에 국내외 대표 투자사,<br/>
                        금융기관이 투자 하였습니다.<br/>
                    </i.InfoCardText>

                    {/* <i.PartersLogoR> */}
                        <img src={logoPartner2} className='partner-logo' alt='파트너 로고2'></img>
                        {/* { logoLoop(4) } */}
                        {/* <FaCircle className='partners b1' />
                        <img src={Rectangle} alt="가로로고" className='rec'/>
                        <FaCircle className='partners b2' />
                        <FaCircle className='partners b3' /> */}
                    {/* </i.PartersLogoR> */}
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
                법인 고객 상담팀(support@ziktu.com)으로 요청 주시면 도움 드리겠습니다.
                </i.HelpText>
                <i.ButtonDiv>
                    <i.HelpButton>문의하기</i.HelpButton>
                    <a href='https://static.kr.kasa.exchange/corp/%EB%B2%95%EC%9D%B8%EC%83%81%ED%92%88%EC%84%A4%EB%AA%85%EC%84%9C.pdf' target="_blank" rel="noreferrer">
                    <i.DownloadFileText>법인 상품설명서 다운로드</i.DownloadFileText>
                    </a>
                </i.ButtonDiv>
            </i.InfoHeaderWrapper>
      </i.CorpSection>
    )
}