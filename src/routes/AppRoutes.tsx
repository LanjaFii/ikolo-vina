// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Digital from '@/pages/Digital';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Events from '@/pages/Events';
import Wellness from '@/pages/Wellness';
import Enterprise from '@/pages/Enterprise';
import RSE from '@/pages/RSE';
import Blog from '@/pages/Blog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wellness" element={<Wellness />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/events" element={<Events />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/rse" element={<RSE />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;