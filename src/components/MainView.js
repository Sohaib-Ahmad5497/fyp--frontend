import React from 'react'
import main_img from '../images/main-img.png'
import '../styles/mainview.css'
import { useNavigate } from 'react-router-dom'

function MainView() {

    const navigate = useNavigate();
    const exploreNowHandler = () => {
        navigate('/pet-shop')
    }
    return (
        <>
            <div className='main-view'>
                <div className='one-more-friend'>
                    <div className='heading'>
                        <h1>One More Friend</h1>
                        <h2>Thousands More Fun!</h2>
                    </div>
                    <div className='desc'>
                        <p>
                            Having a pet mean you have more joy, a new friend, a happy<br />
                            person who always will always be with you to have fun. We have 200+<br />
                            diffrent pets that can meet your needs.<br />
                        </p>
                    </div>
                    <div className='buttons'>
                        <div className='view-intro'>
                            <button>View intro</button>
                        </div>
                        <div className='explore-now'>
                            <button onClick={exploreNowHandler}>Explore Now</button>
                        </div>
                    </div>
                </div>
                <div className='image'>
                    <img src={main_img} alt='main' />
                </div>
            </div>
        </>
    )
}

export default MainView