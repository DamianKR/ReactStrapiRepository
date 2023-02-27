import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedCard.scss";

function FeaturedCard({ featured }) {
  return (
    <div className="p-lg-2 col-lg-3 col-md-4 col-xs-2">
      <div className="card h-100">
        <Link
          className="h-100 d-flex flex-column link-featured"
          to={`/product/${featured?.id}`}
        >
          {featured?.attributes?.isNew && <span>New Season</span>}
          <img
            src={
              featured?.attributes?.fake
                ? featured?.attributes?.img?.data.attributes.url
                : process.env.REACT_APP_API_IMAGES_URL +
                  featured?.attributes?.img?.data.attributes.url
            }
            className="card-img-top img-container"
            alt="..."
          />

          <div className="card-body">
            <div className="h-100 d-flex flex-column justify-content-between">
              <h2 className="card-title">{featured?.attributes?.title}</h2>
              <div className="d-flex price">
                <h3 className="pe-2 text-success">{"Price: "}</h3>
                {featured?.attributes?.oldPrice ? (
                  <h3 className="pe-2 text-secondary text-decoration-line-through">
                    ${featured?.attributes?.oldPrice}
                  </h3>
                ) : null}
                <h3 className="">${featured?.attributes?.price}</h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCard;
