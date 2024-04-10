import React, { useEffect, useState } from "react";
import Category from "./Category";
import Posts from "./Posts";
import menus from "../data";

const allCategories = ["All", ...new Set(menus.map((menu) => menu.category))];

const OurMenu = () => {
  const [menu, setMenu] = useState(menus);
  const [category, setCategory] = useState(allCategories);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category category={category} />
        <Posts menus={menu} />
      </section>
    </main>
  );
};

export default OurMenu;
