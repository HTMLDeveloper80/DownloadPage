import { FaFolder, FaFileAlt } from "react-icons/fa"; 
const pliki = [
  { name: ".git", type: "folder" },
  { name: "my-app", type: "folder" },
  { name: ".gitmodules", type: "file" }
];

function FileList() {
  return (
    <div className="file-list">
      {pliki.map((item) => (
        <div key={item.name} className="file-list-item">
          {item.type === "folder" ? (
            <FaFolder className="file-icon" color="#FDB927" />
          ) : (
            <FaFileAlt className="file-icon" color="#aaa" />
          )}
          <span className="file-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default FileList;
