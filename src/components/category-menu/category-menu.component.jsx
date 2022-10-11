import "./category-menu.component.scss";
import CategoryItem from "../category/category-item.component";

const CategoryMenu = ({ directory }) => (
  <div className="categories-container">
    {directory.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);
export default CategoryMenu;

