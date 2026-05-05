import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from "./Carts";
export function Header(props){
    const [openCart, setOpenCart] = useState()

    const showNothing = () => {
        return( <div className='empty'>
            <h2>Товарів немає</h2>
        </div>
        )
    }

    const showItems = (items) => {
        console.log(items)
        return(
            <div>
                {items.map(el => (
                    <Cart item={el} onDelete={(id) => {
                        const basket = props.cartItem.filter(el => el.id !== id)
                        props.setCartItem(basket)
                    }} />
                ))}
            </div>
        )
    }

    return(
        <div>

        <div id="Header">
            <h3 className="hh3">
                House Staff
            </h3>

            <ul className="lu">
            <FaShoppingCart onClick={() => setOpenCart(state => !state) } />
            {openCart && (
                <div className="shop-cart">
                    {props.cartItem.length > 0 ?
                    showItems(props.cartItem) : showNothing() }
                </div>
            )}
                <li className="listHeaders">Про нас</li>
                <li className="listHeaders">Контакты</li>
                <li className="listHeaders">Кабинет</li>
            </ul>

            
            
        </div>

        <div id="banner">
            
        </div>

        </div>
    )
}