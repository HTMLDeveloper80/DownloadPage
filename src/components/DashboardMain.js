import UploadFiles from "./UploadFiles";

function DashboardMain({ activeMenu }) {
  return (
    <main className="dashboard-main">
      {activeMenu === "files" && 
        <div>
          <h2>Twoje pliki</h2>
          <UploadFiles />
        </div>
        }
      {activeMenu === "links" && <div>Lista linków tutaj</div>}
      {activeMenu === "profile" && <div>Dane profilu tutaj</div>}
    </main>
  );
}

export default DashboardMain;