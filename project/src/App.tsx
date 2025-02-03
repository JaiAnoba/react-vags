import { SinglePageLayout } from './pages/SinglePageLayout'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import './styles/global.css'
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './views/admin/default/index';
import RtlLayout from "./layouts/rtl";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";

export default function App() {
  const handleSectionChange = (section: string) => {
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<SinglePageLayout />} />
        <Route path="/login" element={<Login onSectionChange={handleSectionChange} />} />
        <Route path="/signup" element={<SignUp onSectionChange={handleSectionChange} />} />
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="rtl/*" element={<RtlLayout />} />
        <Route path="/views/admin/default/index" element={<AdminDashboard />} />
      </Routes>
    </main>
  )
}