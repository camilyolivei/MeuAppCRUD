import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#141519",
  },
  lista: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 28,
    backgroundColor: "#141519",
  },
  barraSuperior: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 18,
  },
  logotipo: {
    color: "#F47521",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  navegacao: {
    color: "#D7D7D9",
    fontSize: 13,
    fontWeight: "700",
  },
  cartao: {
    width: "100%",
    marginBottom: 20,
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#23252B",
    elevation: 0,
  },
  tituloCartao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },
  capa: {
    height: 210,
    borderRadius: 0,
    backgroundColor: "#303238",
  },
  conteudo: {
    paddingTop: 14,
    paddingBottom: 10,
  },
  resumo: {
    color: "#C1C1C4",
    fontSize: 14,
    lineHeight: 21,
  },
  episodios: {
    marginTop: 12,
    color: "#F47521",
    fontSize: 13,
    fontWeight: "800",
  },
  acoes: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  acao: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: "#34363D",
  },
  acaoPrincipal: {
    backgroundColor: "#F47521",
  },
  textoAcao: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
  textoAcaoPrincipal: {
    color: "#141519",
  },
});