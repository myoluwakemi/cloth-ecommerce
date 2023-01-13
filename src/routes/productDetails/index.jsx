import { useParams } from "react-router-dom";
import { useContext } from "react";

import { ProductContext } from "../../contexts/product.context";
// ** Third Party Components
import classnames from "classnames";
import {
  Star,
  ShoppingCart,
  DollarSign,
  Heart,
  Share2,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "react-feather";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Button,
  CardText,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";
import "./styles.scss"

const ProductDetails = () => {
  const { product } = useContext(ProductContext);
  const { id } = useParams();
  const det = product.findIndex((prod) => {
    return +prod.id == +id;
  });
  const productt = product[det];
  console.log(id, det, productt);

  return (
    <Row className="my-2 product-detail">
      <Col
        className="d-flex align-items-center justify-content-center mb-2 mb-md-0"
        md="5"
        xs="12"
      >
        <div className="d-flex align-items-center justify-content-center">
          <img
            className="img-fluid product-img"
            src={productt.imageUrl}
            alt={productt.name}
          />
        </div>
      </Col>
      <Col md="7" xs="12">
        <h4>{productt.name}</h4>
        <CardText tag="span" className="item-company">
          By{" "}
          <a
            className="company-name"
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            {productt.brand}
          </a>
        </CardText>
        <div className="ecommerce-details-price d-flex flex-wrap mt-1">
          <h4 className="item-price me-1">${productt.price}</h4>
          <ul className="unstyled-list list-inline">
            {new Array(5).fill().map((listItem, index) => {
              return (
                <li key={index} className="ratings-list-item me-25">
                  <Star
                    size={12}
                    className={classnames({
                      "filled-star": index + 1 <= productt.rating,
                      "unfilled-star": index + 1 > productt.rating,
                    })}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <CardText>
          Available - <span className="ms-25">In stock</span>
        </CardText>
        <CardText>{productt.description}</CardText>
        <ul className="product-features list-unstyled">
          {productt.hasFreeShipping ? (
            <li>
              <ShoppingCart size={15} /> <span>Free Shipping</span>
            </li>
          ) : null}
          <li>
            <DollarSign size={15} /> <span>EMI options available</span>
          </li>
        </ul>
        <hr />
        <div className="product-color-options">
          <h6>Colors</h6>
          {/* <ul className='list-unstyled mb-0'>{renderColorOptions()}</ul> */}
        </div>
        <hr />
        <div className="d-flex flex-column flex-sm-row pt-1">
          <Button
            className="btn-cart me-0 me-sm-1 mb-1 mb-sm-0"
            color="primary"
          >
            <ShoppingCart className="me-50 cart-svg" size={14} />
          </Button>
          <Button
            className="btn-wishlist me-0 me-sm-1 mb-1 mb-sm-0"
            color="secondary"
            outline
            // onClick={() => handleWishlist(data.isInWishlist)}
          >
            <Heart
              size={14}
              //   className={classnames('me-50', {
              //     'text-danger': data.isInWishlist
              //   })}
            />
          </Button>
          <UncontrolledButtonDropdown className="dropdown-icon-wrapper btn-share">
            <DropdownToggle
              className="btn-icon hide-arrow d-flex;"
              caret
              outline
            >
              <Share2 size={14} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem
                tag="a"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Facebook size={14} />
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Twitter size={14} />
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Youtube size={14} />
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Instagram size={14} />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </Col>
    </Row>
  );
};
export default ProductDetails;
