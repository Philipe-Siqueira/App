import i18n from 'i18n-js';
import * as RNLocalize from "react-native-localize";
const  languageSettings = RNLocalize.getLocales();

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: { welcome: 'Hello,'},
  pt: { welcome: 'Bem vindo,' },
  es: { welcome: 'Bien venido' },
};

// Set the locale once at the beginning of your app.
i18n.locale = languageSettings.length > 0 ? languageSettings[0].languageCode : 'pt';

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export const tranlateds = (value:string) => i18n.t(value);
