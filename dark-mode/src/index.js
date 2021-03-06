import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import Routes from './routes';
import DarkModeProvider from './common/containers/ContextAPI/DarkModeProvider';

ReactDOM.render(
  <DarkModeProvider >
    <AppContainer>
      <Routes />
    </AppContainer>
  </DarkModeProvider>
  ,
  document.getElementById('root')
);
