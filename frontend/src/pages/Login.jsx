import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

      if (!inputs.username || !inputs.password) {
    toast.error("Please fill the all detils")
    return
  }

  try {
    const req = await axios.post("http://localhost:5000/users/login", inputs);
    toast.success("Login Successfully")
    console.log(req.data)
  } catch (error) {
    if (error.response && error.response.status ===400) {
      toast.error("invaid username and password");
    } else {

    }
  }
  }



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
              type="text"
              placeholder="Enter your Username"
              className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              type="text"
              placeholder="Enter your Password"
              className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <button className="btn btn-warning bg-black text-white">Login</button>
          <Link to="/signup" className="underline text-black">
            Don't have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;



//Starter Code

// import React from "react";

// const Login = () => {
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
//           <button className="btn btn-warning bg-black text-white">
//             Login
//           </button>
//           <a href="">Don't have an account?</a>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

