import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// translations
import translationEN from "./langs/en.json";
import translationAR from "./langs/ar.json";

const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    }
};

i18n
    .use(initReactI18next)
    .init({
        lng: "fa",
        fallbackLng: "fa",
        resources,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;