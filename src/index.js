import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { store, persistor } from 'redux/store';

const theme = {
  colors: {
    white: '#f8efeff5',
    err: '#ff6060',
    inputField: '#363b54',
    bgBtn: '#1764d4e3',
    bgPage: '#3e4865',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
