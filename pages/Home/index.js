import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import ActionModal from "../../components/ActionModal";
import { Modal } from "react-native";

export default function Home() {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [exibirModal, setExibirModal] = useState(false);
  const [resultado, setResultado] = useState("");

  const fecharModal = () => {
    setExibirModal(false);
  };

  const calcularResultado = () => {
    if (alcool !== "" && gasolina !== "") {
      const valorAlcool = parseFloat(
        alcool.replace("R$", "").replace(",", ".")
      );
      const valorGasolina = parseFloat(
        gasolina.replace("R$", "").replace(",", ".")
      );

      const resultadoCalculo = valorAlcool / valorGasolina;

      setResultado(
        resultadoCalculo < 0.7
          ? "Álcool é mais vantajoso"
          : "Gasolina é mais vantajosa"
      );
      setExibirModal(true);
    } else {
      alert("Por favor, preencha todos os campos");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/principal.png")}
        style={{ width: 256, height: 256 }}
      ></Image>
      <Text style={styles.titulo}>Qual a melhor opção?</Text>

      <Text style={styles.texto}>Álcool(preço por litro):</Text>
      <TextInputMask
        style={styles.input}
        placeholder="Digite o preço do álcool"
        value={alcool}
        keyboardType="numeric"
        type={"money"}
        onChangeText={(texto) => setAlcool(texto)}
        options={{
          precision: 2, // número de casas decimais
          separator: ",", // separador decimal
          delimiter: ".", // separador de milhar
          unit: "R$", // unidade (pode ser vazia)
          suffixUnit: "", // sufixo da unidade (pode ser vazio)
        }}
      ></TextInputMask>

      <Text style={styles.texto}>Gasolina(preço por litro):</Text>
      <TextInputMask
        style={styles.input}
        placeholder="Digite o preço da gasolina"
        value={gasolina}
        keyboardType="numeric"
        type={"money"}
        onChangeText={(texto) => setGasolina(texto)}
        options={{
          precision: 2, // número de casas decimais
          separator: ",", // separador decimal
          delimiter: ".", // separador de milhar
          unit: "R$", // unidade (pode ser vazia)
          suffixUnit: "", // sufixo da unidade (pode ser vazio)
        }}
      ></TextInputMask>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          setExibirModal(true);
          calcularResultado();
        }}
      >
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      <Modal visible={exibirModal} transparent={true}>
        <ActionModal
          handleClose={() => {
            setExibirModal(false);
            setResultado("");
          }}
          valorG={gasolina}
          valorA={alcool}
          resultado={resultado}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "black",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 8,
    width: "80%",
    backgroundColor: "white",
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
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 200,
    margin: 20,
    borderRadius: 20,
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
