import React from 'react'
import GenderCheckBox from './GenderCheckBox';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-4 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="flex items-center justify-center mb-8">
          <span className="text-5xl font-serif font-extrabold text-amber-400">
            ME CHAT
          </span>
        </h1>
        <form className="flex flex-col items-center justify-center space-y-4">
          <div className="w-full flex items-center justify-center">
            <input
              type="text"
              placeholder="Enter your Firstname"
              className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              type="text"
              placeholder="Enter your Username"
              className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="w-full flex items-center justify-center">
            <input
              type="text"
              placeholder="Enter your Password"
              className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              type="text"
              placeholder="Confirm your Password"
              className="bg-gray-700 text-white input input-bordered w-full max-w-xs"
            />
          </div>
          <GenderCheckBox />
          <button className="btn btn-warning bg-black text-white">Sign Up</button>
          <a className="text-black underline hover:text-amber-350" href="">
            Already an Account
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignUp


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

