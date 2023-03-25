import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useDispatch, useSelector} from "react-redux"
import { removeItem, resetCart } from '../../redux/cartReducer';

export default function Cart() {

  const dispatch = useDispatch()

  const products = useSelector(state=> state.cart.products)

  const totalPrice = ()=>{
    let total = 0
    products.forEach(item => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2)
  }
 
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item)=>(
        <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.slice(0,100)}</p>
                <div className="price"> ${item.price} <span style={{fontSize:"11px",marginInline:"1px",}}>X</span> {item.quantity} {item.quantity == 1 ? "Qty.":"Qts." }</div>
            </div>
            <DeleteOutlinedIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUB TOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  )
}
