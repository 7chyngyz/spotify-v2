"use client";
import scss from "./Header.module.scss";
import { useGetMeQuery } from "@/redux/api/me";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import ProfileMenu from "@/components/ui/profilemenu/ProfileMenu";
import { MdPreview } from "react-icons/md";
import LookForTracks from "@/components/shared/LookForTracks";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { GoHome } from "react-icons/go";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { data: session } = useGetMeQuery();
  const { isOpenProfileMenu, setIsOpenProfileMenu } = useHeaderStore();
  console.log(session);

  function handleClick() {
    setIsOpenProfileMenu();
  }

  const login = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  };

  const logout = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
      "_self"
    );
  };

  const handleToHome = () => {
    router.push("/");
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href={"/"}>
              <FaSpotify />
            </Link>
          </div>
          <div className={scss.search}>
            <GoHome
              onClick={handleToHome}
              style={{
                width: "35px",
                height: "30px",
                color: "white",
                opacity: "0.7",
              }}
            />
            <div className={scss.inputWithIcon}>
              <LookForTracks />
              <i>
                <IoSearchOutline />
              </i>
              <span>|</span>
              <p>
                <MdPreview />
              </p>
            </div>
          </div>
          <div className={scss.auth}>
            {session ? (
              <>
                <button
                  style={{
                    background: "#242424",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  className={scss.profile}
                >
                  <div onClick={handleClick}>
                    <Image
                      style={{
                        borderRadius: "50%",
                      }}
                      width={33}
                      height={33}
                      src={session.images[1].url}
                      alt="avatar"
                    />
                  </div>
                </button>
                <ProfileMenu logout={logout} />
              </>
            ) : (
              <>
                <button onClick={login}>Войти</button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
