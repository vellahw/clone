import {React, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import MainPage from '../pages/MainPage';
import BuildingPage from '../pages/Building';
import EventPage from '../pages/Event';
import ScrollToTop from "../components/ScrollToTop";

function Router() {
    const [isWhite, setIsWhite] = useState(false);

    return (
        <BrowserRouter>
            <Header isWhite={isWhite} setIsWhite={setIsWhite}/>
            
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/building' element={<BuildingPage />} />
                <Route path='/event' element={<EventPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default Router;