import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import langReducer from './reducers/langReducer';

const store = configureStore({
  reducer: langReducer,
  devTools: composeWithDevTools(),
});

export default store;
