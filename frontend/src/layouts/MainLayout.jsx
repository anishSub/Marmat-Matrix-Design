import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <TopNav isDashboard={false} />
            <main className="flex-grow pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
