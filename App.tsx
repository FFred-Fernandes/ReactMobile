import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.icon}>˅</Text>
        <Text style={styles.repeat}>CAJU</Text>
        <Text style={styles.icon}>...</Text>
      </View>

      <View style={styles.albumContainer}>
        <Image
          source={{
            uri: 'https://i.scdn.co/image/ab67616d0000b2738eb00294c4856633a918e9ce',
          }}
          style={styles.albumCover}
        />
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Mudar para vídeo</Text>
        </TouchableOpacity>
        <Text style={styles.musicTitle}>TUDO</Text>
        <Text style={styles.artist}>Liniker</Text>

        <View style={styles.progressBarContainer}>
          <Text style={styles.timeIndicator}>1:10</Text>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
          <Text style={styles.timeIndicator}>-2:23</Text>
        </View>

        <View style={styles.controlButtons}>
          <Text>⏮</Text>
          <Text>||</Text>
          <Text>⏭</Text>
        </View>
      </View>

      <View style={styles.containerArtista}>
        <View style={styles.sobre}>
          <Text style={styles.deviceName}>Echo Dot de Frederico</Text>
          <View style={styles.iconsCompartihar}>
            <TouchableOpacity>
              <Text style={styles.icondois}>⬆️</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.icondois}>☰</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.foto}>
          <Image
            source={{
              uri: "https://br.trace.tv/wp-content/uploads/2024/06/TEMPLATE-FOTOS-PAUTAS-DO-SITE-liniker.jpg",
            }}
            style={styles.liniker}
          />
          <View style={styles.cardLiniker}>
            <Text style={styles.titleLiniker}>Liniker</Text>
            <Text style={styles.subtitleLiniker}>3,1 mi ouvintes mensais</Text>
            <Text style={styles.descriptionLiniker}>
              Nascida no interior de São Paulo, a cantora e compositora Liniker
              ficou conhecida em 2015, no Brasil e internacionalmente, ao colocar
              na internet o EP Cru, lançado sob a alcunha de L...
              <Text style={styles.linkLiniker}> ver mais</Text>
            </Text>
            <TouchableOpacity style={styles.buttonLiniker}>
              <Text style={styles.buttonTextLiniker}>Seguir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.lyricsContainer}>
        {/* Título e Ícones */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Letra</Text>
          <TouchableOpacity>
            <Icon name="share" size={20} color="#fff" style={styles.iconC} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="expand-more" size={24} color="#fff" style={styles.iconC} />
          </TouchableOpacity>
        </View>

        {/* Letra da Música */}
        <Text style={styles.lyrics}>
          Deixa eu ficar na tua vida{'\n'}
          Morar dentro da concha{'\n'}
          Do teu abraço, não quero largar{'\n'}
          Que seja (que seja)
        </Text>
        <Text style={styles.lyricsBlack}>
          Real além da conta{'\n'}
          O que a gente precisa (eh){'\n'}
          É aprender sonhar
        </Text>
      </View>
    </ScrollView>
  );
}
