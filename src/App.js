import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LangFilter from './components/LangFilter'
import Content from './components/Content'
import i18n from './i18n'
import { Layout, Spin } from 'antd'
import { useDispatch } from 'react-redux'
import { initLang } from './reducers/langReducer'
import langService from './services/languages'
import { useSelector } from 'react-redux'

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

  const langs = useSelector(state => state)

  return (
    <BrowserRouter basename='/'>
      <Layout className='layout' style={{ padding: '100px 650px 100px 150px', backgroundColor: 'white' }}>
        <Spin tip='loading...' spinning={ langs.length <=  0 }>
          <Layout.Header style={{ textAlign: 'right' }}>
            <LangFilter handleChange={changeLang} />
          </Layout.Header>
          <Layout.Content style={{ padding: '50px 50px 50px 50px', backgroundColor: '#f5f5f5' }}>
            <div style ={{ textAlign: 'center' }} className='site-layout-content'>
              <Content />
            </div>
          </Layout.Content>
        </Spin>
      </Layout>
    </BrowserRouter>
  )
}

export default App
