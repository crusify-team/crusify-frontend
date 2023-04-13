import axios from "axios";
export default async function getCommonSongs(playlistUrls) {
  try {
    const response = await axios.post(
      "https://crusify.badblli.dev/common_songs",
      playlistUrls
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
}
