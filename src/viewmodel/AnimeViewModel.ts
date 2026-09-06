import { buscarTodos } from "../service/AnimeServico";

export function AnimeViewModel() {
  return {
    animes: buscarTodos(),
  };
}