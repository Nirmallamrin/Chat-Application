import React from 'react'

const GenderCheckBox = ({ onCheckBoChange, selectedGender }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="form-control ">
        <label
          className={`label cursor-pointer space-x-1 ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-warning"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoChange("male")}
          />
          <span className="label-text text-black font-bold">male</span>
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label cursor-pointer space-x-1 ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-warning"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoChange("female")}
          />
          <span className="label-text text-black font-bold">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox



// Starter Code

// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className="flex items-center justify-center space-x-2">
//       <div className="form-control ">
//         <label className="label cursor-pointer space-x-1">
//           <input
//             type="checkbox"
//             defaultChecked
//             className="checkbox checkbox-warning"
//           />
//           <span className="label-text text-black font-bold">male</span>
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="label cursor-pointer space-x-1">
//           <input
//             type="checkbox"
//             defaultChecked
//             className="checkbox checkbox-warning"
//           />
//           <span className="label-text text-black font-bold">Female</span>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default GenderCheckBox