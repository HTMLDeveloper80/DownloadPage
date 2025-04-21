import './mainscreen.css';
import { FaUpload } from 'react-icons/fa';

function MainScreen() {
    return (
        <div className="mainscreen-container">
            <div className="main-text">File storage and sharing made simple</div>
            <div className="button-wrapper">
                <button className="upload-files"><FaUpload /> UPLOAD FILES NOW</button>
            </div>
        </div>
    );
}

export default MainScreen;
