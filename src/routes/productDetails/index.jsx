import { useParams } from "react-router-dom"
import { useContext } from "react";

import { ProductContext } from "../../contexts/product.context";

const ProductDetails = () => {
   const {product} = useContext(ProductContext)
   const {id} = useParams();
   const det = product.find((prod)=> {
      return prod.id = +id
   })
   console.log(id, det)

    return <div>
      edhgh
    </div>
}
export default ProductDetails;