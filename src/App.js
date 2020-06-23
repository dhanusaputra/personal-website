import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LangFilter from './components/LangFilter'
import Content from './components/Content'
import i18n from './i18n'
import { Layout } from 'antd'
import { useDispatch } from 'react-redux'
import { initLang } from './reducers/langReducer'
import langService from './services/languages'

const App = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    langService.getAll().then(langs =>
      dispatch(initLang(langs))
    )
  }, [dispatch])

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <BrowserRouter basename='/'>
      <Layout className='layout' style={{ padding: '100px 650px 100px 150px', backgroundColor: 'white' }}>
        <Layout.Header style={{ textAlign: 'right' }}>
          <LangFilter handleChange={changeLang} />
        </Layout.Header>
        <Layout.Content style={{ padding: '50px 50px 50px 50px', backgroundColor: '#f5f5f5' }}>
          <div style ={{ textAlign: 'center' }} className='site-layout-content'>
            <Content />
          </div>
        </Layout.Content>
      </Layout>
    </BrowserRouter>
  )
}

export default App
