import { useContext } from "react"
import {ReactComponent as ShoppingIcon} from "../../assests/shopping-bag.svg"
import { CartContext } from "../../contexts/cart.content"

import "./cart-icon.styles.scss"

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return(
        <div onClick={toggleCart} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>

        </div>
    )
}
export default CartIcon