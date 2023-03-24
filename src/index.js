import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';

import './App.css';
import store from './app/store';
//every single component inside App will have acces to store 
// import 'antd/dist/antd.css';
//hooks App component/code into div which has Id root

// const container = document.getElementById('root');

// // Create a root.
// const root = ReactDOMClient.createRoot(container);

// reactHooksModule.render(<Router>
//     <Provider store = {store}>
//         <App/>
//     </Provider>
// </Router>)

ReactDOM.render(
    <Router>
        <Provider store = {store}>
            <App/>
        </Provider>
    </Router>, document.getElementById('root'));