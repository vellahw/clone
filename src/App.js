import './App.css';
import styled from "styled-components";
import headerLogo from './image/ziktu-logo.png';
import cover1 from './image/cover1.jpg';
import logoPartner1 from './image/logo-partner1.png';
import logoPartner2 from './image/logo-partner2.png';
import banner from './image/banner.jpg';
import iso from './image/logo/iso-27001.svg';
import sw from './image/logo/logo-sw.svg';
import isms from './image/logo/logo-isms.svg';
import blog from './image/logo/logo-naverblog.svg';
import {IoIosArrowForward} from 'react-icons/io';
import {BsFacebook} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';
import * as n from './styles/Navbar';
import * as i from './styles/InfoSection';
import * as f from './styles/FlatformSection';
import * as b from './styles/BannerSection';
import * as c from './styles/CoverSection';
import * as ns from './styles/NewsSection';
import * as fo from './styles/Footer';
// import carousel from 'react-responsive-carousel';

function App() {
  return (
    <>
      {/* 네비게이션 바 영역 */}
      <n.Navigation>
        <n.NavigationWrap>
          <a href='http://localhost:3000/'>
            <img src={headerLogo} className='header-logo' alt='로고 이미지'></img>
          </a>
          <n.CategoryDiv>
            <n.CategoryList>
              <n.CategoryItem>직투 소식</n.CategoryItem>
              <n.CategoryItem>빌딩 정보</n.CategoryItem>
              <n.CategoryItem>공시</n.CategoryItem>
              <n.CategoryItem>이벤트</n.CategoryItem>
              <n.CategoryItem>채용</n.CategoryItem>
              <n.CategoryItem>FAQ</n.CategoryItem>
              <n.CategoryItem>
                <n.AppDownloadBtn>카사 앱 다운로드</n.AppDownloadBtn>
              </n.CategoryItem>
            </n.CategoryList>
          </n.CategoryDiv>
        </n.NavigationWrap>
      </n.Navigation>

      {/* 커버 이미지 영역 */}
      <c.CoverSection>
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
        <img src={cover1} className='cover-img' alt='커버 이미지'></img>
      </c.CoverSection>

      {/* 회사 소개 영역 */}
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

      {/* 중간 배너 영역 */}
      <b.MiddleBannerSection>
        <b.MiddleBannerHeaderDiv>
          <b.BannerHeader>
            세상에 없던 <br/>
            새로운 부동산 투자
          </b.BannerHeader>
        </b.MiddleBannerHeaderDiv>
        <img src={banner} className='middle-banner-img' alt='중간 배너 이미지'></img>
      </b.MiddleBannerSection>

      {/* 플랫폼 소개 영역 */}
      <f.FlatformSection>
        <i.InfoTitle>플랫폼 소개</i.InfoTitle>
        <i.InfoHeaderDiv>
          <i.InfoHeaderText>상업용 부동산 투자,</i.InfoHeaderText>
          <i.InfoHeaderText>직투에서 누구나 쉽고 간편하게.</i.InfoHeaderText>
        </i.InfoHeaderDiv>
        <f.FlatformInfoCardDiv>
          <f.FlatformInfoCard>
            <f.FlatformInfoCardText>
              선착순 공모로<br/>쉽고 빠르게 청약
            </f.FlatformInfoCardText>
          </f.FlatformInfoCard>
          <f.FlatformInfoCard>
            <f.FlatformInfoCardText>
              3개월마다 받는<br/>임대배당수익
            </f.FlatformInfoCardText>
          </f.FlatformInfoCard>
          <f.FlatformInfoCard>
            <f.FlatformInfoCardText>
              건물 지분을<br/>주식처럼 거래
            </f.FlatformInfoCardText>
          </f.FlatformInfoCard>

          <f.FlatformInfoCardB>
            <f.FlatformInfoCardText>건물 매각에 따른 투자수익까지</f.FlatformInfoCardText>
          </f.FlatformInfoCardB>
          <f.FlatformInfoCardBR>
          <f.FlatformInfoCardText>부동산 세금<br/>걱정없는 투자</f.FlatformInfoCardText>
          </f.FlatformInfoCardBR>
        </f.FlatformInfoCardDiv>
      </f.FlatformSection>

      <ns.NewsSection>
        <i.InfoSection>
          <i.InfoTitle>직투 소식</i.InfoTitle>
          <ns.NewsHeaderDiv>
            <i.InfoHeaderText>
              보도자료
            </i.InfoHeaderText>
            <ns.ViewAllTextDiv>
              <ns.ViewAllText>
                전체보기
              </ns.ViewAllText>
              <IoIosArrowForward className='arrow-icon'/>
            </ns.ViewAllTextDiv>
          </ns.NewsHeaderDiv>
          <ns.NewsList>
            <ns.NewsItem>
              <ns.NewsTitle>
              '공모 재시동' 카사코리아, 대신그룹과 시너지 노린다
              </ns.NewsTitle>
              <ns.NewsInfo>
                <ns.NewsPress>더벨</ns.NewsPress>
                <ns.Line>|</ns.Line>
                <ns.NewsDate>2023년 08월 16일</ns.NewsDate>
              </ns.NewsInfo>
            </ns.NewsItem>
            <ns.NewsItem>
              <ns.NewsTitle>
              '공모 재시동' 카사코리아, 대신그룹과 시너지 노린다
              </ns.NewsTitle>
              <ns.NewsInfo>
                <ns.NewsPress>더벨</ns.NewsPress>
                <ns.Line>|</ns.Line>
                <ns.NewsDate>2023년 08월 16일</ns.NewsDate>
              </ns.NewsInfo>
            </ns.NewsItem>
            <ns.NewsItem>
              <ns.NewsTitle>
              '공모 재시동' 카사코리아, 대신그룹과 시너지 노린다
              </ns.NewsTitle>
              <ns.NewsInfo>
                <ns.NewsPress>더벨</ns.NewsPress>
                <ns.Line>|</ns.Line>
                <ns.NewsDate>2023년 08월 16일</ns.NewsDate>
              </ns.NewsInfo>
            </ns.NewsItem>
          </ns.NewsList>
        </i.InfoSection>
      </ns.NewsSection>

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

      <i.InfoSection>
        <i.InfoTitle>법인 회원</i.InfoTitle>
        <i.InfoHeaderDiv>
          <i.HelpText>
          법인회원으로 가입을 원하시는 경우, <br/>
          법인 고객 상담팀(support@ziktu.com)으로 요청 주시면 도움 드리겠습니다.
          </i.HelpText>
          <i.ButtonDiv>
            <i.HelpButton>문의하기</i.HelpButton>
            <a href='https://static.kr.kasa.exchange/corp/%EB%B2%95%EC%9D%B8%EC%83%81%ED%92%88%EC%84%A4%EB%AA%85%EC%84%9C.pdf' target="_blank">
              <i.DownloadFileText>법인 상품설명서 다운로드</i.DownloadFileText>
            </a>
          </i.ButtonDiv>
        </i.InfoHeaderDiv>
      </i.InfoSection>

      <fo.FooterSection>
        <fo.FooterContainer>
          <fo.AddressDiv>
            <fo.AddressHeader>
              언론보도
            </fo.AddressHeader>
            <fo.Address>
              press@ziktu.com
            </fo.Address>
            <fo.Line>
              |
            </fo.Line>
            <fo.AddressHeader>
              대표문의
            </fo.AddressHeader>
            <fo.Address>
              contact@ziktu.com
            </fo.Address>
            <fo.Copyright>
              ⓒ 2023. HAKERSHOLDINGS Inc. All rights reserved.
            </fo.Copyright>
          </fo.AddressDiv>

          <fo.SocialLogoDiv>
            <a href='https://www.facebook.com/bitstoa/' target='_blank'>
              <BsFacebook className='sns-logo' />
            </a>
            <a href='https://t.me/bitstoa_com' target='_blank'>
              <BsTelegram className='sns-logo'  />
            </a>
            <a href='https://www.youtube.com/channel/UCQEnD0zSF3ui9Tle_EwRMBQ/about' target='_blank'>
              <BsYoutube className='sns-logo' />
            </a>
            <a href='https://blog.naver.com/hackersholdings' target='_blank'>
              <img src={blog} className='sns-logo'></img>
            </a>
          </fo.SocialLogoDiv>

          <fo.ArticleDiv>
            <a href='http://hackers.iwinv.net/privacy_policy.html' target="_blank">
              개인정보 처리방침
            </a>
          </fo.ArticleDiv>
          
          <fo.ArticleDiv>
             <a href='https://static.kr.kasa.exchange/terms/service.html' target="_blank">
              서비스이용약관
            </a>
          </fo.ArticleDiv>
          
          <fo.CompanyInfoDiv>
            <fo.CompanyHeader>
              직투코리아
            </fo.CompanyHeader>
            <fo.ArticleText>
              사업자 등록번호 369-88-01323
            </fo.ArticleText>
            <fo.ArticleText>
              |
            </fo.ArticleText>
            <fo.ArticleText>
            대표 : 김로이
            </fo.ArticleText>
            <br/>
            <fo.Address>
              서울시 영등포구 의사당대로 82, 하나금융투자빌딩 11층 (07321)
            </fo.Address>
            
            <fo.LogoContainer>
              <fo.LogoDiv>
                <img src={iso} className='footer-logo'></img>
                <fo.ArticleText>
                  정보보안 국제표준<br/>
                  ISO 27001 인증 획득
                </fo.ArticleText>
              </fo.LogoDiv>
              <fo.LastLine></fo.LastLine>
              <fo.LogoDiv>
                <img src={sw} className='footer-logo'></img>
                <fo.ArticleText>
                  개인정보보호배상책임공제<br/>
                  가입 인증
                </fo.ArticleText>
                <fo.LastLine></fo.LastLine>
              </fo.LogoDiv>
              <fo.LogoDiv>
                <img src={isms} className='footer-logo'></img>
                <fo.ArticleText>
                  [인증범위] 직투 서비스 운영<br/>
                  [유효기간] 2022.11.16 ~ 2025.11.15
                </fo.ArticleText>
              </fo.LogoDiv>
            </fo.LogoContainer>
          </fo.CompanyInfoDiv>
        </fo.FooterContainer>
      </fo.FooterSection>
    </>
  );
}

export default App;

const Wrapper =  styled.div`
`