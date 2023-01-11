import { useContext } from "react";
import classnames from "classnames";
import { CartContext } from "../../contexts/cart.content";
import { Card, CardBody, CardText, Button, Badge } from "reactstrap";
import { Star, X, Plus, Minus, Heart } from "react-feather";
import "./checkout.styles.scss";
import { Link } from "react-router-dom";
const CheckOut = () => {
  const { cartItems , addItemToCart,removeItemFromCart} = useContext(CartContext);

  const addItemToCartHandler = (item) => {
    addItemToCart()
  }
  return (
    <div>
      THis is checkout
      <div className="list-view product-checkout">
        {cartItems.map((item) => {
          const { id, name, quantity, imageUrl } = item;
          return (
            <Card key={id} className="ecommerce-card">
              <div className="item-img">
                <Link to={`/apps/ecommerce/product-detail/${item.slug}`}>
                  <img className="img-fluid" src={imageUrl} alt={name} />
                </Link>
              </div>
              <CardBody>
                <div className="item-name">
                  <h6 className="mb-0">
                    <Link to={`/apps/ecommerce/product-detail/${item.slug}`}>
                      {name}
                    </Link>
                  </h6>
                  <span className="item-company">
                    By
                    <a
                      className="ms-25"
                      href="/"
                      onClick={(e) => e.preventDefault()}
                    >
                      {item.brand}
                    </a>
                  </span>
                  <div className="item-rating">
                    <ul className="unstyled-list list-inline">
                      {new Array(5).fill().map((listItem, index) => {
                        return (
                          <li key={index} className="ratings-list-item me-25">
                            <Star
                              className={classnames({
                                "filled-star": index + 1 <= item.rating,
                                "unfilled-star": index + 1 > item.rating,
                              })}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <span className="text-success mb-1">In Stock</span>
                <div className="item-quantity">
                  <span className="quantity-title me-50">Qty</span>
                  <div onClick={() => addItemToCart(item)} className="arrow">
                    &#10094;
                  </div>
                  <span className="value">{quantity}</span>
                  <div onClick={()=> removeItemFromCart(item)} className="arrow">
                    &#10095;
                  </div>
                </div>
                {/* <div className='delivery-date text-muted'>Delivery by, {formatDate(item.shippingDate)}</div> */}
                <span className="text-success">
                  {item.discountPercentage}% off {item.offers} offers Available
                </span>
              </CardBody>
              <div className="item-options text-center">
                <div className="item-wrapper">
                  <div className="item-cost">
                    <h4 className="item-price">${item.price}</h4>
                    {item.hasFreeShipping ? (
                      <CardText className="shipping">
                        <Badge color="light-success" pill>
                          Free Shipping
                        </Badge>
                      </CardText>
                    ) : null}
                  </div>
                </div>
                <Button className="mt-1 remove-wishlist" color="light">
                  <X size={14} className="me-25" />
                  <span>Remove</span>
                </Button>
                <Button className="btn-cart" color="primary">
                  <Heart
                    size={14}
                    className={classnames("me-25", {
                      "fill-current": item.isInWishlist,
                    })}
                  />
                  <span className="text-truncate">Wishlist</span>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default CheckOut;
