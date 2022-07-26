import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import MyCar from '../Pages/MyCar';
import InfoProd from '../Pages/InfoProd';
import Home from '../Pages/Home';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="InfoProd/:id" element={<InfoProd />} />
            <Route path="MyCar" element={<MyCar />} />
        </Routes>
        {/* <Home/> */}
    </Layout>
);

export default AppRoutes;
