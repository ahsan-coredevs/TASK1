import React from 'react';
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import App from './App';

const GlobalProvider = () => {
    return (
        <div>
             <Provider store={store}>
                <App/>

             </Provider>
            
        </div>
    );
};

export default GlobalProvider;