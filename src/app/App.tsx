import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "../layouts/MainLayout";
import { Home } from "../pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
