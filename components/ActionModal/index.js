import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ActionModal({ valorA, valorG, handleClose }) {
  return (
    <SafeAreaView style={styles.modalContainer}>
      <Image
        source={require("../../assets/modal.png")}
        style={{ width: 256, height: 256 }}
      ></Image>
      <Text style={styles.texto}>Com os preços: </Text>
      <Text style={styles.texto}>Álcool: R${valorA}</Text>
      <Text style={styles.texto}>Gasolina: R${valorG}</Text>

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
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    color: "white",
    marginRight: 220,
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
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
