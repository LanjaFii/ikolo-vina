// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from "./components/ScrollToTop";
import Layout from './components/layout/Layout';

import './index.css';
import useDynamicTitle from './hooks/useDynamicTitle';

const TitleHandler = () => {
  useDynamicTitle();
  return null;
};


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TitleHandler />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;