import React from "react";
import FeaturedCard from "../../shared/cards/FeaturedCard";
import "./FeaturedProducts.scss";
import useFetch from "../../../routing/useFetch";

function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  // console.log(data);

  return (
    <div className="container my-5 featuredProducts">
      <div className="top-featured row">
        <h3 className="text-capitalize col-3 fw-bold">{type} products</h3>
        <p className="col text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
          inventore. Repellat molestiae in quibusdam aliquam rem fugiat minus
          nisi dolorem, placeat autem nobis velit sequi eos eaque
          necessitatibus, minima ea?
        </p>
      </div>
      <div className="bottom-featured d-flex justify-content-around flex-wrap">
        {error ? (
          <div>Something went wrong</div>
        ) : loading ? (
          <div>Loading</div>
        ) : (
          data?.map((featured) => (
            <FeaturedCard key={featured.id} featured={featured} />
          ))
        )}
      </div>
    </div>
  );
}

export default FeaturedProducts;
