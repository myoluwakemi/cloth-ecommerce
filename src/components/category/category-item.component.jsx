import "./category-item.component.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl } = category;

  return (
    <div className="category-container">
      <div
        className="background-image "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
};
export default CategoryItem;
