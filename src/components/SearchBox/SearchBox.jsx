import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { name, searchTerm, handleInput } = props;

  return (
    <form className="search-box">
      <label htmlFor={name} className="search-box__label"></label>
      <input
        type="text"
        name={name}
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;
