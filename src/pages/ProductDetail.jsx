import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/productDetails/Product";
import useFetch from "../routing/useFetch";


function ProductDetail() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");


  const { data, loading } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product-detail d-flex">
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <div className="product-details-sidebar col-2 d-flex">
            <div className="images d-flex flex-column">
              <img
                src={
                  process.env.REACT_APP_API_IMAGES_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={() => setSelectedImg("img")}
              />
              {data?.attributes?.img2?.data && (
                <img
                  src={
                    process.env.REACT_APP_API_IMAGES_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={() => setSelectedImg("img2")}
                />
              )}
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_API_IMAGES_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <Product product={data?.attributes} productId={data?.id}/>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
