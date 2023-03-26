import { useState, useRef } from "react";
import getCommonSongs from "../pages/api/common_songs";

const Main = () => {
  const panelContainerRef = useRef(null);
  const [isMusics, setIsMusics] = useState(false);
  const [playlistUrls, setPlaylistUrls] = useState(["", ""]);
  const [commonSongs, setCommonSongs] = useState({
    common_songs: [],
    playlist1_info: {},
    playlist2_info: {},
  });
  const [isLoading, setIsLoading] = useState(false);

  const goMusics = () => {
    if (playlistUrls[0] && playlistUrls[1]) {
      setIsMusics(true);
    }
  };

  const backCompare = () => {
    setIsMusics(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (playlistUrls[0] && playlistUrls[1]) {
      setIsLoading(true);
      const response = await getCommonSongs(playlistUrls);
      setIsLoading(false);
      setCommonSongs(response);
      setIsMusics(true);
    }
  };

  return (
    <main>
      <div id="panel">
        <div
          id="panel-container"
          ref={panelContainerRef}
          className={isMusics ? "musics" : ""}
        >
          <div id="compare-panel">
            <h1>Compare Playlists</h1>
            <p>
              You can write Spotify Playlist links to the textboxes below and
              see how many music the same.
            </p>
            <form onSubmit={handleSubmit} id="form">
              <div id="inputs">
                <input
                  className="input"
                  placeholder="https://open.spotify.com/playlist/..."
                  type="text"
                  value={playlistUrls[0]}
                  onChange={(event) =>
                    setPlaylistUrls([event.target.value, playlistUrls[1]])
                  }
                  required
                />
                <input
                  className="input"
                  placeholder="https://open.spotify.com/playlist/..."
                  type="text"
                  value={playlistUrls[1]}
                  onChange={(event) =>
                    setPlaylistUrls([playlistUrls[0], event.target.value])
                  }
                  required
                />
              </div>
              <button id="compare-button" type="submit">
                {isLoading ? "Loading..." : "Compare"}
              </button>
            </form>
          </div>
          <div id="musics-panel">
            <button onClick={() => backCompare()} id="back-button">
              <img
                src="img/icon/back-arrow.svg"
                alt="back-arrow"
                height="40px"
              />
            </button>
            {isLoading ? (
              <p>Loading...</p>
            ) : commonSongs.common_songs.length > 0 || undefined || null ? (
              <div>
                <p>{commonSongs.num_common_songs} ortak şarkı bulunuyor.</p>
                <p>{commonSongs.total_songs} Toplam Şarkı</p>
                <p>%{commonSongs.percent_common_songs} Eşleşme Oranı</p>
                <div class="playlists-container">
                  <div class="playlist">
                    <img
                      class="playlist-image"
                      src={commonSongs.playlist1_info.cover_image}
                      alt={`${commonSongs.playlist1_info.playlist_name} playlist cover`}
                    />
                    <div class="playlist-info">
                      <h2 class="playlist-name">
                        {commonSongs.playlist1_info.playlist_name}
                      </h2>
                      <p class="playlist-creator">
                        <img
                          class="playlist-creator-image"
                          src={
                            commonSongs.playlist1_info.playlist_creator
                              .profile_image
                          }
                          alt={`${commonSongs.playlist1_info.playlist_creator.id} album cover`}
                        />
                        {commonSongs.playlist1_info.playlist_creator.name}
                      </p>
                      <p class="total-tracks">
                        <strong>Total Tracks:</strong>{" "}
                        {commonSongs.playlist1_info.total_tracks}
                      </p>
                    </div>
                  </div>
                  <div class="playlist">
                    <img
                      class="playlist-image"
                      src={commonSongs.playlist2_info.cover_image}
                      alt={`${commonSongs.playlist2_info.playlist_name} playlist cover`}
                    />
                    <div class="playlist-info">
                      <h2 class="playlist-name">
                        {commonSongs.playlist2_info.playlist_name}
                      </h2>
                      <p class="playlist-creator">
                        <img
                          class="playlist-creator-image"
                          src={
                            commonSongs.playlist2_info.playlist_creator
                              .profile_image
                          }
                          alt={`${commonSongs.playlist2_info.playlist_creator.id} album cover`}
                        />
                        {commonSongs.playlist2_info.playlist_creator.name}
                      </p>
                      <p class="total-tracks">
                        <strong>Total Tracks:</strong>{" "}
                        {commonSongs.playlist2_info.total_tracks}
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ overflowY: "scroll", height: "400px" }}>
                  {commonSongs.common_songs.map((song) => (
                    <div
                      key={song.name}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src={song.album_cover}
                        alt={`${song.name} album cover`}
                        style={{
                          width: "100px",
                          height: "100px",
                          marginRight: "4px",
                        }}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>{song.name}</h3>
                        <p>{song.artists.join(", ")}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>There are no common songs.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
