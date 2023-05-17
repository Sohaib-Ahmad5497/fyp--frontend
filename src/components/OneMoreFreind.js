import React from 'react'
import "../styles/oneMore.css"
import oneMore_img from "../images/oneMore_img.png"
import { useNavigate } from 'react-router-dom'
function OneMoreFreind() {
  const navigate = useNavigate();
  const exploreNowHandler = () => {
    navigate('/pet-shop')
  }
  return (
    <>
      <div className='wrapper_one_more_friend'>
        <div className='one_more_friend'>
          <div className='left'>
            <img src={oneMore_img} alt="banner" />
          </div>
          <div className='right'>
            <div className='one_more'>
              <div className='p1'><p>One More Friend</p></div>
              <div className='p2'><p>Thousands More Fun!</p></div>
              <div className='p3'><p>Having a pet means you have more joy, a new friend, a happy person<br />
                who will always be with you have fun. We have 200+ diffrents pets<br />
                that can meet your needs</p></div>
            </div>
            <div className='button_section'>
              <div className='btn1'>
                <button>View Intro</button>
              </div>
              <div className='btn2'>
                <button onClick={exploreNowHandler}>Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OneMoreFreind