import { BrowserRouter, Route, Routes } from 'react-router';
import { Form } from './views/components/form.tsx';
import { Home } from './views/components/home.tsx';
import { Machine } from './views/components/machines.tsx';
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/machines" element={<Machine />} />
      </Routes>
    </BrowserRouter>
  );
}
