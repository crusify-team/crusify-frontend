import axios from "axios";
export default async function getCommonSongs(playlistUrls) {
  try {
    const response = await axios.post(
      "http://165.232.123.33:80/common_songs",
      playlistUrls
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}
