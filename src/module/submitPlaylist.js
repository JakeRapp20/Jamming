export const createPlaylist = async (playlistName, userId, token) => {
  const baseUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;

  const data = {
    name: playlistName,
    public: false,
  };

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

export const submitSongs = async (songsArray, playlistId, token) => {
  const baseUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  const modifiedArray = songsArray.map((song) => "spotify:track:" + song);
  const data = {
    uris: modifiedArray,
  };

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};
