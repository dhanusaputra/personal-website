import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LangFilter from './components/LangFilter'
import { withTranslation } from 'react-i18next/hooks'

const App = ({ t }) => {
  return (
    <BrowserRouter basename='/'>
      <LangFilter />
      {t('nothing')}
    </BrowserRouter>
  )
}

export default withTranslation()(App)
