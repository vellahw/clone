import Header from './components/Header';
import TopBanner from './components/TopBanner';
import {CompanyInfo, CorpInfo } from './components/CompanyInfo';
import MiddleBanner from './components/MiddleBanner';
import FlatformInfo from './components/FlatformInfo';
import NewsList from './components/NewsList';
import BottomBanner from './components/BottomBanner';
import Footer from './components/Footer';
import MobileFloatingBtn from './components/MobileFloatingBtn';

function App() {
  return (
    <>
      <Header />

      <TopBanner />

      <CompanyInfo />

      <MiddleBanner />

      <FlatformInfo />

      <NewsList />

      <BottomBanner />

      <CorpInfo />
      
      <Footer />

      <MobileFloatingBtn />
    </>
  );
}

export default App;