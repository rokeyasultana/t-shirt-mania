import React from 'react';
import './TShirt.css'

const tShirt = ({tShirt,handelAddToCart}) => {


    const {picture, name, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt=""></img>
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button 
            onClick={()=>handelAddToCart(tShirt)}>
                
                Buy this</button>

        </div>
    );
};

export default tShirt;