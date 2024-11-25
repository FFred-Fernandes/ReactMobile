import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 280,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    color: '#FFF',
    marginBottom: 15,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rememberText: {
    color: '#B3B3B3',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#191414',
    fontWeight: 'bold',
  },
  orText: {
    color: '#B3B3B3',
    marginBottom: 20,
  },
  facebookButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#1877F2',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  facebookText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  footerText: {
    color: '#B3B3B3',
    marginTop: 20,
  },
  signupText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  footerLink: {
    color: '#B3B3B3',
    fontSize: 12,
  },
});