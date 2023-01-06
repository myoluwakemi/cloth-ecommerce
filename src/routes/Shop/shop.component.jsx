import { useState } from "react";
import { Fragment, useContext } from "react";
import { Sidebar } from "react-feather";
import BreadCrumbs from "../../components/breadcrumbs";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";
import ProductHeader from "./ProductsHeader";
import ProductSidebar from "./ProductSidebar";

import "./shop.styles.scss";

const Shop = () => {
  const { product } = useContext(ProductContext);
  const [ activeView, setActiveView ] = useState("grid");
  const [ toggle, setToggle]  = useState(false);
  const handleToggle = () => setToggle((prevState) => !prevState);
  return (
    // <Fragment>

    //     <BreadCrumbs breadCrumbTitle='Shop' breadCrumbParent='eCommerce' breadCrumbActive='Shop' />
    // </Fragment>
    <>
      <div className="product-content">
        <ProductSidebar show={toggle} onClose={handleToggle} />
        <div>
          <ProductHeader setSidebarOpen={handleToggle}  />
          <ProductCard activeView="grid" products={product}></ProductCard>
        </div>
      </div>
    </>
  );
};
export default Shop;
