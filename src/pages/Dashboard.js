import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardMain from '../components/DashboardMain';
import '../components/dashboard.css';
import { useState } from 'react';

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("files");

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <DashboardSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <DashboardMain activeMenu={activeMenu} />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
