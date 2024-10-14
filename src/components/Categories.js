import { useState } from 'react';
export function Categories(props){
    const [state] = useState({categories : [
        {
        key: 'all',
        name: 'Все'
        },
        {
        key: 'chairs',
        name: 'Стільці'
        },
        {
        key: 'desk',
        name: 'Столи'
        },
        {
        key: 'bed',
        name: 'Ліжка'
        },
        {
        key: 'shelves',
        name: 'Полиці'
        },
        {
        key: 'for-clothes',
        name: 'Для одягу'
        }
    ]})
    return (
        <div className='categories'>
            {state.categories.map(element => (
                <div key={element.key} onClick={() => props.chooseCategory(element.key) }>
                    {element.name}
                </div>
            ))}
        </div>
    )
}