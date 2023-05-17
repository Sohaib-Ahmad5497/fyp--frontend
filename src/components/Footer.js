import React from 'react'
import pet_logo from '../images/pet_logo.svg'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';
import '../styles/footer.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const logoHandler = (e) => {
        e.preventDefault();
        navigate('/');
    }
    return (
        <>
            <div className='footer'>
                <div className='blue_section'>
                    <div className='reg_now_txt'>
                        <p>Register Now So You Don't Miss <br /> Our Programs </p>
                    </div>
                    <div className='search_area'>
                        <div className='input'>
                            <input placeholder='Enter Your Email' />
                        </div>
                        <div className='footer_button'>
                            <butto>Subscribe Now</butto>
                        </div>
                    </div>
                </div>
                <div className='footer_bar'>
                    <div className='pages'>
                        <Link to="/">Home</Link>
                        <Link to="/pet-shop">Buy Pet</Link>
                        <Link to="/seller">Sell Pet</Link>
                        {/* <Link to="/contact-us">Contact Us</Link> */}
                        <Link to='/about-us' >About Us</Link>
                    </div>
                    <div className='social_media_icons'>
                        <Link to=""><BsFacebook size={30} /></Link>
                        <Link to=""><AiFillTwitterCircle size={30} /></Link>
                        <Link to=""><AiFillInstagram size={30} /></Link>
                        <Link to=""><ImYoutube size={30} /></Link>
                    </div >
                </div >
                <div className='hr'></div>
                <div className='footer_terms'>
                    <div className='left'>
                        <p>2023 Pet care. All rights reserved.</p>
                    </div>
                    <div onClick={logoHandler} className='s'>
                        <img src={pet_logo} alt='pet' />
                    </div>
                    <div className='right'>
                        <div className='terms'>
                            <Link to="\">Terms of Services</Link>
                        </div>
                        <div className='policy'>
                            <Link to="\">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Footer