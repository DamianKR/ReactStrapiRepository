import React from "react";
import { Link } from "react-router-dom";
import "./CategoriesHome.scss";

function CategoriesHome() {
  return (
    <div className="categories-home container-fluid">
      <div className="rows w-100 m-0">
        <div className="cols">
          <div className="rows position-relative">
            <img
              src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
            <button className="position-absolute btn btn-light">
              <Link className="categories-home-link" to="/products/1">
                Sale
              </Link>
            </button>
          </div>
          <div className="rows position-relative">
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
            <button className="position-absolute btn btn-light">
              <Link className="categories-home-link" to="/products/1">
                Women
              </Link>
            </button>
          </div>
        </div>
        <div className="cols">
          <div className="rows position-relative">
            <img
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
            <button className="position-absolute btn btn-light">
              <Link className="categories-home-link" to="/products/1">
                New Season
              </Link>
            </button>
          </div>
        </div>
        <div className="cols cols-l">
          <div className="rows">
            <div className="cols">
              <div className="rows position-relative">
                <img
                  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <button className="position-absolute btn btn-light">
                  <Link className="categories-home-link" to="/products/1">
                    Men
                  </Link>
                </button>
              </div>
            </div>
            <div className="cols">
              <div className="rows position-relative">
                <img
                  src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <button className="position-absolute btn btn-light">
                  <Link className="categories-home-link" to="/products/1">
                    Accesories
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="rows position-relative">
            <img
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
            <button className="position-absolute btn btn-light">
              <Link className="categories-home-link" to="/products/1">
                Shoes
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesHome;
