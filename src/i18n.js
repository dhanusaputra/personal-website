import i18n from 'i18next'
import { initReactI18next } from 'react-i18next/hooks'

import translationID from './locales/id/translation.json'
import translationEN from './locales/en/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  id: {
    translation: translationID
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'id',

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
