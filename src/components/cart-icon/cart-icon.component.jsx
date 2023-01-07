import { useContext } from "react"
import { ShoppingCart } from "react-feather"
import { Badge } from "reactstrap"
import { CartContext } from "../../contexts/cart.content"

import "./cart-icon.styles.scss"

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return(
        <div onClick={toggleCart} className="cart-icon-container">
            <ShoppingCart className="shopping-icon"/>
            <Badge pill className="item-count">{cartCount}</Badge>

        </div>
    )
}
export default CartIcon