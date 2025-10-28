// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Ikolo from '@/pages/Ikolo';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Vina from '@/pages/Vina';
import Wellness from '@/pages/Wellness';
import Blog from '@/pages/Blog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/ikolo"
        element={
          <Layout>
            <Ikolo />
          </Layout>
        }
      />
      <Route
        path="/vina"
        element={
          <Layout>
            <Vina />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/wellness"
        element={
          <Layout>
            <Wellness />
          </Layout>
        }
      />
      <Route
        path="/blog"
        element={
          <Layout>
            <Blog />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
