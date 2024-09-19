export const searchSpotify = async (track, token) => {
  const baseUrl = "https://api.spotify.com/v1/";
  const searchURI = "search?q=";
  const searchString = encodeURIComponent(track);
  const spotifyType = "&type=track";
  const endpoint = baseUrl + searchURI + searchString + spotifyType;

  try {
    console.log(token);
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};
