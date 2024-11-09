import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPlaylist: build.query<
      PLAYLIST.GetPlaylistResponse,
      PLAYLIST.GetPlaylistRequest
    >({
      query: () => ({
        url: "/me/playlists",
        method: "GET",
      }),
      providesTags: ["playlist"],
    }),
    getPlaylistById: build.query<
      PLAYLIST.GetPlaylistByIdResponse,
      PLAYLIST.GetPlaylistByIdRequest
    >({
      query: (playlists_id) => ({
        url: `/playlists/${playlists_id}`,
        method: "GET",
      }),
      providesTags: ["playlist"],
    }),
  }),
});
export const { useGetPlaylistQuery, useGetPlaylistByIdQuery } = api;
