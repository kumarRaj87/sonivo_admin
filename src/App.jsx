import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Users from './components/UserTable/index';
import Plan from './components/plan/PlansContainer';
import PaymentGateway from './components/payment/PaymentGateway';
import FrontPartner from './components/FrontPartnerGateway/FrontPartnerGateway';
import Orders from './components/orders/Layout';
import WebConfig from './appearance/WebConfig';
import SmtpSettings from './appearance/SmtpSettings';
import Translation from './appearance/Translation';
import Leads from './components/Leads/LeadsContainer';
import ManagePage from './components/ManagePage/index';
import Testimonial from './components/Testimonial/Testimonial';
import FAQ from './components/FAQ/FAQ';
import WebTheme from './components/Web theme/WebTheme';
import { toast } from 'sonner';
import BrandManagement from './brand/Brand';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
    if (storedAuth !== isAuthenticated) {
      setIsAuthenticated(storedAuth);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    toast.success("loggedout successfully!")
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login setIsAuthenticated={setIsAuthenticated} />}
      />

      {isAuthenticated ? (
        <Route element={<Layout handleLogout={handleLogout} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/front-partner" element={<FrontPartner />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/web-config" element={<WebConfig />} />
          <Route path="/smtp-settings" element={<SmtpSettings />} />
          <Route path="/web-translation" element={<Translation />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/manage-page" element={<ManagePage />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/web-theme" element={<WebTheme />} />
          <Route path="/brand" element={<BrandManagement />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}

      <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
    </Routes>
  );
}

export default App;
