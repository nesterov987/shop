export const Items=(props) => {
    
    return(
    <div className="main">
        {props.Items.map(elem=> (
            <div className='item'>
            <img src={elem.img} alt={elem.title}/>
            <h2>{elem.title}</h2>
            <p>{elem.desc}</p>
            <b>{elem.price}$</b>
            <div className='add-to-cart' onClick={() => props.setCartItem(elements => [...elements,elem])} >+</div>
        </div>
        ))}
    </div>
    )
}