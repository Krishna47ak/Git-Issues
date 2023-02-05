import { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import IssuesPage from './components/issues/IssuesPage';

function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
        <IssuesPage/>
      </Fragment>
    </Router >
  );
}

export default App;
