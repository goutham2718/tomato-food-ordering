import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { useState } from 'react'
import axios from 'axios'

const PlaceOrder = () => {

  const {getTotalAmount,token,food_list,cartItems,url} = useContext(StoreContext);
  const navigate = useNavigate()

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (e)=>{
    setData(data=>({...data,[e.target.name]:e.target.value}))
  }

  const placeOrder = async(e)=>{
    e.preventDefault();
    const orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalAmount()+2
    }


    let response = await axios.post(url+'/api/order/place',orderData,{headers:{token}})
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url)
    }else{
      alert("Error")
    }
  }

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }else if(getTotalAmount() === 0){
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order' action="">
      <div className='place-order-left'>
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name'/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code'/>
          <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
      </div>
      <div className='place-order-right'>
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
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
