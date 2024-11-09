"use client";
import scss from "./Tracks.module.scss";
import { useParams } from "next/navigation";
import { useSearchTracksQuery } from "@/redux/api/search";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { MdAccessTime } from "react-icons/md";
import NavBar from "./NavBar";

const Tracks = () => {
  const { searchQuery } = useParams();
  const decodeUri = decodeURIComponent(String(searchQuery));
  const { data } = useSearchTracksQuery(decodeUri);
  const { setTrackUris, setTrackIndex } = usePlayerStore();

  const updateTrackUris = () => {
    const uris = data?.tracks.items.map((item) => item.uri);
    setTrackUris(uris!);
  };

  const playMusic = (index: number) => {
    setTrackIndex(index);
    updateTrackUris();
  };

  return (
    <section className={scss.Tracks}>
      <div className={scss.container}>
        <div className={scss.content}>
          <NavBar />
          <div className={scss.albom}>
            <p>#Название</p>
            <p>Альбом</p>
            <i>
              <MdAccessTime />
            </i>
          </div>
          <div className={scss.tracks}>
            {data?.tracks.items.map((item, index) => (
              <div
                className={scss.track}
                key={index}
                onClick={() => {
                  playMusic(index);
                }}
              >
                <div className={scss.allContent}>
                  <div className={scss.track_image}>
                    <img
                      width={45}
                      height={45}
                      src={item.album.images[0].url}
                      alt=""
                    />

                    <p>{item.name}</p>
                  </div>
                  <div className={scss.text}>
                    <span>{item.album.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
