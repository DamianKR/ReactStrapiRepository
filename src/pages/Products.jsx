import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../components/products/productsList/ProductsList";
import ProductsSidebar from "../components/products/productsSidebar/ProductsSidebar";
import useFetch from "../routing/useFetch";

function Products() {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const catId = parseInt(useParams().id);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const changeSort = (value) => {
    setSort(value);
  };
  const categoryChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setSelectedSubCats(
      checked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats);

  return (
    <div className="products d-flex">
      <ProductsSidebar
        data={data}
        maxPrice={maxPrice}
        onChangePrice={(e) => setMaxPrice(e.target.value)}
        onSort={changeSort}
        onCatChange={categoryChange}
      />
      <div className="content-products col ">
        <img
          className="catImg w-100 mb-3 rounded"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
        />
        <ProductsList
          maxPrice={maxPrice}
          sort={sort}
          selectedSubCats={selectedSubCats}
          catId={catId}
        />
      </div>
    </div>
  );
}

export default Products;
