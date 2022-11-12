import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/Layout/AdminLayout";
import Layout from "./components/Layout/Layout";
import {
  Home,
  Book,
  BookDetail,
  Search,
  Blog,
  About,
  AdminDashboard,
  Checkout,
  Cart
} from "./views";

//AI LÀM TRANG NÀO TỰ THÊM ROUTE CHO TRANG ĐÓ
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
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
