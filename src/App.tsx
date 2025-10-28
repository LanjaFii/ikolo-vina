// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from "./components/ScrollToTop";

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;