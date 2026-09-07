import { Anime, NovoAnime } from "../entity/Anime";

export const animes: Anime[] = [];
let proximoId = 0;

export function inserir(anime: NovoAnime): Anime {
  const novoAnime: Anime = {
    id: proximoId++,
    ...anime,
  };

  animes.push(novoAnime);
  return novoAnime;
}

export function editar(id: number, anime: NovoAnime): void {
  const indice = animes.findIndex((item) => item.id === id);

  if (indice !== -1) {
    animes[indice] = { id, ...anime };
  }
}

export function excluir(id: number): void {
  const indice = animes.findIndex((item) => item.id === id);

  if (indice !== -1) {
    animes.splice(indice, 1);
  }
}