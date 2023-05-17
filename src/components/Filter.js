// import { React, useReducer, useEffect, useState } from 'react'
// import "../styles/filter.css"

// const initialState = {
//   isMaleSelected: false,
//   isFemaleSelected: false,
//   isParrotSelected: false,
//   isCatSelected: false,
//   isDogSelected: false
// }
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_MALE_SELECTED":
//       return {
//         ...state,
//         isMaleSelected: true,
//         isFemaleSelected: false
//       }
//       break;
//     case "SET_FEMALE_SELECTED":
//       return {
//         ...state,
//         isFemaleSelected: true,
//         isMaleSelected: false
//       }
//       break;
//     case "SET_PARROT_SELECTED":
//       return {
//         ...state,
//         isParrotSelected: true,
//         isDogSelected: false,
//         isCatSelected: false
//       }
//       break;
//     case "SET_CAT_SELECTED":
//       return {
//         ...state,
//         isParrotSelected: false,
//         isDogSelected: false,
//         isCatSelected: true
//       }
//       break;
//     case "SET_DOG_SELECTED":
//       return {
//         ...state,
//         isParrotSelected: false,
//         isDogSelected: true,
//         isCatSelected: false
//       }
//       break;
//     default:
//       break;
//   }
// }

// function Filter() {
//   const [pets, setPets] = useState([]);
 
//   useEffect(() => {
//     fetch("http://localhost:3001/api/pet/getPet")
//       .then((res) => res.json())
//       .then((data) => {
//         setPets(data);
//        })
//       .catch((err) => console.log("Error in filter API", err));
//     setPets(pets);
//   }, []);
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleInputChange = (event) => {

//     const { name, checked } = event.target;
//     dispatch({ type: `SET_${name.toUpperCase()}_SELECTED`, payload: checked });

//   }




//   return (
//     <>
//       <div className='wrapper_filter'>
//         <div className='p_filter'><p>Filter</p></div>
//         <div className='gender'>
//           <div className='p_gendar'><p>Gendar</p></div>
//           <div className='male'>
//             <div className='male_checkbox'>
//               <input
//                 type="checkbox"
//                 name='male'
//                 checked={state.isMaleSelected}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className='p_male'><p>Male</p></div>
//           </div>
//           <div className='female'>
//             <div className='female_checkbox'>
//               <input
//                 type="checkbox"
//                 name='female'
//                 checked={state.isFemaleSelected}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className='p_female'><p>Female</p></div>
//           </div>
//           <hr />
//         </div>
//         <div className='p_price'><p>Price</p></div>
//         <div className='price'>
//           <div className='min_max'>
//             <div className='min'>
//               <input placeholder='Min' type="number" name="" />
//             </div>
//             <div className='max'>
//               <input placeholder='Max' type="number" name="" />
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div className='p_bread'><p>Bread</p></div>
//         <div className='bread'>
//           <div className='parrot'>
//             <div className='parrot_checkbox'>
//               <input
//                 type="checkbox"
//                 name='parrot'
//                 checked={state.isParrotSelected}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className='p_parrot'><p>Parrot</p></div>
//           </div>
//           <div className='cat'>
//             <div className='cat_checkbox'>
//               <input
//                 type="checkbox"
//                 name='cat'
//                 checked={state.isCatSelected}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className='p_cat'><p>Cat</p></div>
//           </div>
//           <div className='dog'>
//             <div className='dog_checkbox'>
//               <input
//                 type="checkbox"
//                 name='dog'
//                 checked={state.isDogSelected}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className='p_dog'><p>Dog</p></div>
//           </div>

//         </div>
//         <hr />
//       </div>
//     </>
//   )
// }

// export default Filter