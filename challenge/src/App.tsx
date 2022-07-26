import { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import Home from './Pages/Home';

const App: React.FC = () => {

  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;