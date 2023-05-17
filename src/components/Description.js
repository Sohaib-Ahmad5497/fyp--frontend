import { React, useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/discription.css"
import img_1 from "../images/img-1.jpg";
import img_2 from "../images/img-2.jpg";
import img_3 from "../images/img-2.jpg";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function Description() {

  const { id } = useParams();

  console.log(` id of selected card id here======== ${id}`);

  const navigate = useNavigate();
  const addToCartHandler = async () => {
    navigate("/add-to-cart");

    try {
      const response = await fetch("http://localhost:3001/api/cart/addCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickName: singlePetData.nickName,
          petType: singlePetData.petType,
          price: singlePetData.price,
          age: singlePetData.age,
        })
      });
    
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
      const data = await response.json();
      console.log('Cart data:', data);
    
    } catch (error) {
      console.error('There was a problem with the network request:', error);
    }
    
  }


  const [singlePetData, setSinglePetData] = useState([]);

  async function fetchData() {
    const response = await fetch(`http://localhost:3001/api/pet/getSinglePet/${id}`);
    await response.json().then((data) => {
      setSinglePetData(data)
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(`id :: ${id}`);

  console.log(`here is pet data >>>---->>>> ${JSON.stringify(singlePetData.nickName)}`);

  return (
    <>
      <div className='description-wrapper'>
        <div className='image_description'>
          <div className='image_slider'>
            <div className="carousel-wrapper">
              <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div className='slider_img'>
                  <img src={img_1} />
                </div>
                <div className='slider_img'>
                  <img src={img_2} />
                </div>
                <div className='slider_img'>
                  <img src={img_3} />
                </div>
              </Carousel>
            </div>
          </div>
          <div className='description'>
            <div className='detail'>
              <div className='left_question'>
                <p>Nick Name</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.nickName}</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Gendar</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.gender}</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Age</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.age} months</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Color</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.color}</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Bread</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.petType}</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Pet Group</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.group}</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Training Lavel</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.training}</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Grooming Lavel</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.grooming}</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Energy Lavel</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.energy}</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Price</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.price} Rs</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Address</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.address}</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>Phone No</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.phoneNo}</p>
              </div>
            </div>
            <hr />
            <div className='detail'>
              <div className='left_question'>
                <p>More About Pet</p>
              </div>
              <div className='right_answer'>
                <p>: {singlePetData.remarks}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className='add-cart-check-out-btn'>
          <div className='cart'>
            <button onClick={addToCartHandler}>Add To Cart</button>
          </div>
          <div className='check'>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Description