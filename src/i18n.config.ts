import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './i18n';

const resources = {
    en: {
        translation: en,
    },
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    //fallback language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
