import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import Home from "../pages/Home";

const PrivateRoutes = () => {
  const Products = lazy(() => import("../pages/Products"));
  const ProductDetail = lazy(() => import("../pages/ProductDetail"));


  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route
          path="auth/*"
          element={<Navigate to="/home" />}
        />
        {/* Pages */}
        <Route path="home" element={<Home />} />
        {/* Lazy Modules */}
        <Route
          path="products/:id"
          element={
            <SuspensedView>
              <Products />
            </SuspensedView>
          }
        />
           <Route
          path="product/:id"
          element={
            <SuspensedView>
              <ProductDetail />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView = ({ children }) => {

  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export { PrivateRoutes };
