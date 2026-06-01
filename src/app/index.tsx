import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  const [text, setText] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ textAlign: "center", marginBottom: 8 }}>
          Quem Irá Ganhar a copa de 2026?
        </Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Digite algo..."
          style={{
            width: 250,
            borderWidth: 1,
            padding: 10,
          }}
        />

        <TouchableOpacity
          onPress={() => {
            setText("");
            alert("Muito obrigado!");
          }}
          style={{
            marginTop: 24,
            backgroundColor: "#000",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Enviar Resposta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
