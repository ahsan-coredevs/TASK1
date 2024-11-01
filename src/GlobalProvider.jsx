import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { store } from './services/redux/store';


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