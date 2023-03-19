import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css';

// import 'antd/dist/antd.css';
//hooks App component/code into div which has Id root
ReactDOM.render(
    <Router>
        <App/>
    </Router>, document.getElementById('root'));