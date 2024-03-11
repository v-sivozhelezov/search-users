import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ redirectPath = '/' }) {
    if (!localStorage.getItem('searchQuery')) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
}
