import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import ResultsSearchPage from './pages/results-search-page/ResultsSearchPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />;
            <Route path="/results" element={<ResultsSearchPage />} />;
        </Routes>
    );
}

export default AppRoutes;
