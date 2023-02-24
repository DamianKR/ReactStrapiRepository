import { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorsPage } from "../errors/ErrorsPage";
import App  from "../App";
// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import Home from "./pages/Home";
// import Navbar from "./components/shared/navbar/Navbar";
// import Footer from "./components/shared/footer/Footer";

const AppRoutes = () => {
  const [currentUser] = useState(true);

  // const Layout = () => {
  //   return (
  //     <div className="app">
  //       <Navbar />
  //       <Outlet />
  //       <Footer />
  //     </div>
  //   );
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/products/:id",
  //         element: <Products />,
  //       },
  //       {
  //         path: "/product/:id",
  //         element: <ProductDetail />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route element={<App />}>
          <Route path="error/*" element={<ErrorsPage />} />
          {/* <Route path="logout" element={<Logout />} /> */}
          {currentUser ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              <Route index element={<Navigate to="/home" />} />
            </>
          ) : (
            <>
              <Route path="*" element={<Navigate to="/home" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
