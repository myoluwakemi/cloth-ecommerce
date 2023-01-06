import { useContext } from "react";
import { CartContext } from "../../contexts/cart.content";
import classnames from "classnames";
import "./product-card.styles.scss";
import { Card, CardBody, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "react-feather";

const Product = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => addItemToCart(product);
  return (
    <Card className="ecommerce-card">
      <div className="item-img text-center mx-auto">
        <Link to={`/apps/ecommerce/product-detail/`}>
          <img className="img-fluid card-img-top" src={imageUrl} alt={name} />
        </Link>
      </div>
      <CardBody>
        <div className="item-wrapper">
          <div className="item-rating">
            <ul className="unstyled-list list-inline">
              {new Array(5).fill().map((listItem, index) => {
                return (
                  <li key={index} className="ratings-list-item me-25">
                    <Star />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="item-cost">
            <h6 className="item-price">${price}</h6>
          </div>
        </div>
        <h6 className="item-name">
          <Link className="text-body" to={`/apps/ecommerce/product-detail/`}>
            {name}
          </Link>
          <CardText tag="span" className="item-company">
            By{" "}
            <a
              className="company-name"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              kjj
            </a>
          </CardText>
        </h6>
        <CardText className="item-description">kkll</CardText>
      </CardBody>
      <div className="item-options text-center">
        <div className="item-wrapper">
          <div className="item-cost">
            <h4 className="item-price">${price}</h4>
          </div>
        </div>
        <Button className="btn-wishlist" color="light">
          <Heart size={14} />
          <span>Wishlist</span>
        </Button>
        <Button
          color="primary"
          onClick={addProductToCart}
          className="btn-cart move-cart"
          /*eslint-disable */
          /*eslint-enable */
        >
          <ShoppingCart className="me-50" size={14} />
          <span> 'Add To Cart</span>
        </Button>
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
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductCard;
