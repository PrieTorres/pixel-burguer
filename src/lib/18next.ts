import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import English from "@/Translation/English.json";
import Portuguese from "@/Translation/Portuguese.json";

const resources = {
    en: {
        translation: English,
    },
    pt: {
        translation: Portuguese,
    },
}

i18next.use(initReactI18next)
.init({
  resources,
  lng:"pt",
});

export default i18next;