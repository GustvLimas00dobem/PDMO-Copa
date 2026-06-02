import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { Picker } from '@react-native-picker/picker';

export default function Home() {
  const [text, setText] = React.useState("");
  const [text1, setText1] = React.useState("");
  const [selectedLanguage, setSelectedLanguage] = React.useState();

  return (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ textAlign: "center", marginBottom: 8 }}>
            Quem Irá Ganhar a copa de 2026?
          </Text>
   
   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image 
          source={require('./copa2026.png')} 
          style={{ width: 200, height: 200 }} />


     
      <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}></View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Seu Nome:</Text>
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
          </View>
            
        <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}></View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Seu Palpite:</Text>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
            style={{
              width: 250,
              borderWidth: 1,
              padding: 10,
            }}
               >
          <Picker.Item label="Selecione um país" value="" />
          <Picker.Item label="Brasil" value="Brasil" />
          <Picker.Item label="Argentina" value="Argentina" />
          <Picker.Item label="França" value="França" />
          <Picker.Item label="Espanha" value="Espanha" />
          <Picker.Item label="Inglaterra" value="Inglaterra" />
          </Picker>
          </View>    
     


          <TouchableOpacity
            onPress={() => {
              setText("");
              setSelectedLanguage("");
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

  );
}
