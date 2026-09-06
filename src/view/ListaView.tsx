import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { CartaoDeAnime } from "../components/CartaoDeAnime";
import { CartaoNovoAnime } from "../components/CartaoNovoAnime";
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
  const { animes, salvarAnime } = AnimeViewModel();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const insets = useSafeAreaInsets();

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
        renderItem={({ item }) => <CartaoDeAnime {...item} />}
      />
      <Pressable
        accessibilityLabel="Criar novo anime"
        accessibilityRole="button"
        onPress={() => setMostrarFormulario(true)}
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
        aoCancelar={() => setMostrarFormulario(false)}
        aoSalvar={(anime) => {
          salvarAnime(anime);
          setMostrarFormulario(false);
        }}
      />
    </SafeAreaView>
  );
}