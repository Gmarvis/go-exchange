import React, { useState } from "react";
import "./popUp.css";

export const PopUp = (props) => {
  // const [trigger, SetTrigger]= useState(false)

  return props.trigger && (
    <div className="popup">
      <div className="popopContainer">
        <button className="closeBtn" onClick={()=> props.setTrigger(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>);
};

// const [user, setUser] = useState({
//   name: "",
// });

// // handle change
// const handleChange = (event)=>{
//   const {name, value} = event.target;
//   setUser({name, value})
// }

// const handleSubmit= (event) => {
//   event.prevent.Default()
//   localStorage.setItem('user', user)
// }

// <div>
//   <div>
//     <form action="submit" onSubmit={handleSubmit}>
//       <h1>Enter Name</h1>
//       <input
//         type="text"
//         name="name"
//         id="name"
//         required
//         value={user.name}
//         placeholder="name"
//         onChange={handleChange}
//       />
//       <button>Start</button>
//     </form>
//   </div>
// </div>
