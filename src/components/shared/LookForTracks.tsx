import React, { useEffect, useState } from "react";
import scss from "./LookForTracks.module.scss";
import { DebounceInput } from "react-debounce-input";
import { useRouter } from "next/navigation";

const LookForTracks = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      if (searchQuery) {
        router.push(`/search/${searchQuery}`);
      }
    } else {
      router.push(`/search`);
    }
  }, [searchQuery]);

  return (
    <div className={scss.LookForTracks}>
      <div className="container">
        <div className={scss.content}>
          <DebounceInput
            placeholder="Что хотите включить?"
            minLength={2}
            debounceTimeout={200}
            onChange={(event) => setSearchQuery(event.target.value)}
            onClick={() => {
              router.push("/search")
              setSearchTerm(true)
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LookForTracks;
