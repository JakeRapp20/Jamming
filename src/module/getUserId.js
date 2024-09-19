import { getSpotifyToken } from "./login";

export const getUserId = async () => {
  const baseUrl = "https://api.spotify.com/v1/me";
  const token = getSpotifyToken();
  try {
    const response = await fetch(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.id;
    }
  } catch (error) {
    console.log(error);
  }
};
