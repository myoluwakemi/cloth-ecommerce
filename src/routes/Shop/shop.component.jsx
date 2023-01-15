import { Fragment, useState } from "react";
import { useContext } from "react";
import { SeachProductContext } from "../../contexts/search-context";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";
import ProductSearchbar from "./ProductSearchbar";
import ProductHeader from "./ProductsHeader";
import ProductSidebar from "./ProductSidebar";

import "./shop.styles.scss";
import Pagination from "../../components/Pagination";

const Shop = () => {
  const { product } = useContext(ProductContext);
  const { query, searchHandler } = useContext(SeachProductContext);

  const [activeView, setActiveView] = useState("grid");
  const [toggle, setToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  let filteredProducts;
  if (product) {
    filteredProducts = product.filter((item) => {
      if (item.name.toLowerCase().includes(query.toLocaleLowerCase())) {
        return product;
      }
      return null;
    });
  }
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filteredProducts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleToggle = () => setToggle((prevState) => !prevState);
  return (
    <>
      <div className="product-content">
        <ProductSidebar show={toggle} onClose={handleToggle} />
        <div style={{ width: "100%" }}>
          <ProductHeader
            activeView={activeView}
            setActiveView={setActiveView}
            productTotal={filteredProducts.length}
            setSidebarOpen={handleToggle}
          />
          <ProductSearchbar onSearch={(e) => searchHandler(e.target.value)} />
          <Fragment>
            {filteredProducts.length > 0 ? (
              <ProductCard
                activeView={activeView}
                products={currentPosts}
              ></ProductCard>
            ) : (
              <div className="grid-view empty-product-state">
                No result found
              </div>
            )}
            <Pagination
              postsPerPage={postPerPage}
              totalPosts={filteredProducts.length}
              paginate={paginate}
            />
          </Fragment>
        </div>
      </div>
    </>
  );
};
export default Shop;
