import { React, useReducer, useState } from 'react'
import '../styles/seller.css'
const initialState = {
    nickName: "",
    petType: "",
    gender: "",
    price: "",
    color: "",
    age: "",
    group: "",
    training: "",
    energy: "",
    grooming: "",
    remarks: "",
    image: [],
    phoneNo: "",
    address: "",
};
function reducer(state, action) {
    switch (action.type) {
        case 'SET_NICKNAME':
            return { ...state, nickName: action.payload };
            break;
        case 'SET_PETTYPE':
            return { ...state, petType: action.payload }
            break;
        case 'SET_GENDER':
            return { ...state, gender: action.payload }
            break;
        case 'SET_PRICE':
            return { ...state, price: action.payload }
            break;
        case 'SET_COLOR':
            return { ...state, color: action.payload }
            break;
        case 'SET_AGE':
            return { ...state, age: action.payload }
            break;
        case 'SET_GROUP':
            return { ...state, group: action.payload }
            break;
        case 'SET_TRAINING':
            return { ...state, training: action.payload }
            break;
        case 'SET_ENERGY':
            return { ...state, energy: action.payload }
            break;
        case 'SET_GROOMING':
            return { ...state, grooming: action.payload }
            break;
        case 'SET_REMARKS':
            return { ...state, remarks: action.payload }
            break;
        case 'SET_IMAGE':
            return { ...state, image: action.payload }
            break;
        case 'SET_PHONENO':
            return { ...state, phoneNo: action.payload }
            break;
        case 'SET_ADDRESS':
            return { ...state, address: action.payload }
            break;

        default:
            break;
    }
};
function Seller() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = async (event) => {
        event.preventDefault();


        console.log("==state==", state);
        const { nickName, petType, gender, price, color, age, group, training, energy, grooming, remarks, image, phoneNo, address } = state;

        const formData = new FormData();
        formData.append("image", image);

        console.log("formData=============", formData);

        try {
            const response = await fetch("http://localhost:3001/api/pet/addImage", {
                method: "POST",
                body: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            const data = await response.json();
            console.log("data=========", data);
        } catch (error) {
            console.log("ERROR========", error);
        }

        const response = await fetch("http://localhost:3001/api/pet/addPet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nickName,
                petType,
                gender,
                price,
                color,
                age,
                group,
                training,
                energy,
                grooming,
                remarks,
                // image,
                phoneNo,
                address,
            })
        });
        // const formData = new FormData();
        // formData.append("nickName", nickName);
        // formData.append("petType", petType);
        // formData.append("gender", gender);
        // formData.append("price", price);
        // formData.append("color", color);
        // formData.append("age", age);
        // formData.append("group", group);
        // formData.append("training", training);
        // formData.append("energy", energy);
        // formData.append("grooming", grooming);
        // formData.append("remarks", remarks);
        // formData.append("image", image); // where imageFile is the file object of the image
        // formData.append("phoneNo", phoneNo);
        // formData.append("address", address);

        // const response = await fetch("http://localhost:3001/api/pet/addPet", {
        //     method: "POST",
        //     body: formData,
        // });
        
        const data = await response.json();
        console.log(`Form data here ===== ================= `);
        if (!data) {
            window.alert("Invalid Entry");
            console.log("Invalid Entry");
        } else {
            window.alert("Successfull Submission");
            console.log("Successfull Submission");
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (event.target.files) {
            dispatch({ type: `SET_${name.toUpperCase()}`, payload: event.target.files[0] });
            console.log("======event.target.files======", event.target.files[0]);
        } else {
            dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
        }

    };
    return (
        <>
            <form className='seller_wrapper' onSubmit={handleSubmit}>
                <div className='seller'>
                    <div className='heading'>
                        <h2>Information About Your Pet</h2>
                    </div>
                    <div className='wrapper'>
                        <div className='nick_name input_field'>
                            <input required name='nickName' placeholder='Enter Nick Name' value={state.nickName} onChange={handleInputChange} />
                        </div>
                        <div className='pet_type input_field'>
                            <select required name="petType" value={state.petType} onChange={handleInputChange}>
                                <option disabled selected>Select Pet Type: </option>
                                <option value="parrot">Parrot</option>
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                            </select>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='pet_gendar input_field'>
                            <select required name="gender" placeholder="Select Pet Gender" value={state.gender} onChange={handleInputChange}>
                                <option disabled selected>Select Pet Gender :</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className='pet_price input_field'>
                            <input required placeholder='Enter Price(pkr)' name='price' value={state.price} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='pet_color input_field'>
                            <input required placeholder='Enter  Color' name='color' value={state.color} onChange={handleInputChange} />
                        </div>
                        <div className='pet_age input_field'>
                            <input required type="number" id="points" name="age" min="0" max="10" placeholder='Enter Age' value={state.age}
                                onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='pet_group input_field'>
                            <select required name="group" value={state.group} onChange={handleInputChange}>
                                <option disabled selected>Pet Group:</option>
                                <option value="babby">Babby</option>
                                <option value="young">Young</option>
                                <option value="adult">Adult</option>
                                <option value="senior">Senior</option>
                            </select>
                        </div>
                        <div className='pet_training_lavel input_field'>
                            <select required name="training" value={state.training} onChange={handleInputChange}>
                                <option disabled selected>Training Lavel: </option>
                                <option value="well_trained">Well Trained</option>
                                <option value="basic_trained">Has Basic Training</option>
                                <option value="not_trained">Not Trained</option>
                            </select>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='pet_energy_lavel input_field'>
                            <select required name="energy" value={state.energy} onChange={handleInputChange}>
                                <option disabled selected>Select Pet Energy Lavel:</option>
                                <option value="low">Low </option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <div className='pet_grooming_lavel input_field'>
                            <select required name="grooming" value={state.grooming} onChange={handleInputChange}>
                                <option disabled selected>Select Gromming Lavel :</option>
                                <option value="low">Low </option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                                <option value="not required">Not Required</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className='detail_wrapper'>

                    <div className='heading'>
                        <h2>Pet Owner Details</h2>
                    </div>

                    <div className='phone_no detail_input'>
                        <input required type='number' id='phone_no' placeholder='Phone No E.G 03XXXXXXXXX' name="phoneNo" value={state.phoneNo} onChange={handleInputChange} />
                    </div>
                    <div className='address detail_input'>
                        <input required type='text' id='address' placeholder='Enter Your Adress' name="address" value={state.address} onChange={handleInputChange} />
                    </div>

                    <div className='heading'>
                        <h2>More About Your Pets</h2>
                    </div>
                    <div className='more_about_pets detail_input'>
                        <input required type="text" id="remarks" name="remarks" placeholder='More About Your Pet:' value={state.remarks} onChange={handleInputChange} />
                    </div>
                    <div>
                        <br /><span><b>Upload Image:</b></span>
                        <span>Minimum image size must be (600px x 600px)</span><br />
                    </div>
                    <div className='upload_image detail_input'>
                        <input required
                            type="file"
                            name="image"
                            onChange={handleInputChange} />
                    </div>
                    <div className='button'>
                        <input type='submit' />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Seller


