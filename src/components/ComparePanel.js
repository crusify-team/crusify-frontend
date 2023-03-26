// ComparePanel.js
import React from "react";

const ComparePanel = () => {
  return (
    <div id="compare-panel">
      <h1>Compare Playlists</h1>
      <p>
        You can write Spotify Playlist links to the textboxes below and see how
        many music the same.
      </p>
      <div id="form">
        <div id="inputs">
          <input
            className="input"
            placeholder="https://open.spotify.com/playlist/..."
            type="text"
          />
          <input
            className="input"
            placeholder="https://open.spotify.com/playlist/..."
            type="text"
          />
        </div>
        <button
          id="compare-button"
          onClick={() => console.log("Compare button clicked!")}
        >
          Compare
        </button>
      </div>
    </div>
  );
};

export default ComparePanel;
