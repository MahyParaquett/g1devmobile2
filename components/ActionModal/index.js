import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

export default function ActionModal({
  valorA,
  valorG,
  handleClose,
  resultado,
}) {
  return (
    <SafeAreaView style={styles.modalContainer}>
      <Image
        source={require("../../assets/modal.png")}
        style={{ width: 256, height: 256 }}
      ></Image>
      <Text style={styles.titulo}>{resultado}</Text>

      <Text style={styles.texto}>Com os preços: </Text>
      <Text style={styles.texto}>Álcool: {valorA}</Text>
      <Text style={styles.texto}>Gasolina: {valorG}</Text>

      <TouchableOpacity style={styles.botao} onPress={handleClose}>
        <Text style={styles.textoBotao}>Calcular novamente</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "black",
    padding: 16,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    color: "white",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
    color: "white",
  },

  botao: {
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 200,
    margin: 20,
    borderRadius: 20,
    borderColor: "red",
    borderWidth: 1,
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
