import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered rounded-full"
        />
        <button
          type="submit"
          className="btn btn-circle bg-amber-400 text-black"
        >
          <FaSearch className='w-6 h-6 outline-none'/>
        </button>
      </form>
    </div>
  );
}

export default SearchInput





// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//     <div>
//       <form className="flex items-center gap-2">
//         <input
//           type="text"
//           placeholder="Search"
//           className="input input-bordered rounded-full"
//         />
//         <button
//           type="submit"
//           className="btn btn-circle bg-amber-400 text-black"
//         >
//           <FaSearch className='w-6 h-6 outline-none'/>
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SearchInput

