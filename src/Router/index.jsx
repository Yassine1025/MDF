import { createBrowserRouter } from 'react-router-dom';
import Layout from '../composers/Layout/Layout';
import Accueil from '../composers/Pages/Accueil';
import Sidebar from '../composers/Pages/Sidebar';
import Footer from '../composers/Pages/Footer';
import Bureau from '../composers/Pages/Category/Bureau';
import LaCuisine from '../composers/Pages/Category/LaCuisine';
import LeSalon from '../composers/Pages/Category/LeSalon';

export const router = createBrowserRouter([{
    element: <Layout />,
    children: [
        { path: '/', element: <Accueil /> }, 
        { path: '/Sidebar', element: <Sidebar /> },
        { path: '/Footer', element: <Footer /> },
      
        {path: '/Bureau', element: <Bureau/>},
        {path: '/Cuisine', element: <LaCuisine/>},
        {path: '/Salon', element: <LeSalon/>},

        
    ]
}]);
