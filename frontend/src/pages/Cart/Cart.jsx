import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cartitems'>
        <div className="format-main">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((e,index)=>{
            if(cartItems[e._id]>0){
                return ( 
                    <div key={index}>
                        <div className="format format-main">
                            <img className='carticon-product-icon' src={url+"/images/"+e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.price}</p>
                            <button className='quantity'>{cartItems[e._id]}</button>
                            <p>${e.price * cartItems[e._id]}</p>
                            <img className='remove-icon' onClick={()=>{removeFromCart(e._id)}} src={assets.remove_icon_red} alt="" />
                        </div>
                        <hr />
                    </div>)
            }
            return null;
        })}
        <div className="down">
            <div className="total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="total-item">
                        <p>Sub Total</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <p>Delivery Fee</p>
                        <p>${getTotalAmount()===0?0:2}</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <h3>Total</h3>
                        <h3>${getTotalAmount()===0?0:getTotalAmount()+2}</h3>
                    </div>
                </div>
                <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="promobox">
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    
    </div>
    </div>
  )
}

export default Cart
