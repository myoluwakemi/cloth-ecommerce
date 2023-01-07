import { useContext } from "react";
import { CartContext } from "../../contexts/cart.content";
import classnames from "classnames";
import "./product-card.styles.scss";
import { Card, CardBody, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "react-feather";

const Product = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl, description } = product;
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
          {/* <div className="item-rating">
                  <ul className="unstyled-list list-inline">
                    {new Array(5).fill().map((listItem, index) => {
                      return (
                        <li key={index} className="ratings-list-item me-25">
                          <Star />
                        </li>
                      );
                    })}
                  </ul>
                </div> */}
         
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
        
        <div
          onClick={addProductToCart}
          className="btn-cart"
        >
          <ShoppingCart className="me-50" size={14} />
         
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
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductCard;
