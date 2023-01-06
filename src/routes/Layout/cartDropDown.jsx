import { Link } from "react-router-dom"
import { ShoppingCart } from "react-feather"
import { Badge, Dropdown, DropdownToggle } from "reactstrap"


const CartDropdown = () => {
    return(
        <Dropdown>
            <DropdownToggle className="nav-link position-relative">
                <ShoppingCart/>
                <Badge pill className="cart-counter">1</Badge>

            </DropdownToggle>
        </Dropdown>
    )
}
export default CartDropdown