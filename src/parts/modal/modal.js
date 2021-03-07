import "./modal-styles.css";
import React, { useState } from "react";

export default function Modal() {
  const [toggle, setToggle] = useState(true);

  return (
    // eslint-disable-next-line no-undef
    <div className="modal" style={{ display: toggle ? "block" : "none" }}>
      <div className="modal-content">
        <button
          type="button"
          onClick={() => setToggle(false)}
          onKeyDown
          className="close"
        >
          &times;
        </button>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}
