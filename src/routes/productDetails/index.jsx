import { useParams } from "react-router-dom"
import { useContext } from "react";

import { ProductContext } from "../../contexts/product.context";

const ProductDetails = () => {
   const {product} = useContext(ProductContext)
   const {id} = useParams();
   const det = product.findIndex((prod)=> {
      return +prod.id == +id
   })
   const productt = product[det]
   console.log(id, det, productt)

    return <div>
      <h3>{productt.name}</h3>
    </div>
}
export default ProductDetails;