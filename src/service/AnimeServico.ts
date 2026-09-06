import { Anime } from "../entity/Anime";
import { animes } from "../repository/AnimeRepositorio";

export function buscarTodos(): Anime[] {
    return animes;
}