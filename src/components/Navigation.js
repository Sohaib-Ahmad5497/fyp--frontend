import React from 'react'
import pet_logo from '../images/pet_logo.svg'
import '../styles/navigation.css'
import { Link, useNavigate } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';


function Navigation({ setIsLoggedIn }) {

    const navigate = useNavigate();

    const logoutHandler = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        navigate('/login')
    }
    const logoHandler =(e)=> {
        e.preventDefault();
        navigate('/');
    }
    const cartHandler = (e) => {
        e.preventDefault();
         navigate("/add-to-cart");
    }
    return (
        <>
            <div className='nav-bar'>
                <div onClick={logoHandler} className='logo'>
                    <img src={pet_logo} alt='pet' />
                </div>
                <div className='nav-pages'>
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/pet-shop" >Buy Pets</Link></li>
                        <li><Link to="/seller" >Sell Pets</Link></li>
                        <li><Link to="/about-us" >About Us</Link></li>
                        {/* <li><Link to="/contact-us" >Contact Us</Link></li> */}
                     </ul>
                </div>
                <div className='join-community'>
                    <Link onClick={cartHandler}><BsFillCartCheckFill size={28} /></Link>
                    <Link onClick={logoutHandler}> Log Out</Link>
                </div>
            </div>
        </>
    )
}

export default Navigation
