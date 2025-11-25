import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Form } from './views/components/form.tsx';
import { Home } from './views/home/home.tsx';
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
