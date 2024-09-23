import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";

import MainPage from './Pages/MainPage.jsx';
import Prototypes from './Pages/Prototypes.jsx';
import TestPage from './Pages/TestPage.jsx';
import Terminal from './Pages/Terminal.jsx';

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/Prototypes" element={<Prototypes />} />
            <Route path="/TestPage" element={<TestPage />} />
            <Route path="/Terminal" element={<Terminal />} />
        </Routes>
    </HashRouter>
)