import './instruction.css';
import { FaUpload, FaLink, FaShareAlt } from 'react-icons/fa';

function Instruction() {
  return (
    <div className="instruction-container">
      <h2>See how easy it is!</h2>
      <div className="steps">
        <div className="step">
          <FaUpload className="icon" />
          <p>Upload file</p>
        </div>
        <div className="step">
          <FaLink className="icon" />
          <p>Copy link</p>
        </div>
        <div className="step">
          <FaShareAlt className="icon" />
          <p>Share with whoever you want</p>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
