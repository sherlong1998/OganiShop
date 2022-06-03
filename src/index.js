import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyle/index.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <React.Fragment>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </React.Fragment>
    </React.StrictMode>,
);
