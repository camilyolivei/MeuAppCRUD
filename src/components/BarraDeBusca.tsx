import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { styles } from "../style/styles";

type Propriedades = {
  texto: string;
  aoAlterar: (texto: string) => void;
};

export function BarraDeBusca({ texto, aoAlterar }: Propriedades) {
  return (
    <View style={styles.campoBusca}>
      <MaterialCommunityIcons name="magnify" size={22} color="#A9A9AD" />
      <TextInput
        placeholder="Buscar anime"
        placeholderTextColor="#A9A9AD"
        style={styles.textoBusca}
        value={texto}
        onChangeText={aoAlterar}
      />
    </View>
  );
}
