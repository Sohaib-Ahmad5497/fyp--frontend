import { React, useReducer, useEffect, useState } from 'react'
import "../styles/pet_shop.css"
import { useNavigate } from 'react-router-dom';
import cardImage from "../images/cardImage.jpg"
 

const initialState = {
    isMaleSelected: false,
    isFemaleSelected: false,
    isParrotSelected: false,
    isCatSelected: false,
    isDogSelected: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_MALE_SELECTED":
            return {
                ...state,
                isMaleSelected: true,
                isFemaleSelected: false
            }
            break;
        case "SET_FEMALE_SELECTED":
            return {
                ...state,
                isFemaleSelected: true,
                isMaleSelected: false
            }
            break;
        case "SET_PARROT_SELECTED":
            return {
                ...state,
                isParrotSelected: true,
                isDogSelected: false,
                isCatSelected: false
            }
            break;
        case "SET_CAT_SELECTED":
            return {
                ...state,
                isParrotSelected: false,
                isDogSelected: false,
                isCatSelected: true
            }
            break;
        case "SET_DOG_SELECTED":
            return {
                ...state,
                isParrotSelected: false,
                isDogSelected: true,
                isCatSelected: false
            }
            break;
        default:
            break;
    }
}


function PetShop() {

    const [filterResult, setFilterResult] = useState([]);

    const [state, dispatch] = useReducer(reducer, initialState);
    const handleInputChange = (event) => {
        const { name, checked } = event.target;
        dispatch({ type: `SET_${name.toUpperCase()}_SELECTED`, payload: checked });
    }
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(20000);


    console.log("========minimum", minPrice);
    console.log("========maximum", maxPrice);

    const allDataHandler = () => {
        console.log("=======");
        console.log("Final Reslt for All orignal data Data======", originalData);
        setPetData(originalData);
    }



    const handleMinPriceChange = (event) => {
        console.log("pet data is here ", petData);
        const value = parseInt(event.target.value);
        setMinPrice(value);
        const filterResult = originalData.filter((curData) => curData.price >= value && curData.price <= maxPrice);
        console.log("Final Result for price range======", filterResult);
        if (filterResult !== []) {
            setPetData(filterResult);
        }
    };

    const handleMaxPriceChange = (event) => {
        const value = parseInt(event.target.value);
        setMaxPrice(value);
        const filterResult = originalData.filter((curData) => curData.price >= minPrice && curData.price <= value);
        console.log("Final Result for price range======", filterResult);
        if (filterResult !== []) {
            setPetData(filterResult);
        }
    };



    const petGenderHandler = (event) => {
        const { name } = event.target;

        const filterResult = originalData.filter((curData) => {
            return curData.gender === name;
        })
        console.log("Final Reslt for Genader======", filterResult);
        setPetData(filterResult);

    }
    const PetypeHandler = (event) => {

        const { name } = event.target;

        const filterResult = originalData.filter((curData) => {
            return curData.petType === name;
        })
        console.log("Find Reslt for petType======", filterResult);
        setPetData(filterResult);
    }
    const [originalData, setOriginalData] = useState([]);

    const [petData, setPetData] = useState([]);

    async function fetchData() {
        const response = await fetch('http://localhost:3001/api/pet/getPet');
        await response.json().then((data) => {
            setPetData(data.data);
            setOriginalData(data.data)
            console.log(data);
        });
    }
    useEffect(() => {
        fetchData();
    }, []);

    console.log(`========petdata========${petData}`);

    const navigate = useNavigate();
    
    const petDescHandler = (id) => {
        navigate(`description/${id}`);
        console.log(`here is id of clicked card -----${id}`);
     }

    return (
        <>

             <div className='wrapper_pet_list'>
                <div className='wrapper_filter'>
                    <div className='p_filter '><p>Filter</p></div>
                    <div className='p_all' onClick={allDataHandler}>
                        <p>All</p>
                        <hr />
                    </div>
                    <div className='gender'>
                        <div className='p_gendar'><p>Gendar</p></div>
                        <div className='male'>
                            <div className='male_checkbox'>
                                <input
                                    type="checkbox"
                                    name='male'
                                    checked={state.isMaleSelected}
                                    onChange={handleInputChange}
                                    onClick={petGenderHandler}

                                />
                            </div>
                            <div className='p_male'><p>Male</p></div>
                        </div>
                        <div className='female'>
                            <div className='female_checkbox'>
                                <input
                                    type="checkbox"
                                    name='female'
                                    checked={state.isFemaleSelected}
                                    onChange={handleInputChange}
                                    onClick={petGenderHandler}
                                />
                            </div>
                            <div className='p_female'><p>Female</p></div>
                        </div>
                        <hr />
                    </div>
                    <div className='p_price'><p>Price</p></div>
                    <div className='price'>
                        <div className='min_max'>
                            <div className='min'>
                                <input placeholder='Min' type="number" name="minPrice" value={minPrice} onChange={handleMinPriceChange} onClear={() => allDataHandler()} />
                            </div>
                            <div className='max'>
                                <input placeholder='Max' type="number" name="maxPrice" value={maxPrice} onChange={handleMaxPriceChange} onClear={() => allDataHandler()} />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='p_bread'><p>Bread</p></div>
                    <div className='bread'>
                        <div className='parrot'>
                            <div className='parrot_checkbox'>
                                <input
                                    type="checkbox"
                                    name='parrot'
                                    name1="parrot"
                                    checked={state.isParrotSelected}
                                    onChange={handleInputChange}
                                    onClick={PetypeHandler}
                                />
                            </div>
                            <div className='p_parrot'><p>Parrot</p></div>
                        </div>
                        <div className='cat'>
                            <div className='cat_checkbox'>
                                <input
                                    type="checkbox"
                                    name='cat'
                                    checked={state.isCatSelected}
                                    onChange={handleInputChange}
                                    onClick={PetypeHandler}
                                />
                            </div>
                            <div className='p_cat'><p>Cat</p></div>
                        </div>
                        <div className='dog'>
                            <div className='dog_checkbox'>
                                <input
                                    type="checkbox"
                                    name='dog'
                                    checked={state.isDogSelected}
                                    onChange={handleInputChange}
                                    onClick={PetypeHandler}
                                />
                            </div>
                            <div className='p_dog'><p>Dog</p></div>
                        </div>

                    </div>
                    <hr />
                </div>
                <div className='pet_list' >
                    {petData.map((petData) => {
                        return (
                            <div onClick={()=>{petDescHandler(petData._id)}} className='card' key={petData._id}>
                                <div className='card_image'>
                                    {/* <img src={petData.image} alt="parrot" /> */}
                                    <img src={cardImage} alt="parrot" /> 
                                </div>
                                <div className='pet_name'>
                                    <div className='bread'>{petData.petType}</div>
                                    <div className='slash'>-</div>
                                    <div className='name'>{petData.nickName}</div>
                                </div>
                                <div className='pet_disc'>
                                    <div className='gendar'>Gen :<span className='bold'>{petData.gendar}</span> </div>
                                    <div className='dot'>.</div>
                                    <div className='age'>Age :<span className='bold'>{petData.age} Months</span></div>
                                </div>
                                <div className='price'>{petData.price} Rupees</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PetShop