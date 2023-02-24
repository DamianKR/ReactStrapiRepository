/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Route, Link, Routes, Outlet } from "react-router-dom";
import { Error500 } from "./components/Error500";
import { Error404 } from "./components/Error404";

const ErrorsLayout = () => {
  return (
    <div className="d-flex flex-column flex-root">
      <div
        className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
        style={{
          backgroundImage: `url('${"/media/illustrations/progress-hd.png"}')`,
        }}
      >
        <div className="d-flex flex-column flex-column-fluid text-center p-10 py-lg-20">
          <a href="/" className="mb-10 pt-lg-20">
            <img
              alt="Logo"
              src={"/media/logos/logo-1.svg"}
              className="h-50px mb-5"
            />
          </a>
          <div className="pt-lg-10 mb-10">
            <Outlet />
            <div className="text-center">
              <Link to="/" className="btn btn-lg btn-primary fw-bolder">
                Go to homepage
              </Link>
            </div>
          </div>
          <div
            className="
          d-flex
          flex-row-auto
          bgi-no-repeat
          bgi-position-x-center
          bgi-size-contain
          bgi-position-y-bottom
          min-h-100px min-h-lg-350px
        "
            style={{
              backgroundImage: `url('${"/media/illustrations/sketchy-1/17.png"}')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const ErrorsPage = () => (
  <Routes>
    <Route element={<ErrorsLayout />}>
      <Route path="404" element={<Error404 />} />
      <Route path="500" element={<Error500 />} />
      <Route index element={<Error404 />} />
    </Route>
  </Routes>
);

export { ErrorsPage };
