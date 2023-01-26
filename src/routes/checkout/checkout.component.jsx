import { useContext } from "react";
import classnames from "classnames";
import { CartContext } from "../../contexts/cart.content";
import {
  Card,
  CardBody,
  CardText,
  Button,
  Badge,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";
import { Star, X, Plus, Minus, Heart } from "react-feather";
import "./checkout.styles.scss";
import { Link } from "react-router-dom";
const CheckOut = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  return (
    <div className="list-view product-checkout">
      <div>
        {cartItems.length ? (
          cartItems.map((item) => {
            const { id, name, quantity, imageUrl, price } = item;
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
                      By{' '} <a
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
                    <Button
                      onClick={() => removeItemFromCart(item)}
                      className="arrow"
                    >
                      <Minus size={12} />
                    </Button>
                    <span className="value">{quantity}</span>
                    <Button
                      onClick={() => addItemToCart(item)}
                      className="arrow"
                    >
                      <Plus size={12} />
                    </Button>
                  </div>
                  {/* <div className='delivery-date text-muted'>Delivery by, {formatDate(item.shippingDate)}</div> */}
                  <span className="text-success">
                    {item.discountPercentage}% off {item.offers} offers
                    Available
                  </span>
                </CardBody>
                <div className="item-options text-center">
                  <div className="item-wrapper">
                    <div className="item-cost">
                      <h4 className="item-price">${price * quantity}</h4>
                      {item.hasFreeShipping ? (
                        <CardText className="shipping">
                          <Badge color="light-success" pill>
                            Free Shipping
                          </Badge>
                        </CardText>
                      ) : null}
                    </div>
                  </div>
                  <Button
                    onClick={() => clearItemFromCart(item)}
                    className="mt-1 remove-wishlist"
                    color="light"
                  >
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
          })
        ) : (
          <div className="empty-product-state">Your cart is empty</div>
        )}
      </div>
      <div className="checkout-options">
        {" "}
        <Card>
          <CardBody>
            <label className="section-label mb-1">Options</label>
            <InputGroup className="input-group-merge coupons">
              <Input placeholder="Coupons" />
              <InputGroupText className="coupons-text ms-0">
                Apply
              </InputGroupText>
            </InputGroup>
            <hr />
            <div className="price-details">
              <h6 className="price-title">Price Details</h6>
              <ul className="list-unstyled">
                <li className="price-detail">
                  <div className="detail-title">Total MRP</div>
                  <div className="detail-amt">$598</div>
                </li>
                <li className="price-detail">
                  <div className="detail-title">Bag Discount</div>
                  <div className="detail-amt discount-amt text-success">
                    -25$
                  </div>
                </li>
                <li className="price-detail">
                  <div className="detail-title">Estimated Tax</div>
                  <div className="detail-amt">$1.3</div>
                </li>
                <li className="price-detail">
                  <div className="detail-title">EMI Eligibility</div>
                  <a
                    href="/"
                    className="detail-amt text-primary"
                    onClick={(e) => e.preventDefault()}
                  >
                    Details
                  </a>
                </li>
                <li className="price-detail">
                  <div className="detail-title">Delivery Charges</div>
                  <div className="detail-amt discount-amt text-success">
                    Free
                  </div>
                </li>
              </ul>
              <hr />
              <ul className="list-unstyled">
                <li className="price-detail">
                  <div className="detail-title detail-total">Total</div>
                  <div className="detail-amt fw-bolder">${cartTotal}</div>
                </li>
              </ul>
              <Button
                block
                color="primary"
                disabled={!cartItems.length}
                classnames="btn-next place-order"
              >
                Place Order
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default CheckOut;
