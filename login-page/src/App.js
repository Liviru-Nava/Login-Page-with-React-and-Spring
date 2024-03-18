import { Fragment } from 'react';
import './App.css';
import Header from './components/header/Header';
import Login from './components/login/Login';

function App() {
  return (
        <Fragment>
          <Header />
          <Login />
        </Fragment>
  );
}

export default App;
