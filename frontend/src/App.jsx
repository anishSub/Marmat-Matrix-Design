import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Parts from './pages/Parts';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import Config from './pages/Config';
import History from './pages/History';
import Wishlist from './pages/Wishlist';
import ServiceBooking from './pages/ServiceBooking';
import Diagnose from './pages/Diagnose';
import Health from './pages/Health';
import StaffPos from './pages/StaffPos';
import StaffCustomers from './pages/StaffCustomers';
import StaffReports from './pages/StaffReports';
import ReportExtraction from './pages/ReportExtraction';
import AdminDashboard from './pages/AdminDashboard';
import AdminTelemetry from './pages/AdminTelemetry';
import AdminReports from './pages/AdminReports';
import AdminFinancials from './pages/AdminFinancials';
import StaffManagement from './pages/StaffManagement';
import StaffApproval from './pages/StaffApproval';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="parts" element={<Parts />} />
            <Route path="parts/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="service" element={<ServiceBooking />} />
            <Route path="diagnose" element={<Diagnose />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/config" element={<Config />} />
            <Route path="/history" element={<History />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/health" element={<Health />} />
          </Route>

          <Route path="/staff/pos" element={<StaffPos />} />
          <Route path="/staff/customers" element={<StaffCustomers />} />
          <Route path="/staff/reports" element={<StaffReports />} />
          <Route path="/staff/report-extraction" element={<ReportExtraction />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/telemetry" element={<AdminTelemetry />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/financials" element={<AdminFinancials />} />
          <Route path="/admin/staff" element={<StaffManagement />} />
          <Route path="/admin/approval" element={<StaffApproval />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
