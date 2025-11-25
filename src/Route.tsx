import { BrowserRouter, Route, Routes } from 'react-router';
import { Form } from './views/components/form.tsx';
import { Home } from './views/components/home.tsx';
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
