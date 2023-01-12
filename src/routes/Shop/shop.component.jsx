import { useState } from "react";
import { useContext } from "react";
import { SeachProductContext } from "../../contexts/search-context";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";
import ProductSearchbar from "./ProductSearchbar";
import ProductHeader from "./ProductsHeader";
import ProductSidebar from "./ProductSidebar";

import "./shop.styles.scss";

const Shop = () => {
  const { product } = useContext(ProductContext);
  const {query, searchHandler} = useContext(SeachProductContext)
  const [ activeView, setActiveView ] = useState("grid");
  const [ toggle, setToggle]  = useState(false);

  const filterProduct = product.filter((item) => {
   return  item.name.toLowerCase().includes(query.toLocaleLowerCase())
  })
  const handleToggle = () => setToggle((prevState) => !prevState);
  return (
    <>
      <div className="product-content">
        <ProductSidebar show={toggle} onClose={handleToggle} />
        <div>
          <ProductHeader setSidebarOpen={handleToggle}  />
          <ProductSearchbar onSearch={(e)=>searchHandler(e.target.value) }/>
          <ProductCard activeView="grid" products={filterProduct}></ProductCard>
        </div>
      </div>
    </>
  );
};
export default Shop;
