import React, { useEffect, useState } from "react";
import Category from "./Category";
import Posts from "./Posts";
import menu from "../data";

const OurMenu = ({ category }) => {
  const [menu, setMenu] = useState(menu);
  const [cate, setCate] = useState([]);

  useEffect(() => {
    const categor = menu.map((item) => item.category);
    const setCates = new Set(categor);
    setCate(Array.from[setCates]);
    console.log(setCates);
  }, []);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {cate &&
          cate.map((category) => (
            <div className="btn-container">
              <Category category={category} />
            </div>
          ))}
        <Posts />
      </section>
    </main>
  );
};

export default OurMenu;
