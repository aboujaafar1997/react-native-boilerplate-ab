import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { authentification } from '../../store/authentification/actions';

const LoginScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [lang, setLang] = useState(i18n.language || 'en');
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const tr = (key) => t(`loginScreen.${key}`);

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert(tr('errorTitle'), tr('errorMessage'));
      return;
    } else {
      navigation.navigate('MainTabs');

     // dispatch(authentification({ username, password }));
    }
  };

  const handleLanguageChange = (value) => {
    setLang(value);
    i18n.changeLanguage(value);
    setShowDropdown(false);
  };

  const availableLangs = [
    { label: 'Français', value: 'fr' },
    { label: 'العربية', value: 'ar' },
  ];
  const { loading } = useSelector((state) => state.auth);
  return (
    <View style={styles.container}>
      <View style={styles.langContainer}>
        <TouchableOpacity style={styles.langButton} onPress={() => setShowDropdown(!showDropdown)}>
          <Text style={styles.langText}>{lang.toUpperCase()} ▼</Text>
        </TouchableOpacity>

        {showDropdown && (
          <View style={styles.dropdown}>
            {availableLangs.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={styles.dropdownItem}
                onPress={() => handleLanguageChange(item.value)}
              >
                <Text
                  style={[
                    styles.dropdownText,
                    lang === item.value && { color: '#007bff', fontWeight: '600' },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <Text style={styles.title}>{tr('title')}</Text>

      <TextInput
        style={styles.input}
        placeholder={tr('username')}
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder={tr('password')}
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{tr('loginButton')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  langContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  langButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  langText: {
    color: '#fff',
    fontWeight: '600',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 5,
    overflow: 'hidden',
    zIndex: 99,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default LoginScreen;
