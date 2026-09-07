import { useState } from "react";
import { Alert } from "react-native";
import { Anime, NovoAnime } from "../entity/Anime";
import { adicionarAnime, buscarTodos, editarAnime, excluirAnime } from "../service/AnimeServico";

export function useAnimeViewModel() {
  const [animes, setAnimes] = useState(buscarTodos());
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [animeParaEditar, setAnimeParaEditar] = useState<Anime | null>(null);
  const [textoBusca, setTextoBusca] = useState("");

  function atualizarLista() {
    setAnimes(buscarTodos());
  }

  const animesFiltrados = animes.filter((anime) => {
    const busca = textoBusca.trim().toLowerCase();

    return (
      anime.titulo.toLowerCase().includes(busca) ||
      anime.resumo.toLowerCase().includes(busca)
    );
  });

  function adicionar(anime: NovoAnime) {
    const resultado = adicionarAnime(anime);

    if (resultado.sucesso) {
      setAnimes(resultado.animes);
    }

    return resultado;
  }

  function atualizarAnime(id: number, anime: NovoAnime) {
    editarAnime(id, anime);
    atualizarLista();
  }

  function removerAnime(id: number) {
    excluirAnime(id);
    atualizarLista();
  }

  function abrirNovoAnime() {
    setAnimeParaEditar(null);
    setMostrarFormulario(true);
  }

  function abrirEdicao(anime: Anime) {
    setAnimeParaEditar(anime);
    setMostrarFormulario(true);
  }

  function fecharFormulario() {
    setMostrarFormulario(false);
    setAnimeParaEditar(null);
  }

  function salvarFormulario(anime: NovoAnime) {
    if (animeParaEditar) {
      atualizarAnime(animeParaEditar.id, anime);
    } else {
      const resultado = adicionar(anime);

      if (!resultado.sucesso) {
        const mensagem = resultado.motivo === "duplicado"
          ? "Já existe um anime com esse título."
          : "Preencha título e resumo.";

        Alert.alert("Não foi possível adicionar", mensagem);
        return;
      }
    }

    fecharFormulario();
  }

  return {
    animes,
    animesFiltrados,
    mostrarFormulario,
    animeParaEditar,
    textoBusca,
    adicionar,
    atualizarAnime,
    removerAnime,
    abrirNovoAnime,
    abrirEdicao,
    fecharFormulario,
    salvarFormulario,
    setTextoBusca,
  };
}