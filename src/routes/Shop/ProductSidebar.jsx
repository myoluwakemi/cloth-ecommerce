import classnames from "classnames";
import { Card, CardBody, Row, Label, Input, Button, Col } from "reactstrap";

import { Star } from "react-feather";
const ProductSidebar = ({ show, onClose}) => {
  const categories = [
    {
      id: "appliances",
      title: "Appliances",
      defaultChecked: true,
    },
    {
      id: "audio",
      title: "Audio",
    },
    {
      id: "camera-camcorders",
      title: "Camera & Camcorders",
    },
    {
      id: "car-electronics",
      title: "Car Electronics & Gps",
    },
    {
      id: "cellphones",
      title: "Cell Phones",
    },
    {
      id: "computers",
      title: "Computers & Tablets",
    },
    {
      id: "health-fitness-beauty",
      title: "Health, Fitness & Beauty",
    },
    {
      id: "office-school",
      title: "Office & School Supplies",
    },
    {
      id: "tv-home-theater",
      title: "TV & Home Theater",
    },
    {
      id: "video-games",
      title: "Video Games",
    },
  ];

  const brands = [
    {
      title: "Insignia™",
      total: 746,
    },
    {
      title: "Samsung",
      total: 633,
      checked: true,
    },
    {
      title: "Metra",
      total: 591,
    },
    {
      title: "HP",
      total: 530,
    },
    {
      title: "Apple",
      total: 422,
      checked: true,
    },
    {
      title: "GE",
      total: 394,
    },
    {
      title: "Sony",
      total: 350,
    },
    {
      title: "Incipio",
      total: 320,
    },
    {
      title: "KitchenAid",
      total: 318,
    },
    {
      title: "Whirlpool",
      total: 298,
    },
  ];

  const ratings = [
    {
      ratings: 4,
      total: 160,
    },
    {
      ratings: 3,
      total: 176,
    },
    {
      ratings: 2,
      total: 291,
    },
    {
      ratings: 1,
      total: 190,
    },
  ];
  return (
    <div className={`sidebar-detached ${show? 'active': ''}` }>
      <div className="sidebar shop-sidebar">
        <div >
          <Row>
            <Col sm="12">
              <h6 className=" d-none d-lg-block">Filters</h6>
            </Col>
          </Row>
          <Row>
            <Card>
              <CardBody>
                <div className="multi-range-price">
                  <h6 onClick={onClose} className="filter-title mt-0">Multi Range</h6>
                  <ul className="list-unstyled price-range">
                    <li>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="all"
                          name="price-range-radio"
                          defaultChecked
                        />
                        <Label className="form-check-label" for="all">
                          All
                        </Label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="10-dollars-below"
                          name="price-range-radio"
                        />
                        <Label
                          className="form-check-label"
                          for="10-dollars-below"
                        >{`<=$10`}</Label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="10-100-dollars"
                          name="price-range-radio"
                        />
                        <Label
                          className="form-check-label"
                          for="10-100-dollars"
                        >
                          $10-$100
                        </Label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="100-500-dollars"
                          name="price-range-radio"
                        />
                        <Label
                          className="form-check-label"
                          for="100-500-dollars"
                        >
                          $100-$500
                        </Label>
                      </div>
                    </li>
                    <li>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="500-dollars-above"
                          name="price-range-radio"
                        />
                        <Label
                          className="form-check-label"
                          for="500-dollars-above"
                        >{`>=$500`}</Label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="product-categories">
                  <h6 className="filter-title">Categories</h6>
                  <ul className="list-unstyled categories-list">
                    {categories.map((category) => {
                      return (
                        <li key={category.id}>
                          <div className="form-check">
                            <Input
                              type="radio"
                              id={category.id}
                              name="category-radio"
                              defaultChecked={category.defaultChecked}
                            />
                            <Label
                              className="form-check-label"
                              for={category.id}
                            >
                              {category.title}
                            </Label>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="brands">
                  <h6 className="filter-title">Brands</h6>
                  <ul className="list-unstyled brand-list">
                    {brands.map((brand) => {
                      return (
                        <li key={brand.title}>
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              id={brand.title}
                              defaultChecked={brand.checked}
                            />
                            <Label
                              className="form-check-label"
                              for={brand.title}
                            >
                              {brand.title}
                            </Label>
                          </div>
                          <span>{brand.total}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div id="ratings">
                  <h6 className="filter-title">Ratings</h6>
                  {ratings.map((item) => {
                    return (
                      <div key={item.total} className="ratings-list">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          <ul className="unstyled-list list-inline">
                            {new Array(5).fill().map((listItem, index) => {
                              return (
                                <li
                                  key={index}
                                  className="ratings-list-item me-25"
                                >
                                  <Star
                                    className={classnames({
                                      "filled-star": index + 1 <= item.ratings,
                                      "unfilled-star": index + 1 > item.ratings,
                                    })}
                                  />
                                </li>
                              );
                            })}
                            <li>& up</li>
                          </ul>
                        </a>
                        <div className="stars-received">{item.total}</div>
                      </div>
                    );
                  })}
                </div>
                <div id="clear-filters">
                  <Button color="primary" block>
                    Clear All Filters
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default ProductSidebar;
