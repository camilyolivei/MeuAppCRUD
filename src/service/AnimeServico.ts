import { Anime, NovoAnime } from "../entity/Anime";
import { animes, editar, excluir, existePorTitulo, inserir } from "../repository/AnimeRepositorio";

export type ResultadoAdicao =
    | { sucesso: true; anime: Anime; animes: Anime[] }
    | { sucesso: false; motivo: "vazio" | "duplicado" };

export function buscarTodos(): Anime[] {
    return [...animes];
}

export function adicionarAnime(anime: NovoAnime): ResultadoAdicao {
    const titulo = anime.titulo.trim();
    const resumo = anime.resumo.trim();

    if (!titulo || !resumo) {
        return { sucesso: false, motivo: "vazio" };
    }

    if (existePorTitulo(titulo)) {
        return { sucesso: false, motivo: "duplicado" };
    }

    const novoAnime = inserir({ ...anime, titulo, resumo });
    return { sucesso: true, anime: novoAnime, animes: buscarTodos() };
}

export function editarAnime(id: number, anime: NovoAnime): void {
    editar(id, anime);
}

export function excluirAnime(id: number): void {
    excluir(id);
}