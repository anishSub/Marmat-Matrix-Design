import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';

export default function DashboardLayout() {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#131313]">
            <TopNav isDashboard={true} />
            <SideNav />
            <main className="flex-1 md:ml-64 pt-16 min-h-[calc(100vh-80px)]">
                <Outlet />
            </main>
            <Footer sidebarOffset={true} />
        </div>
    );
}
