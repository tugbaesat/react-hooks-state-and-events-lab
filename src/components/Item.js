import React, {useState} from "react";

function Item({ name, category }) {

const [inCart, setInCart] = useState(false);
const handleClick = () => {
    setInCart(!inCart);
  };
  const cartClass = inCart ? "in-cart" : " ";
  const cartInfo = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartInfo}</button>
    </li>
  );
}

export default Item;
