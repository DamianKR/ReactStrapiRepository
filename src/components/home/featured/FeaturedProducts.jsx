import React, { useEffect, useState } from "react";
import FeaturedCard from "../../shared/cards/FeaturedCard";
import "./FeaturedProducts.scss";
import useFetch from "../../../routing/useFetch";

const dataFeatured = [
  {
    id: 11231,
    attributes: {
      fake: true,
      desc: "test desc",
      title: "Long Leggins Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 20,
      publishedAt: "2023-02-26T23:40:39.853Z",
      type: "featured",
      createdAt: "2023-02-26T23:32:43.431Z",
      updatedAt: "2023-02-26T23:52:34.671Z",
      img: {
        data: {
          attributes: {
            url: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
        },
      },
    },

    imgSrc2:
      "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 22121,
    attributes: {
      fake: true,
      desc: "pretty hat",
      title: "Hat yellow",
      isNew: true,
      oldPrice: 19,
      price: 12,
      publishedAt: "2023-02-26T23:40:39.853Z",
      type: "featured",
      createdAt: "2023-02-26T23:32:43.431Z",
      updatedAt: "2023-02-26T23:52:34.671Z",
      img: {
        data: {
          attributes: {
            url: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
        },
      },
    },
  },
  {
    id: 321313,
    attributes: {
      fake: true,
      desc: "test desc",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
      publishedAt: "2023-02-26T23:40:39.853Z",
      type: "featured",
      createdAt: "2023-02-26T23:32:43.431Z",
      updatedAt: "2023-02-26T23:52:34.671Z",
      img: {
        data: {
          attributes: {
            url: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
        },
      },
    },
  },
];

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
