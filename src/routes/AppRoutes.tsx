// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Ikolo from '@/pages/Ikolo';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Vina from '@/pages/Vina';
import Wellness from '@/pages/Wellness';
import Blog from '@/pages/Blog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ikolo" element={<Ikolo />} />
      <Route path="/vina" element={<Vina />} />
      <Route path="/wellness" element={<Wellness />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;