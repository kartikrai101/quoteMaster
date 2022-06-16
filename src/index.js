import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'; // importing the BrowserRouter component

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// wrapping the App component in BrowserRouter component
root.render(<BrowserRouter>
                <App />
            </BrowserRouter>);
