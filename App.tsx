import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Public Components
import Layout from './components/Layout';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Directory from './pages/Directory';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Associations from './pages/Associations';
import Obituary from './pages/Obituary';

// Admin Components
import AdminLayout from './pages/Admin/AdminLayout';
import Dashboard from './pages/Admin/Dashboard';
import ContentManager from './pages/Admin/ContentManager';
import UserManagement from './pages/Admin/UserManagement';

const AppRoutes = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    if (isAdminRoute) {
        return (
            <AdminLayout>
                <Routes>
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/admin/content" element={<ContentManager />} />
                    <Route path="/admin/users" element={<UserManagement />} />
                    <Route path="/admin/analytics" element={<Dashboard />} />
                </Routes>
            </AdminLayout>
        );
    }

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/directory" element={<Directory />} />
                <Route path="/associations" element={<Associations />} />
                <Route path="/obituary" element={<Obituary />} />
            </Routes>
        </Layout>
    );
};

const App: React.FC = () => {
    return (
        <AppProvider>
            <Router>
                <AppRoutes />
            </Router>
        </AppProvider>
    );
};

export default App;