import { React, useState, useEffect } from 'react'
import petCard from "../images/pet_card.jpg"
import "../styles/add_to_cart.css"
import { BsFillCartCheckFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

function AddToCart() {
  const [quantity, setQuantity] = useState(1);


  const [cartData, setCartData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3001/api/cart/getCart');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCartData(data.data);
    } catch (error) {
      console.error('There was a problem with the network request:', error);
    }
  }

  const totalAmount = cartData.reduce((acc, cart) => {
    return acc + (cart.price * 1);
  }, 0);

  // const deleteHandler = (id) => {
  //   console.log(`here is id .......-------..>>>> ${id}`)
  //   const updatedCart = cartData.filter((item) => item._id !== id);
  //   setCartData(updatedCart);
  // };

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/cart/deleteCart/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      const updatedCart = cartData.filter((item) => item._id !== id);
      setCartData(updatedCart);
    } catch (error) {
      console.error('There was a problem with the network request:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
      <div className='complete-cart-wrapper'>
        <div className='my-cart'>
          <p>My Cart</p>
          <BsFillCartCheckFill size={28} />
          <div className='cart-items-quantity'><p>{cartData.length}</p></div>
        </div>
        <hr />

        {cartData.map((cart) => {
          return (
            <>
              <div className='cart-above'>
                <div className=' add-to-cart-wrapper ' key={cart._id}>
                  <div className='left'>
                    <div className='image'>
                      <img src={petCard} />
                    </div>
                    <div className='detail'>
                      <div><span className='detail-heading'>NickName : </span> <span>{cart.nickName}</span></div>
                      <div><span className='detail-heading'>Bread :</span> <span>{cart.bread}</span></div>
                      <div><span className='detail-heading'>Age :</span> <span>{cart.age}</span> <span>Months</span></div>
                    </div>
                  </div>
                  {/* <div className='center'>
                    <div><button>-</button></div>
                    <div>{quantity}</div>
                    <div><button>+</button></div>
                  </div> */}
                  <div className='right'>
                    <div><p><span className='detail-heading'>Price :</span> {cart.price} Rs</p></div>
                  </div>
                  <div className='delete-icon' onClick={() => deleteHandler(cart._id)}>< AiFillDelete size={25} /></div>
                </div>
              </div>
            </>
          )
        })}
        <div className='check-out_total-amount'>
          <div className='total-amount detail-heading'>
            <span>Total Price : </span> <span>{totalAmount} Rs</span>
          </div>
          <div className='check-out'>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddToCart