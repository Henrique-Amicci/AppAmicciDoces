import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F3E5F5",
  },

  // Inputs
  input: {
    width: "100%",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#9575CD",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },

  // Texto
  text: {
    fontSize: 16,
    color: "#6A1B9A",
    marginBottom: 5,
  },

  // Botões gerais
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonLogin: {
    backgroundColor: "purple",
  },

  buttonCadastrar: {
    backgroundColor: "#7B1FA2",
  },

  buttonDeslogar: {
    backgroundColor: "red",
  },

  textoBotao: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Mensagens de alerta ou instrução
  message: {
    fontSize: 14,
    color: "#4A148C",
    textAlign: "center",
    marginBottom: 15,
  },

  // Card (opcional se quiser usar para login/cadastro)
  cardContainer: {
    width: "100%",
    backgroundColor: "#D1C4E9",
    borderRadius: 12,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 20,
  },

  // Container dos botões lado a lado (se precisar)
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
});

export default styles;
