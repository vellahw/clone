import Navbar from './components/Navbar';
import TopBanner from './components/TopBanner';
import {CompanyInfo, CorpInfo } from './components/CompanyInfo';
import MiddleBanner from './components/MiddleBanner';
import FlatformInfo from './components/FlatformInfo';
import NewsList from './components/NewsList';
import BottomBanner from './components/BottomBanner';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* 네비게이션 바 */}
      <Navbar />

      {/* 상단 배너 */}
      <TopBanner />

      {/* 회사 소개 */}
      <CompanyInfo />

      {/* 중간 배너 */}
      <MiddleBanner />

      {/* 플랫폼 소개 */}
      <FlatformInfo />

      {/* 보도자료 */}
      <NewsList />
      
      {/* 하단 배너 */}
      <BottomBanner />

      {/* 법인 회원 안내 */}
      <CorpInfo />

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;