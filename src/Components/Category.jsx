import React, { useEffect, useState } from "react";

const Category = ({ category, filterMenus }) => {
  const [name, setName] = useState("All");

  // const nameHandler = (e) => {
  //   setName(e.target.value);
  //   console.log(e.target.value);
  // };

  return (
    <div className="btn-container">
      {category.map((cate) => (
        <button
          type="button"
          value={cate}
          className={`filter-btn ${name === cate && "highlight"}`}
          key={cate}
          onClick={(e) => {
            setName(cate);
            filterMenus(cate);
          }}
        >
          {cate}
        </button>
      ))}
    </div>
  );
};

export default Category;
