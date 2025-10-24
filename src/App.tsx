// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from "./components/ScrollToTop";
import Layout from './components/layout/Layout';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;