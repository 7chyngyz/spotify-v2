  "use client";
  import React, { useEffect, useState } from "react";
  import scss from "./PlaylistId.module.scss";
  import { useParams } from "next/navigation";
  import { useGetPlaylistByIdQuery } from "@/redux/api/playlist";
  import { usePlayerStore } from "@/stores/usePlayerStore";

  const PlaylistId = () => {
    const { playlistId } = useParams();
    const { setTrackIndex, setTrackUris } = usePlayerStore();
    const { data } = useGetPlaylistByIdQuery(String(playlistId));

    const playMusic = (index: number) => {
      const filterTrackUris = data?.tracks.items.map((item) => item.track.uri);
      setTrackUris(filterTrackUris!);
      setTrackIndex(index);
    };

    return (
      <section className={scss.PlaylistId}>
        <div className={scss.container}>
          <div className={scss.content}>
            <div className={scss.playlistTracks}>
              {data?.tracks.items.map((item, index) => (
                <div
                  key={index}
                  className={scss.track}
                  onClick={() => playMusic(index)}
                >
                  <img src={item.track.album.images[0].url} alt="" />
                  <h3>{item.track.name}</h3>
                  <div className={scss.playlistName}>
                    {/* <span>Плейлист | {}</span> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default PlaylistId;
