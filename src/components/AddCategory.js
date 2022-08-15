import React, { useState } from "react";
import Proptypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
    onNewCategory(inputValue.trim());
  };
  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: Proptypes.func.isRequired,
};
