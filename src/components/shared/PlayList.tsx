"use client";
import { VscLibrary } from "react-icons/vsc";
import { GoListUnordered } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useGetPlaylistQuery } from "@/redux/api/playlist";
import { useRouter } from "next/navigation";
import { useGetMeQuery } from "@/redux/api/me";
import scss from "./PlayList.module.scss";

const PlayList = () => {
  const { data: session } = useGetMeQuery();
  const { data } = useGetPlaylistQuery();
  const router = useRouter();
  return (
    <section className={scss.PlayList}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.playlist_library}>
            <div className={scss.block1}>
              <VscLibrary />
              <p>Моя медиатека</p>
            </div>
            <div className={scss.block2}>
              <FaPlus />
              <FaArrowRight />
            </div>
          </div>

          <div className={scss.playlist_items}>
            {data ? (
              <>
                <div className={scss.vybor}>
                  <a>Плейлисты</a>
                  <a>Исполнители</a>
                </div>

                <div className={scss.proslushka}>
                  <i style={{ cursor: "pointer" }}>
                    <CiSearch />
                  </i>
                  <div className={scss.search}>
                    <span>Недавно прослушано</span>
                    <p>
                      <GoListUnordered />
                    </p>
                  </div>
                </div>
                {data?.items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => router.push(`/playlist/${item.id}`)}
                  >
                    <div className={scss.block_playlists}>
                      <img src={item.images[0].url} alt="" />
                      <div className={scss.playlists_info}>
                        <h1>{item.name}</h1>
                        <p>Плейлист : {session?.display_name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className={scss.playlist1}>
                  <h1>Создать свой первый плейлист</h1>
                  <p>Это совсем не сложно! Мы поможем.</p>
                  <button>Создать плейлист</button>
                </div>
                <div className={scss.playlist2}>
                  <h1>Подпишись на интресные подкасты</h1>
                  <p>Ты будешь узнавать о новых выпусках.</p>
                  <button>Обзор</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default PlayList;
