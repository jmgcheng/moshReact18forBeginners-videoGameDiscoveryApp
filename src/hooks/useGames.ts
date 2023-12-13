import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (gameQuery: GameQuery) => 
    useData<Game>('/games', {
        params: {
            genres:gameQuery.genre?.id, 
            platforms: gameQuery.platform?.id
        }}, 
        [gameQuery]);

export default useGames;