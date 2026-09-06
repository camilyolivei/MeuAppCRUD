import { useState } from "react";
import { NovoAnime } from "../entity/Anime";
import { adicionarAnime, buscarTodos } from "../service/AnimeServico";

export function AnimeViewModel() {
  const [animes, setAnimes] = useState(buscarTodos());

  function salvarAnime(anime: NovoAnime) {
    adicionarAnime(anime);
    setAnimes(buscarTodos());
  }
  return {
    animes,
    salvarAnime,
  };
}