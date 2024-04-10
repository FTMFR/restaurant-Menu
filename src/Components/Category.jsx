import React, { useEffect, useState } from "react";

const Category = ({ category }) => {
  return (
    <>
      <button type="button" className="filter-btn" key={category}>
        {category}
      </button>
    </>
  );
};

export default Category;
