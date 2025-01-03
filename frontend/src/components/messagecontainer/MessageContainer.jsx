import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {

    const isNoChatSelected = true

  return (
    <div className="flex flex-col w-full">
      {NoChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-black px-4 py-2 mb-2">
            <span className="text-amber-400 font-bold flex items-center justify-center">
              Nirmal
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer


const NoChatSelected = () => {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
          <p>Welcome 👋 ME CHAT ❄</p>
          <p>Select a chat to start messaging</p>
          <TiMessages className="text-3xl md:text-6xl text-center" />
        </div>
      </div>
    );
}