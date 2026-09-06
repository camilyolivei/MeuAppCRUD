import { Anime, NovoAnime } from "../entity/Anime";

export const animes: Anime[] = [];

export function inserir(anime: NovoAnime): Anime {
  const novoAnime: Anime = {
    id: animes.length,
    ...anime,
  };

  animes.push(novoAnime);
  return novoAnime;
}