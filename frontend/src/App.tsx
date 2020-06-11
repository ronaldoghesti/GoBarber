import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';
import SignIn from './pages/SignIn';

const App: React.FC = () => <SignIn />;

export default App;
