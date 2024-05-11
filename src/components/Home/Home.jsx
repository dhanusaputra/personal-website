import { Layout, Spin } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import i18n from '../../i18n';
import { initLang } from '../../reducers/langReducer';
import langService from '../../services/languages';
import Content from './Content';
import LangFilter from './LangFilter';

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    langService.getAll().then((langs) => dispatch(initLang(langs)));
  }, [dispatch]);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const langs = useSelector((state) => state);

  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' });
  const layoutStyle = isBigScreen
    ? { padding: '10% 50% 10% 10%', backgroundColor: 'white' }
    : { backgroundColor: 'white' };

  return (
    <Layout className='layout' style={layoutStyle}>
      <Spin tip='loading...' spinning={langs.length <= 0}>
        <Layout.Header style={{ textAlign: 'right' }}>
          <LangFilter handleChange={changeLang} />
        </Layout.Header>
        <Layout.Content
          style={{
            padding: '50px 50px 50px 50px',
            backgroundColor: '#f5f5f5',
          }}
        >
          <div style={{ textAlign: 'center' }} className='site-layout-content'>
            <Content />
          </div>
        </Layout.Content>
      </Spin>
    </Layout>
  );
};

export default Home;
