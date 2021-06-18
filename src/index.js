import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from 'store';

import LocalStorage from 'utils/storage';
import * as themes from 'theme/scheme.json';

const Themed = () => {
    LocalStorage.write('all-themes', themes.default)
    return <App />
}

ReactDOM.render(
    <Provider store={store}>
        <Themed />
        {/* <App /> */}
    </Provider>,
    document.getElementById('root')
);

