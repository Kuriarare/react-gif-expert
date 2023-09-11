import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {
  const [catergories, setCatergories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (catergories.includes(newCategory)) return;
    setCatergories([newCategory, ...catergories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <div>
      {catergories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      </div>
    </>
  );
};

export default GifExpertApp;
