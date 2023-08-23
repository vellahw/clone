import TopBanner from '../components/pages/main/TopBanner';
import {CompanyInfo, CorpInfo } from '../components/pages/main/CompanyInfo';
import MiddleBanner from '../components/pages/main/MiddleBanner';
import FlatformInfo from '../components/pages/main/FlatformInfo';
import NewsList from '../components/pages/main/NewsList';
import BottomBanner from '../components/pages/main/BottomBanner';
import MobileFloatingBtn from '../components/layout/MobileFloatingBtn';

function MainPage() {
    return(
        <>
            <TopBanner />

            <CompanyInfo />

            <MiddleBanner />

            <FlatformInfo />

            <NewsList />

            <BottomBanner />

            <CorpInfo />

            <MobileFloatingBtn />
        </>
    )
}

export default MainPage;