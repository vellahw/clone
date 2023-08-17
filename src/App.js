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
      <Navbar />

      <TopBanner />

      <CompanyInfo />

      <MiddleBanner />

      <FlatformInfo />

      <NewsList />

      <BottomBanner />

      <CorpInfo />
      
      <Footer />
    </>
  );
}

export default App;