import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import ResultsSearchPage from './pages/results-search-page/ResultsSearchPage';
import ProtectedRoute from './components/protected-route/protected-route';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />;
            <Route element={<ProtectedRoute />}>
                <Route path="/results/:id" element={<ResultsSearchPage />} />;
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
