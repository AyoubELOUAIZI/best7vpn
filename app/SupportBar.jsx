import React from 'react';
import Image from "next/image";

const SupportBar = () => {
  return (
    <div className='flex justify-center items-center bg-gray-700 text-white p-0.5'>
      <Image
            src="/Flag-of-Palestine.png"
            alt="Flag-of-Palestine"
            className="mx-2 "
            width={50} // Set your desired width here
            height={50} // Set your desired height here
          />
     <p className='text-center'>
     Stand with Gaza and Palestine: Peace, Justice, and Humanity
      </p > 
    
      <Image
            src="/Flag-of-Palestine.png"
            alt="Flag-of-Palestine"
            className="mx-2 "
            width={50} // Set your desired width here
            height={50} // Set your desired height here
          />
      
    </div>
  );
};

export default SupportBar;
