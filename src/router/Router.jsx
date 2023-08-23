import {React, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MainPage from '../pages/MainPage';
import BuildingPage from '../pages/Building';

function Router() {
    const [isWhite, setIsWhite] = useState(false);

    return (
        <BrowserRouter>
            <Header isWhite={isWhite} setIsWhite={setIsWhite}/>
            
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/building' element={<BuildingPage isWhite={isWhite} setIsWhite={setIsWhite}/>} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default Router;