import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { CartaoDeAnime } from "../components/CartaoDeAnime";
import { CartaoNovoAnime } from "../components/CartaoNovoAnime";
import { Anime } from "../entity/Anime";
import { AnimeViewModel } from "../viewmodel/AnimeViewModel";
import { styles } from "../style/styles";

export function ListaView() {
  return (
    <SafeAreaProvider>
      <ConteudoLista />
    </SafeAreaProvider>
  );
}

function ConteudoLista() {
  const { animes, salvarAnime, atualizarAnime, removerAnime } = AnimeViewModel();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [animeParaEditar, setAnimeParaEditar] = useState<Anime | null>(null);
  const insets = useSafeAreaInsets();

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

  function salvarFormulario(anime: Parameters<typeof salvarAnime>[0]) {
    if (animeParaEditar) {
      atualizarAnime(animeParaEditar.id, anime);
    } else {
      salvarAnime(anime);
    }

    fecharFormulario();
  }

  return (
    <SafeAreaView style={styles.areaSegura}>
      <View style={styles.barraSuperior}>
        <Text style={styles.logotipo}>MIKA</Text>
        <Text style={styles.navegacao}>Início  •  Minha lista</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.lista}
        data={animes}
        keyExtractor={(anime) => anime.id.toString()}
        renderItem={({ item }) => (
          <CartaoDeAnime
            anime={item}
            aoEditar={abrirEdicao}
            aoExcluir={removerAnime}
          />
        )}
      />
      <Pressable
        accessibilityLabel="Criar novo anime"
        accessibilityRole="button"
        onPress={abrirNovoAnime}
        style={[
          styles.botaoCriar,
          {
            right: insets.right + 16,
            bottom: insets.bottom + 20,
          },
        ]}
      >
        <MaterialCommunityIcons name="plus" size={28} color="#141519" />
      </Pressable>
      <CartaoNovoAnime
        visivel={mostrarFormulario}
        animeParaEditar={animeParaEditar}
        aoCancelar={fecharFormulario}
        aoSalvar={salvarFormulario}
      />
    </SafeAreaView>
  );
}