import { useContext } from "react"
import ProductCard from "../../components/product-card/product-card.component"
import { ProductContext } from "../../contexts/product.context"

import "./shop.styles.scss"

const Shop = () => {
    const {product} = useContext(ProductContext)
    return (
        <div className="products-container">
           {product.map((product)=>(
           <ProductCard key={product.id} product={product}></ProductCard>
           ))}
        </div>
    )
}
export default Shop