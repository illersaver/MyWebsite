import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from './Pages/MainPage.jsx';
import TestPage from './Pages/TestPage.jsx';

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/TestPage" element={<TestPage />} />
        </Routes>
    </HashRouter>
)