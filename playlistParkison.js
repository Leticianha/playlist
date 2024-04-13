import { ScrollView, Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons/'

export function PlaylistParkison() {

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={ESTILO.calendario}>
        <View style={ESTILO.calendarioJunto}>
          <Text style={ESTILO.textoCalendario}>
            Treinos
          </Text>
          <Ionicons name="barbell-outline" style={ESTILO.iconeGame}></Ionicons>
        </View>
        <Ionicons name="home-outline" style={ESTILO.iconeHome} />
      </View>
      <View style={ESTILO.instrucoes}>
        <Text style={ESTILO.textoInstrucoes}>Siga os passos!</Text>
      </View>
      <View  style={ESTILO.boxInstrucoes}>
        <Image source={require("./assets/iconeCabide.png")} style={ESTILO.icones} />
        <View style={ESTILO.etapa}>
          <View style={ESTILO.linha}></View>
          <View style={ESTILO.boxEtapa}>
            <View style={ESTILO.divsaoEtapa}>
              <Text style={ESTILO.textoEtapaUm}>
                Ponha <span style={ESTILO.span}>roupas confortáveis</span>
              </Text>
              <Image source={require("./assets/iconeRoupaPark.png")} style={ESTILO.imgetapa} />
            </View>
          </View>
        </View>
      </View>
      <View  style={ESTILO.boxInstrucoes}>
        <Image source={require("./assets/iconeGarrafa.png")} style={ESTILO.iconegarrafa} />
        <View style={ESTILO.etapa}>
          <View style={ESTILO.linha}></View>
          <View style={ESTILO.boxEtapa}>
            <View style={ESTILO.divsaoEtapa}>
              <Text style={ESTILO.textoEtapaDois}>
                Pegue uma <span style={ESTILO.span}>garrafa de água</span>
              </Text>
              <Image source={require("./assets/iconeBeberPark.png")} style={ESTILO.imgetapa} />
            </View>
          </View>
        </View>
      </View>
      <View  style={ESTILO.boxInstrucoes}>
        <Image source={require("./assets/iconePeso.png")} style={ESTILO.icones} />
        <View style={ESTILO.etapa}>
          <View style={ESTILO.linha}></View>
          <View style={ESTILO.boxEtapa}>
            <View style={ESTILO.divsaoEtapa}>
              <Text style={ESTILO.textoEtapaTres}>
                Clique e <span style={ESTILO.span}>comece a se exercitar!</span>
              </Text>
              <Image source={require("./assets/iconeLinkPark.png")} style={ESTILO.imgetapa} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const ESTILO = StyleSheet.create({
  calendario: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 40

  },
  calendarioJunto: {
    flexDirection: 'row',
  },
  textoCalendario: {
    color: '#000',
    fontSize: 25,
    paddingRight: 15,
    fontWeight: "600"
  },
  iconeHome: {
    fontSize: 30,
    color: "#000"
  },
  iconeGame: {
    fontSize: 32,
    color: '#000'
  },
  instrucoes: {
    paddingLeft: 40
  },
  textoInstrucoes: {
    fontSize: 24,
    color: '#3C4146',
    fontWeight: '600',
    marginBottom: 20
  },
  boxInstrucoes: {
    marginTop: 15,
    paddingLeft: 40
  },
  icones: {
    width: 23,
    height: 23
  },
  iconegarrafa: {
    width: 27,
    height: 30
  },
  etapa: {
    flexDirection: 'row',
  },
  linha: {
    backgroundColor: '#3C4146',
    height: 130,
    width: 2,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 15,
  },
  boxEtapa: {
    width: 244,
    height: 115,
    backgroundColor: '#ff516595',
    borderRadius: 20,
    marginTop: 12,
    paddingTop: 25,
    paddingLeft: 20
  },
  divsaoEtapa: {
    flexDirection: 'row',
    textAlign: 'center'
  },
  textoEtapaUm: {
    width: 110,
    fontSize: 17,
    color: '#3C4146',
    marginTop: 10
  },
  textoEtapaDois: {
    width: 127,
    fontSize: 17,
    color: '#3C4146',
    marginTop: 5
  },
  textoEtapaTres: {
    width: 110,
    fontSize: 17,
    color: '#3C4146'
  },
  span: {
    fontWeight: '700',
  },
  imgetapa: {
    width: 122,
    height: 122,
    position: 'absolute',
    left: 135,
    top: -55
  },
})