import React from "react";
import useFetch from "../../../routing/useFetch";
import FeaturedCard from "../../shared/cards/FeaturedCard";
import "./ProductsList.scss";

function ProductsList({ maxPrice, sort, selectedSubCats, catId }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${selectedSubCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${ sort ? sort : 'asc'}`
  );

  console.log("dataList", data);
  return (
    <div className="products-list d-flex justify-content-start flex-wrap">
      {loading ? (
        <div>Loading</div>
      ) : (
        data?.map((prod) => <FeaturedCard key={prod.id} featured={prod} />)
      )}
    </div>
  );
}

export default ProductsList;
