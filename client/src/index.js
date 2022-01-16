import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import reducers from './reducers';
import AboutPage from './routes/AboutPage/AboutPage';
import RecordPage from './routes/RecordPage/RecordPage';
import HomePage from './routes/HomePage/HomePage';
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(

<Provider store = {store}>

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<HomePage/>}/>
                <Route path="about" element={<AboutPage />} />
                <Route path="records" element={<RecordPage />}>
                    <Route path="basic" element={<RecordPage/>}/>
                    <Route path="advanced" element={<RecordPage/>}/>
                </Route>
                <Route path="endorsements" element={<AboutPage />} />
                <Route path="contact" element={<AboutPage />} />
                <Route path="donate" element={<AboutPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
</Provider>, 
document.getElementById('root'));