import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import MessageContainer from '../components/messagecontainer/MessageContainer'

const Home = () => {
  return (
    <div className=" flex h-full w-full  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <SideBar />
      <MessageContainer />
    </div>
  );
}

export default Home