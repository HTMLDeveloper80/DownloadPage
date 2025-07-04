import { useState } from "react";

function UploadFiles() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setUploadStatus("");
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setUploadStatus("Najpierw wybierz plik!");
            return;
        }
    
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const res = await fetch("http://localhost/Uplodex/upload.php", {
                    method: "POST",
                    body: formData,
            });
            const data = await res.json();
            if (res.ok) {
                setUploadStatus("Plik wrzucony pomyślnie!");
            } else {
                setUploadStatus("Błąd: " + (data.error || "Nieznany błąd"));
            }
        } catch (err) {
            setUploadStatus("Błąd połączenia z serwerem");
        }
    };

    return (
        <form onSubmit={handleUpload} className="upload-form">
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Wrzuć plik</button>
            {uploadStatus && <div>{uploadStatus}</div>}
        </form>
    );
}

export default UploadFiles;

