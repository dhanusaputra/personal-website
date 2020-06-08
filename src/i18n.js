import i18n from 'i18next'
import { initReactI18next } from 'react-i18next/hooks'

const resources = {
  en: {
    translation: {
      'nothing': 'nothing personal here'
    }
  },
  id: {
    translation: {
      'nothing': 'tidak ada yang personal di sini'
    }
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
