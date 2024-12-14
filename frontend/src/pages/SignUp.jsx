import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const SignUp = () => {
   
  const { setAuthUser} = useAuthContext();

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    if (
      !inputs.fullName ||
      !inputs.username ||
      !inputs.password ||
      !inputs.confirmPassword ||
      !inputs.gender
    ) {
      toast.error("Please fill all the details");
      return;
    }

    if (inputs.password !== inputs.confirmPassword) {
      toast.error("Password doesn't match confirm password");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/users/signup",
        inputs
      );

      const userData = res.data; // Extract user data from the response
      toast.success("Registration Successful");

      localStorage.setItem("chat-user", JSON.stringify(userData));
      setAuthUser(userData);
    } catch (error) {
     if (error.response && error.response.status === 400) {
       toast.error(error.response.data.message || "Username already exists");
     } else {
       toast.error("Something went wrong, please try again");
     }
    }
  };

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-4 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="flex items-center justify-center mb-8">
          <span className="text-5xl font-serif font-extrabold text-amber-400">
            ME CHAT
          </span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="w-full flex items-center justify-center">
            <input
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              type="text"
              placeholder="Enter your FullName"
              className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              type="text"
              placeholder="Enter your Username"
              className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="w-full flex items-center justify-center">
            <input
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
              placeholder="Enter your Password"
              className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              type="password"
              placeholder="Confirm your Password"
              className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
            />
          </div>
          <GenderCheckBox
            onCheckBoChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <button className="btn btn-warning bg-black text-white">
            Sign Up
          </button>
          <Link
            to="/login"
            className="text-black underline hover:text-amber-350"
          >
            Already an Account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

//Starter Code

// import React from 'react'
// import GenderCheckBox from './GenderCheckBox';

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="p-4 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
//         <h1 className="flex items-center justify-center mb-8">
//           <span className="text-5xl font-serif font-extrabold text-amber-400">
//             ME CHAT
//           </span>
//         </h1>
//         <form className="flex flex-col items-center justify-center space-y-4">
//           <div className="w-full flex items-center justify-center">
//             <input
//               type="text"
//               placeholder="Enter your Firstname"
//               className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div className="w-full flex items-center justify-center">
//             <input
//               type="text"
//               placeholder="Enter your Username"
//               className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
//             />
//           </div>

//           <div className="w-full flex items-center justify-center">
//             <input
//               type="text"
//               placeholder="Enter your Password"
//               className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div className="w-full flex items-center justify-center">
//             <input
//               type="text"
//               placeholder="Confirm your Password"
//               className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <GenderCheckBox />
//           <button className="btn btn-warning bg-black text-white">Sign Up</button>
//           <a className="text-black underline hover:text-amber-350" href="">
//             Already an Account
//           </a>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp
