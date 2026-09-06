import { Anime, NovoAnime } from "../entity/Anime";
import {
    animes,
    inserir as inserirNoRepositorio,
} from "../repository/AnimeRepositorio";

export function buscarTodos(): Anime[] {
    return [...animes];
}

export function adicionarAnime(anime: NovoAnime): Anime {
    return inserirNoRepositorio(anime);
}