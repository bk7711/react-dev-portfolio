import React from "react";

function Modal() {
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Resume</h3>
        <img src={require("../../assets/images/resume.pdf")} alt="resume" />
        <button type="button">Close this page</button>
      </div>
    </div>
  );
}

export default Modal;
