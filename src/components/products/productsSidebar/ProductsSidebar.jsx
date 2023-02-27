import React from "react";
import "./ProductsSidebar.scss";

function ProductsSidebar({
  maxPrice,
  onChangePrice,
  onSort,
  onCatChange,
  data,
}) {
  return (
    <div className="sidebar-products col-3 h-100 pe-4 pt-4">
      <div className="filterItem mb-3">
        <h2 className="mb-3">Product Categories</h2>
        <hr />
        {data?.map((item) => (
          <div key={`categor-${item?.id}`} className="inputItem">
            <input
              type="checkbox"
              id={item.id}
              value={item.id}
              onChange={onCatChange}
            />
            <label htmlFor={item.id}>{item?.attributes.title}</label>
          </div>
        ))}
      </div>
      <div className="filterItem">
        <h2>Filter by Price</h2>
        <hr />
        <div className="inputItem d-flex">
          <span>0</span>
          <input
            type="range"
            className="form-range"
            id="customRange1"
            min={0}
            max={1000}
            onChange={onChangePrice}
          />
          <span>{maxPrice}</span>
        </div>
      </div>
      <div className="filterItem">
        <h2>Sort By</h2>
        <hr />
        <div className="inputItem">
          <input
            type="radio"
            id="asc"
            value="asc"
            name="price"
            defaultChecked={true}
            onChange={() => onSort("asc")}
          />
          <label htmlFor="asc"> Price (Lowest First)</label>
        </div>
        <div className="inputItem">
          <input
            type="radio"
            id="desc"
            value="desc"
            name="price"
            onChange={() => onSort("desc")}
          />
          <label htmlFor="desc"> Price (Highest First)</label>
        </div>
      </div>
    </div>
  );
}

export default ProductsSidebar;
