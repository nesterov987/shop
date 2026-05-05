import { useState } from 'react';
import './App.css';
import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { Items } from './components/Items';
import { Footer } from './components/Footer';

function App() {
  const [chooseCategory,setChooseCategory] = useState("all")
  const [cartItem, setCartItem] = useState([])
  const [state, set_state] = useState({ 
    item : [
    {
      id: 0,
      title: 'Сірий стілець',
      img: './images/grey-chair.jpg',
      desc: 'Зручний та стильний стілець, який неодмінно прикрашить ваш дім',
      category: 'chairs',
      price: '79.99',
      amount: 1
    },
    {
      id: 1,
      title: 'Письмовий стіл',
      img: './images/desk.webp',
      desc: 'Комфортний письмовий стіл, який неодмінно прикрашить ваш дім',
      category: 'desk',
      price: '99.99',
      amount: 1
    },
    {
      id: 2,
      title: 'Ліжко',
      img: './images/bed.jpg',
      desc: 'Велике та комфортне ліжко, яке неодмінно прикрашить ваш дім',
      category: 'bed',
      price: '249.99',
      amount: 1
    },
    {
      id: 3,
      title: 'Вішалки для одягу',
      img: './images/сlothes-hangers.jpg',
      desc: 'Практична вішалка для одягу, яка неодмінно прикрашить ваш дім',
      category: 'for-clothes',
      price: '49.99',
      amount: 1
    },
    {
      id: 4,
      title: 'Настінні полиці',
      img: './images/wall-shelves.jpg',
      desc: 'Практична настінна полиця, яка неодмінно прикрашить ваш дім',
      category: 'shelves',
      price: '99.99',
      amount: 1
    },
    {
      id: 5,
      title: 'Гардеробні для одягу',
      img: './images/wardrobes.jpg',
      desc: 'Великі гардеробні для одягу, які неодмінно прикрашить ваш дім',
      category: 'for-clothes',
      price: '149.99',
      amount: 1
    },
  ]})
  function filterItem(){
    if(chooseCategory==="all"){
      return state.item
    }
    else{
      return state.item.filter(elem => elem.category === chooseCategory)
    }
  }
  console.log(cartItem)
  return (
    <div className="App">
        <Header setCartItem={setCartItem} cartItem={cartItem} />
        <Categories chooseCategory={setChooseCategory}/>
        <Items setCartItem={setCartItem} Items={filterItem()} />
        <Footer/>
    </div>
  );
}

export default App;
