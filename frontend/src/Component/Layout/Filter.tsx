"use client"
import { useState } from 'react';
import { VscSettings } from "react-icons/vsc";

const Filter = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <>
    <div className='flex mt-16 justify-end p-3 '>  
      <VscSettings onClick={toggleSidebar} size={30}/> 
      
      <aside 
      className={"bg-white tranform "}
      >
        
      </aside>

      
       
    </div>

    </>
  );
};

export default Filter;
