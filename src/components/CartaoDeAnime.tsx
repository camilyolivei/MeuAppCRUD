import { Alert, Platform, Text, Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { Anime } from "../entity/Anime";
import { styles } from "../style/styles";

type Propriedades = {
    anime: Anime;
    aoEditar: (anime: Anime) => void;
    aoExcluir: (id: number) => void;
};

export function CartaoDeAnime({ anime, aoEditar, aoExcluir }: Propriedades){
    function confirmarExclusao() {
        if (Platform.OS === "web") {
            if (window.confirm(`Deseja excluir ${anime.titulo}?`)) {
                aoExcluir(anime.id);
            }
            return;
        }

        Alert.alert(
            "Excluir anime",
            `Deseja excluir o anime ${anime.titulo}?`,
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: () => aoExcluir(anime.id),
                },
            ],
        );
    }

    return (
        <Card style={styles.cartao} mode="elevated">
            <Card.Title title={anime.titulo} titleStyle={styles.tituloCartao} />
            <Card.Content style={styles.conteudo}>
                <Text style={styles.resumo}>{anime.resumo}</Text>
                <Text style={styles.episodios}>
                    {anime.quantidadeEpisodios} episódios
                </Text>
            </Card.Content>
            <View style={styles.acoes}>
                <Pressable
                    style={[styles.acao, styles.acaoPrincipal]}
                    onPress={() => aoEditar(anime)}
                >
                    <View style={styles.conteudoAcao}>
                        <MaterialCommunityIcons name="pencil" size={18} color="#141519" />
                        <Text style={[styles.textoAcao, styles.textoAcaoPrincipal]}>Editar</Text>
                    </View>
                </Pressable>
                <Pressable
                    style={styles.acao}
                    onPress={confirmarExclusao}
                >
                    <View style={styles.conteudoAcao}>
                        <MaterialCommunityIcons name="delete" size={18} color="#FFFFFF" />
                        <Text style={styles.textoAcao}>Excluir</Text>
                    </View>
                </Pressable>
            </View>
        </Card>
    );

}
