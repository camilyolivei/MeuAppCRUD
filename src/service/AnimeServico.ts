import { Anime, NovoAnime } from "../entity/Anime";
import { animes, editar, excluir, inserir } from "../repository/AnimeRepositorio";

export function buscarTodos(): Anime[] {
    return [...animes];
}

export function adicionarAnime(anime: NovoAnime): Anime {
    return inserir(anime);
}

export function editarAnime(id: number, anime: NovoAnime): void {
    editar(id, anime);
}

export function excluirAnime(id: number): void {
    excluir(id);
}