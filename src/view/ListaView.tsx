import { FlatList, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CartaoDeAnime } from "../components/CartaoDeAnime";
import { AnimeViewModel } from "../viewmodel/AnimeViewModel";
import { styles } from "../style/styles";

export function ListaView() {
  const { animes } = AnimeViewModel();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.areaSegura}>
        <View style={styles.barraSuperior}>
          <Text style={styles.logotipo}>MIKA</Text>
          <Text style={styles.navegacao}>Início  •  Minha lista</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.lista}
          data={animes}
          keyExtractor={(anime) => anime.id.toString()}
          renderItem={({ item }) => <CartaoDeAnime {...item} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}