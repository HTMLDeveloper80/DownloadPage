function DashboardSidebar({ activeMenu, setActiveMenu }) {
  return (
    <aside className="dashboard-sidebar">
      <button
        className={activeMenu === "files" ? "active" : ""}
        onClick={() => setActiveMenu("files")}
      >
        Moje pliki
      </button>
      <button
        className={activeMenu === "links" ? "active" : ""}
        onClick={() => setActiveMenu("links")}
      >
        Wygenerowane linki
      </button>
      <button
        className={activeMenu === "profile" ? "active" : ""}
        onClick={() => setActiveMenu("profile")}
      >
        Profil
      </button>
    </aside>
  );
}

export default DashboardSidebar;
