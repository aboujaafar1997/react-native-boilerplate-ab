import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './ar.json';
import fr from './fr.json';

const LOCALE_PERSISTENCE_KEY = "language";

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async callback => {
    const lng = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);
    const selectLanguage = lng || "fr";
    callback(selectLanguage);
  },
  cacheUserLanguage: (locale) => {
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
  }
};


i18next.use(languageDetector).use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    fr,
    ar,
  },
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false,
  }
});

export default i18next;