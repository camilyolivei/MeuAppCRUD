import { TextInput } from "react-native";
import { styles } from "../style/styles";

type Propriedades = {
  texto: string;
  aoAlterar: (texto: string) => void;
};

export function BarraDeBusca({ texto, aoAlterar }: Propriedades) {
  return (
    <TextInput
      placeholder="Buscar anime"
      placeholderTextColor="#A9A9AD"
      style={styles.campoBusca}
      value={texto}
      onChangeText={aoAlterar}
    />
  );
}
