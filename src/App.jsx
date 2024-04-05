import React, { useState } from 'react'
import NotificationBar from './component/NotificationBar'
import Sidebar from './component/Sidebar'
import Content from './component/Content';
import { FaRegMoon } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";



const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return <div >
    <NotificationBar toggleSidebar={toggleSidebar} />
    <div className='flex'>
      <div className={`px-4 ${isSidebarOpen ? 'lg:flex' : 'hidden lg:flex'} bg-gray-50`}>
        <Sidebar />
      </div>
      <div className='w-full'>
        <Content />
      </div>
    </div>
    <div className='fixed bottom-0 right-0 p-8'>
      <h1 className='p-2 mb-2'> <FaRegMoon /></h1>
      <h1 className='bg-sky-300 p-2 text-white rounded-lg'><FaQuestion /></h1>
    </div>
  </div>
}

export default App