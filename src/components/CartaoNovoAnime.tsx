import { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { NovoAnime } from "../entity/Anime";
import { styles } from "../style/styles";

type Props = {
  visivel: boolean;
  aoCancelar: () => void;
  aoSalvar: (anime: NovoAnime) => void;
};

export function CartaoNovoAnime({
  visivel,
  aoCancelar,
  aoSalvar,
}: Props) {
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [quantidadeEpisodios, setQuantidadeEpisodios] = useState("");

  function salvar() {
    if (!titulo.trim() || !resumo.trim()) {
      Alert.alert("Campos obrigatórios", "Preencha título e resumo.");
      return;
    }

    aoSalvar({
      titulo: titulo.trim(),
      resumo: resumo.trim(),
      quantidadeEpisodios: Number(quantidadeEpisodios) || 0,
    });
    setTitulo("");
    setResumo("");
    setQuantidadeEpisodios("");
  }

  return (
    <Modal visible={visivel} animationType="slide" transparent>
      <View style={styles.fundoModal}>
        <View style={styles.cartaoFormulario}>
          <Text style={styles.tituloFormulario}>Novo anime</Text>
          <TextInput
            placeholder="Título"
            placeholderTextColor="#A9A9AD"
            style={styles.campo}
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            placeholder="Resumo"
            placeholderTextColor="#A9A9AD"
            style={[styles.campo, styles.campoResumo]}
            value={resumo}
            onChangeText={setResumo}
            multiline
          />
          <TextInput
            placeholder="Quantidade de episódios"
            placeholderTextColor="#A9A9AD"
            style={styles.campo}
            value={quantidadeEpisodios}
            onChangeText={setQuantidadeEpisodios}
            keyboardType="number-pad"
          />
          <View style={styles.acoesFormulario}>
            <Pressable style={styles.acao} onPress={aoCancelar}>
              <Text style={styles.textoAcao}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.acao, styles.acaoPrincipal]}
              onPress={salvar}
            >
              <Text style={[styles.textoAcao, styles.textoAcaoPrincipal]}>
                Salvar
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}