import { Fragment, useContext } from "react"
import BreadCrumbs from "../../components/breadcrumbs"
import ProductCard from "../../components/product-card/product-card.component"
import { ProductContext } from "../../contexts/product.context"
import ProductHeader from "./ProductsHeader"

import "./shop.styles.scss"

const Shop = () => {
    const {product} = useContext(ProductContext)
    return (
        <Fragment>
            
            <BreadCrumbs breadCrumbTitle='Shop' breadCrumbParent='eCommerce' breadCrumbActive='Shop' />
        </Fragment>
        // <div className="products-container">
        //     <ProductHeader/>
        //    {product.map((product)=>(
        //    <ProductCard key={product.id} product={product}></ProductCard>
        //    ))}
        // </div>
    )
}
export default Shop