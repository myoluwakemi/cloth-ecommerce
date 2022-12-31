import { useContext } from "react";
import { CartContext } from "../../contexts/cart.content";
import classnames from "classnames";
import Button from "../button/button.component";
import "./product-card.styles.scss";
import { Card, CardBody, CardText, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "react-feather";


const ProductCard = ({ products, activeView }) => {
 
  const { addItemToCart } = useContext(CartContext);
//   const addProductToCart = () => addItemToCart(product);
const renderProducts = () => {
    if (products.length) {
      return products.map(item => {
        const CartBtnTag = item.isInCart ? Link : 'button'

        return (
          <Card className='ecommerce-card' key={item.name}>
            <div className='item-img text-center mx-auto'>
              <Link to={`/apps/ecommerce/product-detail/`}>
                <img className='img-fluid card-img-top' src={item.imageUrl} alt={item.name} />
              </Link>
            </div>
            <CardBody>
              <div className='item-wrapper'>
                <div className='item-rating'>
                  <ul className='unstyled-list list-inline'>
                    {new Array(5).fill().map((listItem, index) => {
                      return (
                        <li key={index} className='ratings-list-item me-25'>
                          <Star
                           
                          />
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className='item-cost'>
                  <h6 className='item-price'>${item.price}</h6>
                </div>
              </div>
              <h6 className='item-name'>
                <Link className='text-body' to={`/apps/ecommerce/product-detail/`}>
                  {item.name}
                </Link>
                <CardText tag='span' className='item-company'>
                  By{' '}
                  <a className='company-name' href='/' onClick={e => e.preventDefault()}>
                    kjj
                  </a>
                </CardText>
              </h6>
              <CardText className='item-description'>kkll</CardText>
            </CardBody>
            <div className='item-options text-center'>
              <div className='item-wrapper'>
                <div className='item-cost'>
                  <h4 className='item-price'>${item.price}</h4>
                 
                </div>
              </div>
              <Button
                className='btn-wishlist'
                color='light'
               
              >
                <Heart
                  className={classnames('me-50', {
                    'text-danger': item.isInWishlist
                  })}
                  size={14}
                />
                <span>Wishlist</span>
              </Button>
              <Button
                color='primary'
                tag={CartBtnTag}
                className='btn-cart move-cart'
               
                /*eslint-disable */
                {...(item.isInCart
                  ? {
                      to: '/apps/ecommerce/checkout'
                    }
                  : {})}
                /*eslint-enable */
              >
                <ShoppingCart className='me-50' size={14} />
                <span> 'Add To Cart</span>
              </Button>
            </div>
          </Card>
        )
      })
    }
  }
        

  return (
    <div
      className={classnames({
        "grid-view": activeView === "grid",
        "list-view": activeView === "list",
      })}
    >
      {renderProducts()}
    </div>
    // <div className="product-card-container">
    //   <img src={imageUrl} alt={`${name}`} />
    //   <div className="footer">
    //     <span className="name">{name}</span>
    //     <span className="price">{price}</span>
    //   </div>
    //   <Button buttonType="inverted" onClick={addProductToCart}>
    //     Add to cart
    //   </Button>
    // </div>
  );
};
export default ProductCard;
