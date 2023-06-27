import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleLoginPress = () => navigation.navigate('BudgetForm');
  
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    borderRadius: 10,
    color: '#fff',
    fontSize: 12,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: "center",
    width: '50%',
  }
});

export default HomeScreen;
