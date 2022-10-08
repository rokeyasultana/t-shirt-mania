import React, { useState }  from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {

const tShirts = useLoaderData();

const [cart, setCart] = useState([])

const handelAddToCart = tShirt =>{

  const newCart = [...cart, tShirt];
  setCart(newCart);

}

    return (
        <div className='home-container'>


          <div className="t-shirt-container">
          {
        tShirts.map(tShirt =><TShirt
        
          key={tShirt.id}
          tShirt={tShirt}

          handelAddToCart={handelAddToCart}
        
        ></TShirt>)
       }
    

          </div>
      

      <div className='cart-container'>
        <Cart cart={cart}></Cart>

      </div>

        </div>
    );
};

export default Home;