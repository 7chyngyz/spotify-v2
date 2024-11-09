"use client";
import SpotifyWebPlayer from "react-spotify-web-playback";
import scss from "./Footer.module.scss";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const { trackUris, trackIndex, setTrackIndex } = usePlayerStore();

  const [accessToken, setAccessToken] = useState<string>("");

  const fetchAccessToken = async () => {
    const { data } = await axios.get("/api/auth/get-access-token");
    setAccessToken(data);
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  return (
    <footer className={scss.Footer}>
      <div className={scss.container}>
        <div className={scss.content}>
          <SpotifyWebPlayer
            token={accessToken}
            uris={trackUris}
            callback={(state) => {
              if (state.isPlaying) {
                const activeTrackIndex = trackUris.findIndex(
                  (uri) => uri === state.track.uri
                );
                setTrackIndex(activeTrackIndex);
              }
            }}
            offset={trackIndex!}
            styles={{
              activeColor: "#fff",
              bgColor: "#0c0c0c",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#1cb954",
              trackArtistColor: "#ccc",
              trackNameColor: "#fff",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
