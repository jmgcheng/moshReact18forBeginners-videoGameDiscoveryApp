import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// check developer console > Network > Fetch/XHR > games request > Preview > result object for fields you can put here
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
}

const useGames = () => useData<Game>('/games');

export default useGames;