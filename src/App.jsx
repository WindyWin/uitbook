import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/Layout/AdminLayout";
import Layout from "./components/Layout/Layout";
import { Home, AdminDashboard } from "./views";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
