import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  // const [categories, setCategories] = useState(["One Punch"]);
  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = () => {
  //   setCategories(["HunterXHunter", ...categories]);
  //   // setCategories((categories) => ["HunterXHunter", ...categories]);
  // };

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
