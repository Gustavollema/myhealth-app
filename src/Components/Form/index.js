import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";
import Style from "./Style";
import { StyleSheet } from "react-native";

export default function Form() {
  const [height, setHeight] = useState(null);

  const [Weight, setWeight] = useState(null);

  const [messageImc, setMessageImc] = useState("Preeencha o peso e altura");

  const [imc, setImc] = useState(null);

  const [TextButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((Weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (Weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é:");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <View style={Style.formContext}>
      <View style={Style.form}>
        <Text style={Style.formLabel}>Altura</Text>
        <TextInput
          style={Style.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />

        <Text style={Style.formLabel}>Peso</Text>
        <TextInput
          style={Style.input}
          onChangeText={setWeight}
          value={Weight}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
        />
        <TouchableOpacity
        style={Style.buttonCalculator}
        onPress=
        {() => {
          validationImc();
        }}>
        <Text style={Style.textButtonCalculator}>{TextButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
