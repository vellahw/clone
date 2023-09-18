import { useRecoilState } from 'recoil';
import { whiteNav } from "../recoil/atom";

import TopBanner from '../components/pages/main/TopBanner';
import {CompanyInfo, CorpInfo } from '../components/pages/main/CompanyInfo';
import MiddleBanner from '../components/pages/main/MiddleBanner';
import FlatformInfo from '../components/pages/main/FlatformInfo';
import NewsList from '../components/pages/main/NewsList';
import BottomBanner from '../components/pages/main/BottomBanner';
import MobileFloatingBtn from '../components/ui/MobileFloatingBtn';
import { useEffect } from 'react';

function MainPage() {
    const [isWhiteNav, setIsWhiteNav] = useRecoilState(whiteNav);
    
    useEffect(()=>{
        setIsWhiteNav(0);
    })
    
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