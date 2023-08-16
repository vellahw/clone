import './App.css';
import styled from "styled-components";
import headerLogo from './image/ziktu-logo.png';
import cover1 from './image/cover1.jpg';
import logoPartner1 from './image/logo-partner1.png';
import logoPartner2 from './image/logo-partner2.png';
import banner from './image/banner.jpg';
import * as n from './styles/Navbar';
import * as i from './styles/InfoSection';
import * as f from './styles/FlatformSection';
// import carousel from 'react-responsive-carousel';

function App() {
  return (
    <Wrapper>
      {/* 네비게이션 바 영역 */}
      <n.Navigation>
        <n.NavigationWrap>
          <a href='http://localhost:3000/'>
            <img src={headerLogo} className='header-logo' alt='로고 이미지'></img>
          </a>
          <n.CategoryDiv>
            <n.CategoryList>
              <n.CategoryItem>카사 소식</n.CategoryItem>
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
      <CoverSection>
        <HeadInfoDiv>
          <HeadInfoTitle>압구정 커머스빌딩</HeadInfoTitle>
          <HeadInfoTextDiv>
            <p className='text'>
            부동산금융 명가 대신그룹의 노하우를 담은 첫 번째 건물
            </p>
            <p className='text'>
            9월 6일 공모가 시작됩니다!
            </p>
          </HeadInfoTextDiv>
          <HeadInfoButton>지금 시작하기</HeadInfoButton>
        </HeadInfoDiv>
        <img src={cover1} className='cover-img' alt='커버 이미지'></img>
      </CoverSection>

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
      <MiddleBannerSection>
        <MiddleBannerHeaderDiv>
          <MiddleBannerHeader>세상에 없던</MiddleBannerHeader>
          <MiddleBannerHeader>새로운 부동산 투자</MiddleBannerHeader>
        </MiddleBannerHeaderDiv>
        <img src={banner} className='middle-banner-img' alt='중간 배너 이미지'></img>
      </MiddleBannerSection>

      {/* 플랫폼 소개 영역 */}
      <i.InfoSection>
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

          <f.FlatformInfoCardB></f.FlatformInfoCardB>
          <f.FlatformInfoCardBR></f.FlatformInfoCardBR>
        </f.FlatformInfoCardDiv>
      </i.InfoSection>
    </Wrapper>
  );
}

export default App;

const Wrapper =  styled.div`
`
const CoverSection = styled.section`
  /* position: absolute; */
  top: 0;

  .cover-img {
    width: 100vw;
    height: 852px;
    object-fit: cover;
    /* position: relative; */
  }
`

const HeadInfoDiv = styled.div`
  color: #fff;
  position: absolute;
`

const HeadInfoTitle = styled.h1`
  font-size: 54px;
  margin: 0;

`

const HeadInfoTextDiv = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 18px;

  .text{
    margin: 0;
  }
`
const HeadInfoButton = styled.button`
  background-color: #627AF5;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  width: 146px;
  height: 48px;
  margin-top: 28px;
`

const MiddleBannerSection = styled.section`
  margin-top: 130px;
  margin-bottom: 20px;
  height: 500px;
  overflow: hidden;
  text-align: center;
  position: relative;

  .middle-banner-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
const MiddleBannerHeaderDiv = styled.div`
  position: absolute;
  top: 35%;
  left: 35%;
`

const MiddleBannerHeader = styled.h1`
  color: #fff;
  font-size: 54px;
  margin: 0;
`