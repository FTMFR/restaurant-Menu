import React from "react";
import menu from "../data";

const Posts = ({ menus }) => {
  return (
    <div className="section-center">
      {menus.map((item) => (
        <article className="menu-item" key={item.id}>
          <img src={item.img} className="photo" alt={item.desc} />
          <div className="item-info">
            <header>
              <h4>{item.title}</h4>
              <h4 className="price">{item.price}$</h4>
            </header>
            <p className="item-text">{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Posts;
