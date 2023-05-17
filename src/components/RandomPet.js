import React from 'react'
import "../styles/random_pet.css"
    import petCard from "../images/pet_card.jpg"
import { useNavigate } from 'react-router-dom';

const pets_data = [
    {
        id: 1,
        image: petCard,
        bread: "Parrot",
        pet_name: "Phlupphy camen",
        gendar: "Male",
        age: "11",
        price: "10,000"
    },
    {
        id: 2,
        image: petCard,
        bread: "Parrot",
        pet_name: "pinky camen",
        gendar: "Female",
        age: "15",
        price: "30,000"
    },
    {
        id: 3,
        image: petCard,
        bread: "Parrot",
        pet_name: "pinky camen",
        gendar: "Female",
        age: "14",
        price: "24,000"
    },
    {
        id: 4,
        image: petCard,
        bread: "Parrot",
        pet_name: "pinky camen",
        gendar: "Female",
        age: "14",
        price: "24,000"
    },
    {
        id: 5,
        image: petCard,
        bread: "Parrot",
        pet_name: "pinky camen",
        gendar: "Female",
        age: "14",
        price: "24,000"
    },
    {
        id: 7,
        image: petCard,
        bread: "cat",
        pet_name: "pinky camen",
        gendar: "Female",
        age: "14",
        price: "24,000"
    },
    {
        id: 7,
        image: petCard,
        bread: "cat",
        pet_name: "pinky camen",
        gendar: "Female",
        age: "14",
        price: "24,000"
    },
    {
        id: 7,
        image: petCard,
        bread: "cat",
        pet_name: "pinky camen",
        gendar: "Female",
        age: "14",
        price: "24,000"
    },
];

function RandomPet() {
    const navigate = useNavigate();
    const viewMoreHandler = () => {
        navigate('/pet-shop')
    }
    return (


        <>
            <div className='random_pet_wrapper'>
                <div className='what_news'>
                    <div className='left'>
                        <div className='p_whats_new'>
                            <p>Whats new?</p>
                        </div>
                        <div className='p_take_a_look'>
                            <p>
                                Take A Look At Some Of Fantastic Pet
                            </p>
                        </div>
                    </div>
                    <div className='right'>
                        <button onClick={viewMoreHandler}>View more</button>
                    </div>
                </div>

                <div className='pet_list' >
                    {pets_data.map((pets_data) => {
                        return (
                            <div className='card' key={pets_data.id}>
                                <div className='card_image'>
                                    <img src={pets_data.image} alt="parrot" />
                                </div>
                                <div className='pet_name'>
                                    <div className='bread'>{pets_data.bread}</div>
                                    <div className='slash'>-</div>
                                    <div className='name'>{pets_data.pet_name}</div>
                                </div>
                                <div className='pet_disc'>
                                    <div className='gendar'>Gen :<span className='bold'>{pets_data.gendar}</span> </div>
                                    <div className='dot'>.</div>
                                    <div className='age'>Age :<span className='bold'>{pets_data.age} Months</span></div>
                                </div>
                                <div className='price'>{pets_data.price} Rupees</div>
                            </div>

                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default RandomPet