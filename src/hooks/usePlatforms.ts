import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
// import apiClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    // queryFn: () =>
    //   apiClient
    //     .get<FetchResponse<Platform>>("/platforms/lists/parents")
    //     .then((res) => res.data),
    initialData: { count: platforms.length, results: platforms, next: null },
    staleTime: ms("24h"), //24 * 60 * 60 * 1000, // 24h
  });
};

export default usePlatforms;
