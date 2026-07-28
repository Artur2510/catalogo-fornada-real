import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Catalogo from '../pages/Catalogo/Catalogo';


export function AppRoutes() {
  return (
    <BrowserRouter>
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
    </Route>
  </Routes>
</BrowserRouter>
  );
}