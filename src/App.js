import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LangFilter from './components/LangFilter'
import { withTranslation } from 'react-i18next/hooks'
import i18n from './i18n'

const App = ({ t }) => {
  const changeLng = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <BrowserRouter basename='/'>
      <LangFilter handleChange={changeLng} />
      {t('nothing')}
    </BrowserRouter>
  )
}

export default withTranslation()(App)
