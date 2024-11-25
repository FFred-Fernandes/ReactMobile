import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B3C31',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    marginBottom: 50,
  },
  repeat: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    color: '#fff',
    fontSize: 30,
    paddingHorizontal: 10,
  },
  albumContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  albumCover: {
    width: 340,
    height: 340,
    borderRadius: 10,
  },
  controlsContainer: {
    alignItems: 'center',
    padding: 1,
  },
  button: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  textButton: {
    color: '#fff',
    fontSize: 12,
  },
  musicTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  artist: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  progress: {
    width: '40%',
    height: '100%',
    backgroundColor: '#fff',
  },
  timeIndicator: {
    color: '#fff',
    fontSize: 14,
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 20,
  },
  containerArtista: {
    flex: 1,
    padding: 16,
  },
  sobre: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  deviceName: {
    color: "#1DB954",
    fontSize: 14,
    fontWeight: "bold",
  },
  iconsCompartihar: {
    flexDirection: "row",
    alignItems: "center",
  },
  icondois: {
    color: "#fff",
    fontSize: 20,
    marginHorizontal: 8,
  },
  foto: {
    backgroundColor: "#121212",
    borderRadius: 8,
    padding: 16,
    alignItems: "flex-start",
  },
  liniker: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardLiniker: {
    alignItems: "flex-start",
  },
  titleLiniker: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitleLiniker: {
    color: "#b3b3b3",
    fontSize: 14,
    marginBottom: 12,
  },
  descriptionLiniker: {
    color: "#b3b3b3",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  linkLiniker: {
    color: "#1DB954",
  },
  buttonLiniker: {
    backgroundColor: "#1DB954",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonTextLiniker: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  lyricsContainer: {
    height: 250,
    backgroundColor: '#A33327',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    marginHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1,
  },
  iconC: {
    marginLeft: 20,
  },
  lyrics: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 24,
  },
  lyricsBlack: {
    color: '#000',
    fontSize: 20,
    lineHeight: 24,
  },
});

export default styles;