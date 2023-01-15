import { useContext } from "react";
import { CartContext } from "../../contexts/cart.content";
import classnames from "classnames";
import "./product-card.styles.scss";
import { Card, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import {  ShoppingCart, Heart } from "react-feather";

const Product = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { id, name, price, imageUrl, description, brand } = product;
  const addProductToCart = () => addItemToCart(product);
  return (
    <Card className="ecommerce-card" key={id}>
      <div className="item-img text-center mx-auto">
        <Link to={`/product/${id}`}>
          <img className="img-fluid card-img-top" src={imageUrl} alt={name} />
        </Link>
        <div className="wish">
          <Heart size={14}/>
        </div>
      </div>
      <CardBody>
        <div className="item-wrapper">
        </div>
        <h6 className="item-name">
          <Link className="text-body" to={`/product/${id}`}>
            {name}
          </Link>
          <CardText tag="span" className="item-company">
            By{" "}
            <a
              className="company-name"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              {brand}
            </a>
          </CardText>
        </h6>
        <CardText className="item-description">{description}</CardText>
      </CardBody>
      <div className="item-options text-center">
        <div className="item-wrapper">
          <div className="item-cost">
            <h4 className="item-price">${price}</h4>
          </div>
        </div>
        <div className="item-cost">
          <span className="price-title">Price:</span>
          <h6 className="grid-item-price">${price}</h6>
        </div>

        <div onClick={addProductToCart} className="btn-cart">
          <ShoppingCart className="me-50 cart-svg" size={14} />
        </div>
      </div>
    </Card>
  );
};

const ProductCard = ({ products, activeView }) => {
  return (
    <div
      className={classnames({
        "grid-view": activeView === "grid",
        "list-view": activeView === "list",
      })}
    >
      {products.map(( product,index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};
export default ProductCard;
