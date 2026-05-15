import { useState, useRef, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from "./Carts";
export function Header(props){
    const [openCart, setOpenCart] = useState(false)
    const cartRef = useRef()
    const buttonRef = useRef()

    const showNothing = () => {
        return( <div className='empty'>
            <h2>Товарів немає</h2>
        </div>
        )
    }

    const hideBasket = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target) 
    && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setOpenCart(false)
    }
} 

    useEffect (() => {
        document.addEventListener("click", hideBasket)
    })

    const showItems = (items) => {
        console.log(items)
        return(
            <div className="cart-items">
                {items.map(el => (
                    <Cart item={el} key={el.id} onDelete={(id) => {
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
                <div ref={buttonRef}>
                    <FaShoppingCart onClick={() => setOpenCart(state => !state) } />
                </div>
            {openCart && (
                <div className="shop-cart" ref={cartRef}>
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