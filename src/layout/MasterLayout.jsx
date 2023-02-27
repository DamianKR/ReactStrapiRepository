import { Outlet } from "react-router-dom";
// import React, { useState, useCallback } from "react";
// import { useEffect } from "react";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";

function MasterLayout() {
  // const [y, setY] = useState(window.scrollY);
  // const [hidden, setHidden] = useState(false);

  // const isSticky = useCallback(
  //   (e) => {
  //     const scrollTop = window.scrollY;

  //     if (y > scrollTop) {
  //       console.log("scrrolling up");
  //       setHidden(false);
  //     } else if (y < scrollTop) {
  //       console.log("scrrolling down");
  //       setHidden(true);
  //     }

  //     setY(scrollTop);
  //   },
  //   [y]
  // );

  // useEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", isSticky);
  //   return () => {
  //     window.removeEventListener("scroll", isSticky);
  //   };
  // }, [isSticky]);

  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  );
}

export default MasterLayout;
