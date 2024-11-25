import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Image } from 'react-native';
import styles from './styles2';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.ibb.co/swZdfJ4/hq720.webp' }} style={styles.logo} />
      <Text style={styles.title}>Música para todos.</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail ou nome de usuário"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#B3B3B3"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#B3B3B3"
      />

      <View style={styles.rememberContainer}>
        <Text style={styles.rememberText}>Lembrar de mim</Text>
        <Switch
          value={rememberMe}
          onValueChange={setRememberMe}
          thumbColor={rememberMe ? "#1DB954" : "#B3B3B3"}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OU</Text>

      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.facebookText}>ENTRAR COM O FACEBOOK</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        NÃO TEM UMA CONTA? <Text style={styles.signupText}>INSCREVA-SE</Text>
      </Text>

      <View style={styles.footerLinks}>
        <Text style={styles.footerLink}>REDEFINIR SENHA</Text>
        <Text style={styles.footerLink}>PREFERÊNCIAS</Text>
      </View>
    </View>
  );
}