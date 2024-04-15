import React, { useEffect, useState } from "react";
import Category from "./Category";
import Posts from "./Posts";
import menus from "../data";

const allCategories = ["All", ...new Set(menus.map((menu) => menu.category))];

const OurMenu = () => {
  const [allMenu, setAllMenu] = useState(menus);
  const [categories, setCategories] = useState(allCategories);

  const filterMenus = (category) => {
    if (category === "All") {
      setAllMenu(menus);
      return;
    }

    let filteredMenus = menus.filter((menu) => menu.category === category);
    setAllMenu(filteredMenus);

    console.log(filteredMenus);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category category={categories} filterMenus={filterMenus} />
        <Posts menus={allMenu} />
      </section>
    </main>
  );
};

export default OurMenu;
