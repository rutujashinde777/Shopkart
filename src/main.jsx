import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Demo from './Demo.jsx'
// import demo from demo.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter, RouterProvider }  from'react-router-dom'
import router from './Router.jsx'
import Register from './pages/Register.jsx';    
import { ThemeProvider } from './Context/ThemeContext.jsx';
import ErrorBoudary from './Component/ErrorBoudary.jsx';
import { CartProvider } from './Context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
    // <RouterProvider router={router} 
    <ThemeProvider>
        
     <ErrorBoudary>
        <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
        </CartProvider>
     </ErrorBoudary>
    </ThemeProvider>
 
)