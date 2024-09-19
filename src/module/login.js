export const loginSpotify = async () => {
  const clientId = "<Add Spotify Developer Client ID here!>";
  const redirectUri = "http://localhost:3000/";

  const baseUrl = "https://accounts.spotify.com/authorize";
  const scope =
    "user-read-private user-read-email playlist-modify-public playlist-modify-private";
  const state = "owmefwOMEFE91212";
  var url = baseUrl + "?response_type=token";
  url += "&client_id=" + encodeURIComponent(clientId);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirectUri);
  url += "&state=" + encodeURIComponent(state);

  // redirect login to spotify
  window.location.replace(url);
};

export const getSpotifyToken = () => {
  // retreive access_token from url, this is insecure
  const queryString = window.location.hash;
  const urlParams = new URLSearchParams(queryString);
  const accessToken = urlParams.get("#access_token");
  return accessToken;
};
