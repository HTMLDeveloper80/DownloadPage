function DashboardMain({ activeMenu }) {
  return (
    <main className="dashboard-main">
      {activeMenu === "files" && <div>Lista plików użytkownika tutaj</div>}
      {activeMenu === "links" && <div>Lista linków tutaj</div>}
      {activeMenu === "profile" && <div>Dane profilu tutaj</div>}
    </main>
  );
}

export default DashboardMain;