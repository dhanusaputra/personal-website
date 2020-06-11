import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LangFilter from './components/LangFilter'
import { withTranslation } from 'react-i18next/hooks'
import i18n from './i18n'
import { Layout } from 'antd'

const App = ({ t }) => {
  const changeLng = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <BrowserRouter basename='/'>
      <Layout className='layout'>
        <Layout.Header style={{ textAlign: 'right' }}>
          <LangFilter handleChange={changeLng} />
        </Layout.Header>
        <Layout.Content style={{ padding: '50px 50px 50px 100px' }}>
          <div className='site-layout-content'>
            {t('nothing')}
          </div>
        </Layout.Content>
      </Layout>
    </BrowserRouter>
  )
}

export default withTranslation()(App)
