import { useState } from "react";
import { NovoAnime } from "../entity/Anime";
import { adicionarAnime, buscarTodos, editarAnime, excluirAnime } from "../service/AnimeServico";

export function AnimeViewModel() {
  const [animes, setAnimes] = useState(buscarTodos());

  function atualizarLista() {
    setAnimes(buscarTodos());
  }

  function salvarAnime(anime: NovoAnime) {
    adicionarAnime(anime);
    atualizarLista();
  }

  function atualizarAnime(id: number, anime: NovoAnime) {
    editarAnime(id, anime);
    atualizarLista();
  }

  function removerAnime(id: number) {
    excluirAnime(id);
    atualizarLista();
  }

  return {
    animes,
    salvarAnime,
    atualizarAnime,
    removerAnime,
  };
}