// MusicsPanel.js
import React from "react";

const MusicsPanel = () => {
  return (
    <div id="musics-panel">
      <button
        onClick={() => console.log("Back button clicked!")}
        id="back-button"
      >
        <img src="img/icon/back-arrow.svg" alt="back-arrow" height="40px" />
      </button>
    </div>
  );
};

export default MusicsPanel;
