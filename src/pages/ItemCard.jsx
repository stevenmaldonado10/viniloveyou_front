import React from 'react'
import boostrap from 'bootstrap'
import {useCart} from 'react-use-cart'

function ItemCard (props) {
    const {addItem} = useCart();
    
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        
            <div className="card p-0 overflow-hidden h-100 shadow">
            <img src={props.image} className="card-img-top img-fluid" />
            <div className='card-body'>
                 <h5 className="card-title">{props.album}</h5>
                        <p className="card-text">{props.artist}</p>
                        <p className="card-text">Genre: {props.genre}</p>
                        <p className="card-text">$ {props.price}</p>
                            <button onClick={()=>addItem(props.item)} className="btn btn-primary">Add to cart</button>
            </div>                
    </div>
  </div>
  )
}

export default ItemCard