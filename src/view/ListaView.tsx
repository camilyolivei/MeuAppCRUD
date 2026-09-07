import { FlatList, Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { CartaoDeAnime } from "../components/CartaoDeAnime";
import { CartaoNovoAnime } from "../components/CartaoNovoAnime";
import { BarraDeBusca } from "../components/BarraDeBusca";
import { useAnimeViewModel } from "../viewmodel/AnimeViewModel";
import { styles } from "../style/styles";

export function ListaView() {
  return (
    <SafeAreaProvider>
      <ConteudoLista />
    </SafeAreaProvider>
  );
}

function ConteudoLista() {
  const {
    animesFiltrados,
    mostrarFormulario,
    animeParaEditar,
    textoBusca,
    abrirNovoAnime,
    abrirEdicao,
    fecharFormulario,
    salvarFormulario,
    setTextoBusca,
    removerAnime,
  } = useAnimeViewModel();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.areaSegura}>
      <View style={styles.barraSuperior}>
        <Text style={styles.logotipo}>MIKA</Text>
        <Text style={styles.navegacao}>Início  •  Minha lista</Text>
      </View>
      <BarraDeBusca texto={textoBusca} aoAlterar={setTextoBusca} />
      <FlatList
        contentContainerStyle={styles.lista}
        data={animesFiltrados}
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