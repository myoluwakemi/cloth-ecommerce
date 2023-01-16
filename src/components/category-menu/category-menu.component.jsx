import { useNavigate } from "react-router-dom";
import "./category-menu.component.scss";
import CategoryItem from "../category/category-item.component";
import { Button } from "reactstrap";

const CategoryMenu = ({ directory }) => {
  const naviagate = useNavigate()
  const gotoShop =()=> {
    naviagate('/shop')
  }
  return (
    <div className="categories-container">
      {directory.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
      <div className="banner">
        <div className="inner-banner">
          <h2>New Collections</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            suscip
          </p>
          <Button onClick={gotoShop} color="primary">Shop</Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
