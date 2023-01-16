import {  useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.content";
import { WishContext } from "../../contexts/wish.context";
import { Card, CardBody, CardText } from "reactstrap";
import { ShoppingCart, Heart } from "react-feather";

const WishList = () => {
  const { wishList } = useContext(WishContext);
  const { addItemToCart } = useContext(CartContext);
 
  return (
    <div className="grid-view">
        {wishList.length?  (wishList.map((wishItem) => (
        <Card className="ecommerce-card" key={wishItem.id}>
          <div className="item-img text-center mx-auto">
            <Link to={`/product/${wishItem.id}`}>
              <img
                className="img-fluid card-img-top"
                src={wishItem.imageUrl}
                alt={wishItem.name}
              />
            </Link>
              <div className="wish">
         <Heart className="wish-added" size={14}></Heart>
         
        </div>
          </div>
          <CardBody>
            <div className="item-wrapper"></div>
            <h6 className="item-name">
              <Link className="text-body" to={`/product/${wishItem.id}`}>
                {wishItem.name}
              </Link>
              <CardText tag="span" className="item-company">
                By{" "}
                <a
                  className="company-name"
                  href="/"
                  onClick={(e) => e.preventDefault()}
                >
                  {wishItem.brand}
                </a>
              </CardText>
            </h6>
            <CardText className="item-description">
              {wishItem.description}
            </CardText>
          </CardBody>
          <div className="item-options text-center">
            <div className="item-wrapper">
              <div className="item-cost">
                <h4 className="item-price">${wishItem.price}</h4>
              </div>
            </div>
            <div className="item-cost">
              <span className="price-title">Price:</span>
              <h6 className="grid-item-price">${wishItem.price}</h6>
            </div>

            <div onClick={()=> addItemToCart(wishItem)} className="btn-cart">
              <ShoppingCart className="me-50 cart-svg" size={14} />
            </div>
          </div>
        </Card>
      ))): <div className="empty-product-state">You wish list is empty</div>}
        
     
    </div>
  );
};
export default WishList;
