import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversation'
import LogoutBtn from './LogoutBtn'


const SideBar = () => {
  return (
    <div className='border border-black p-4 flex flex-col'>
          <SearchInput />
          <div className='divider px-3'></div>
          <Conversations />
          <LogoutBtn/>
    </div>
  )
}

export default SideBar;




// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversation'
// import LogoutBtn from './LogoutBtn'


// const SideBar = () => {
//   return (
//     <div className='border border-black p-4 flex flex-col'>
//           <SearchInput />
//           <div className='divider px-3'></div>
//           <Conversations />
//           <LogoutBtn/>
//     </div>
//   )
// }

// export default SideBar

