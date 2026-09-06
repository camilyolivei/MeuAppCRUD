import { Text, Pressable, View } from "react-native";
import { Card } from "react-native-paper";
import { Anime } from "../entity/Anime";
import { styles } from "../style/styles";

export function CartaoDeAnime(anime:Anime){
    return (
        <Card style={styles.cartao} mode="elevated">
            <Card.Title title={anime.titulo} titleStyle={styles.tituloCartao} />
            <Card.Cover source={{ uri: anime.img }} style={styles.capa} />
            <Card.Content style={styles.conteudo}>
                <Text style={styles.resumo}>{anime.resumo}</Text>
                <Text style={styles.episodios}>
                    {anime.quantidadeEpisodios} episódios
                </Text>
            </Card.Content>
            <View style={styles.acoes}>
                <Pressable style={[styles.acao, styles.acaoPrincipal]}>
                    <Text style={[styles.textoAcao, styles.textoAcaoPrincipal]}>
                        Editar
                    </Text>
                </Pressable>
                <Pressable style={styles.acao}>
                    <Text style={styles.textoAcao}>Excluir</Text>
                </Pressable>
            </View>
        </Card>
    );

}
