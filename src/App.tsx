/* eslint-disable spaced-comment */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React from 'react';
import GlobalStyle from './styles/globals';
import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    
    <GlobalStyle />
  </>
);

export default App;
