import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as IssueProvider } from './store/IssueContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <IssueProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IssueProvider>
);

